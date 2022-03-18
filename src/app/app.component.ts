import { Component } from '@angular/core';
import { OmdbApiService } from './services/omdb-api.service';
import { IOMDBResponse } from './omdbresponse';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMoDjHDOfE0Byw6LvNG4GbLikuZpBdt1g",
  authDomain: "moviefinder-d5e67.firebaseapp.com",
  projectId: "moviefinder-d5e67",
  storageBucket: "moviefinder-d5e67.appspot.com",
  messagingSenderId: "317773832654",
  appId: "1:317773832654:web:93e598dbc7dbcfeaf98b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {
  title = 'movie-finder';
  
  movieData!: IOMDBResponse;
  errorMessage:any;

  constructor(private _ombdbService:OmdbApiService){ }
  
  getMovieDetails(movieName:string) : boolean{
    this._ombdbService.getMovieData(movieName).subscribe(
     movieData => {
        this.movieData=movieData;
        console.log('Director name:' + this.movieData.Director);
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }
}
