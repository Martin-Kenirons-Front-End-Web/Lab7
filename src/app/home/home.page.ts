// Importing necessary Angular and Ionic modules
import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';

// Component decorator to define metadata for the HomePage component
@Component({
  selector: 'app-home', // The selector used to include this component in templates
  templateUrl: 'home.page.html', // The HTML template for this component
  styleUrls: ['home.page.scss'], // The styles specific to this component
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent], // Modules imported for use in this component
})
export class HomePage implements OnInit {
  // Array to store movie data fetched from the MovieService
  myMovies: any[] = [];

  // Constructor to inject the MovieService dependency
  constructor(private movieService: MovieService) { }

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    // Fetch movie data from the MovieService and assign it to the myMovies array
    this.movieService.getMovieData().subscribe(
      (data) => {
        this.myMovies = data.Search; // Assign the fetched movie data to the myMovies array
      }
    );
  }
}
