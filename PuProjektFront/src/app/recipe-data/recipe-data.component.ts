import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-recipe-data',
  standalone: false,

  templateUrl: './recipe-data.component.html',
  styleUrl: './recipe-data.component.css'
})
export class RecipeDataComponent implements OnInit {

  recipeData: any;
  recipeId: string | null = null;
  requiredIngredients: any[] = [];
  userIngredients: any[] = [];
  formattedInstructions: string = '';
  hasAllIngredients: boolean = true;

  visibleConfirmModal: boolean = false;
  visibleDangerConfirmModal: boolean = false;

  constructor(private _http: HttpClient,
              private _toastrService: ToastrService,
              private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.recipeId = this._route.snapshot.paramMap.get('id');
    this._readData();
  }

  checkIngredients(): void {
    this.hasAllIngredients = this.requiredIngredients.every(required => {
      const userIngredient = this.userIngredients.find(
        user => user.ingredientId === required.ingredientId
      );
      return userIngredient && userIngredient.quantity >= required.quantity;
    });
  }

  getUserIngredientQuantity(ingredientId: number): number | null {
    const userIngredient = this.userIngredients.find(
      (userIng) => userIng.ingredientId === ingredientId
    );
    return userIngredient ? userIngredient.quantity : null;
  }

  hasSufficientQuantity(ingredient: any): boolean {
    const userQuantity = this.getUserIngredientQuantity(ingredient.ingredientId) || 0;
    return userQuantity >= ingredient.quantity;
  }

  initImplementRecipe() {
    if (this.hasAllIngredients) {
        this.visibleConfirmModal = true;
    } else {
        this.visibleDangerConfirmModal = true;
    }
  }

  implementRecipe() {
    this.visibleConfirmModal = false;
    this.visibleDangerConfirmModal = false;

    const apiUrl = `http://localhost:5266/api/recipes/${this.recipeId}/complete`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    this._http.post(apiUrl, {}, { headers }).subscribe(
      response => {
        this._toastrService.success('Pomyślnie zrealizowano przepis. Twoje składniki zostały zaktualizowane.');
        this._getRecipeData();
      },
      error => {
        const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
        this._toastrService.error(errorMessage, 'Błąd podczas realizacji przepisu.');
      }
    )

  }

  private _readData() {
    this._getRecipeData();
  }

  private _getRecipeData() {
    const apiUrl = `http://localhost:5266/api/recipes/${this.recipeId}`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    this._http.get(apiUrl, { headers}).subscribe(
      response => {
        this.recipeData = response;
        this.formattedInstructions = this.recipeData.instructions.replace(/(?:\r\n|\r|\n)/g, '<br>');
        this.requiredIngredients = this.recipeData.ingredients;
        this._getUserIngredients();
      },
      error => {
        const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
        this._toastrService.error(errorMessage, 'Błąd podczas pobierania danych przepisu.');
      }
    )
  }

  private _getUserIngredients() {
    const apiUrl = `http://localhost:5266/api/user/ingredients`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    this._http.get<any>(apiUrl, {headers}).subscribe(res => {
      this.userIngredients = res;
      this.checkIngredients();
    })
  }

}
