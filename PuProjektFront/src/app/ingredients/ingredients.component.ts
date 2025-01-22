import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
  selector: 'app-ingredients',
  standalone: false,
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css',
  providers: [ConfirmationService, MessageService]
})
export class IngredientsComponent implements OnInit {

  allIngredients: any[] = [];
  usersIngredients: any[] = [];
  ingredientToAdd: any = null;
  amountToAdd: number | null = null;

  isEditing: boolean = false;
  editingIngredient: any = null;
  previousQuantity: number | null = null;
  selectedUnit: any | null = null;
  newQuantity: number | null = null;

  constructor(private _http: HttpClient,
              private _toastrService: ToastrService,
              private confirmationService: ConfirmationService,
              ) { }

  ngOnInit() {
    this._getData();
  }

  private _getData() {
    this._getAllIngredients();
    this._getUsersIngredients();
  }

  addIngredient() {
    const apiUrl = `http://localhost:5266/api/user/ingredients`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    const payload = {
      ingredientId: this.ingredientToAdd?.id || 0,
      name: this.ingredientToAdd?.name || '',
      category: this.ingredientToAdd?.category || '',
      unit: this.ingredientToAdd?.unit || '',
      quantity: this.amountToAdd || 0
    };
    this._http.post(apiUrl, payload, {headers}).subscribe(res => {
      this._toastrService.success('Dodano składnik.');
      this._getUsersIngredients();
      this.ingredientToAdd = null;
      this.amountToAdd = null;
    },  error => {
      const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
      this._toastrService.error(errorMessage, 'Błąd podczas dodawania składnika.');
    })
  }

  deleteIngredient(ingredient: any) {
    if(confirm("Czy na pewno chcesz usunąć składnik "+ ingredient.name + '?')) {

    const apiUrl = `http://localhost:5266/api/user/ingredients/${ingredient.ingredientId}`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    this._http.delete(apiUrl, {headers}).subscribe(
      response => {
          this._toastrService.success("Pomyślnie usunięto składnik!")
          this._getUsersIngredients();
      },
      error => {
        this._toastrService.error(error.error, "Błąd podczas usuwania składnika");
      }
    );
    }
  }

  initEdit(ingredient: any): void {
    this.isEditing = true;
    this.editingIngredient = ingredient;
    this.previousQuantity = ingredient.quantity;
    this.newQuantity = ingredient.quantity;
    this.selectedUnit = ingredient.unit;
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editingIngredient = null;
    this.newQuantity = null;
    this.previousQuantity = null;
    this.selectedUnit = null;
  }

  saveEdit(): void {
    if (this.editingIngredient && this.newQuantity !== this.previousQuantity) {
      const apiUrl = `http://localhost:5266/api/user/ingredients/${this.editingIngredient.ingredientId}`;
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      const body = JSON.stringify(this.newQuantity);

      this._http.put(apiUrl, body, {headers}).subscribe(res => {
        this._toastrService.success('Zedytowano ilość.');
        this._getUsersIngredients();
      },  error => {
        const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
        this._toastrService.error(errorMessage, 'Błąd podczas edycji ilości składnika.');
      })

    }
    this.isEditing = false;
    this.editingIngredient = null;
    this.newQuantity = null;
    this.selectedUnit = null;
  }

  checkButtonDisability() {
    return this.amountToAdd && this.ingredientToAdd;
  }

  private _getAllIngredients() {
    const apiUrl = `http://localhost:5266/api/ingredients`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    this._http.get<any>(apiUrl, {headers}).subscribe(res => {
      this.allIngredients = res;
      console.log(this.allIngredients);
    })
  }

  private _getUsersIngredients() {
    const apiUrl = `http://localhost:5266/api/user/ingredients`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    this._http.get<any>(apiUrl, {headers}).subscribe(res => {
      this.usersIngredients = res;
      console.log(this.usersIngredients);
    })
  }
}
