import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

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
              private _fb: FormBuilder,) {
    this.searchForm = this._fb.group({
      filterByPossibility: [null],
      filterByCategory: [null],
      filterByName: [null]
    })
  }

  ngOnInit() {
    this._getData();
  }

  search() {
    //TODO
    console.log(this.searchForm.value);
  }


  private _getData() {
    this._getAllRecipes();
    this.categories = [
      "Przystawki",
      "Dania główne",
      "Desery",
      "Napoje",
      "Sałatki",
      "Zupy",
      "Przekąski",
      "Śniadania",
      "Wegetariańskie",
      "Wegańskie",
      "Bezglutenowe",
      "Ryby i owoce morza",
      "Makaron",
      "Grill",
      "Szybkie i łatwe",
    ];
  }

  private _getAllRecipes() {
    const apiUrl = `http://localhost:5266/api/recipes`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    this._http.get<any>(apiUrl, {headers}).subscribe(res => {
      this.allRecipes = res;
      console.log(this.allRecipes);
    })
  }

}
