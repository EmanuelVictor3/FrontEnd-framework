import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToLuckDog(): void {
    this.router.navigate(['/luckyy']);
  }

  navigateToBreeds(): void {
    this.router.navigate(['/breeds']);
  }

}
