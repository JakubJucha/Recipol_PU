import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-recipes-list',
  standalone: false,
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {

  allRecipes: any[] = [];
  searchForm: FormGroup;
  categories: string[] =[];

  constructor(private _http: HttpClient,
              private _toastrService: ToastrService,
              private _fb: FormBuilder,) {
    this.searchForm = this._fb.group({
      filterByPossibility: [false],
      filterByCategory: [null],
      filterByName: [""]
    })
  }

  ngOnInit() {
    this._getData();
  }

  search() {
    const rData = this.searchForm.value;
    if (rData.filterByCategory === null) {
      rData.filterByCategory = "";
    }

    const apiUrl = `http://localhost:5266/api/recipes/filter`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    this._http.post<any[]>(apiUrl, JSON.stringify(rData), {headers}).subscribe(
      response => {
        this.allRecipes = response;
      },
      error => {
        const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
        this._toastrService.error(errorMessage, 'Błąd podczas pobierania przepisów.');
      }
    )
  }


  private _getData() {
    this._getAllRecipes();
    this._getCategories();
  }

  private _getCategories() {
    const apiUrl = `http://localhost:5266/api/recipes/categories`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    this._http.get<any[]>(apiUrl, {headers}).subscribe(
      response => {
        this.categories = response;
      },
      error => {
        const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
        this._toastrService.error(errorMessage, 'Błąd podczas pobierania kategorii.');
      }
    )
  }

  private _getAllRecipes() {
    const apiUrl = `http://localhost:5266/api/recipes`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    this._http.get<any>(apiUrl, {headers}).subscribe(res => {
      this.allRecipes = res;
    })
  }

}
