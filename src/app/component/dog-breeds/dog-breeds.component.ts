import { Component } from '@angular/core';
import { BreedsService } from "../../service/breeds.service";
import { CommonModule } from "@angular/common";
import { NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


interface Breed {
  id: string;
  name: string;
  country_code: string;
  country_codes: string;
  description: string;
  life_span: string;
  origin: string;
  reference_image_id: string;
  suppressed_tail: number;
  temperament: string;
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  bred_for: string;
  breed_group: string;
}



@Component({
  selector: 'app-dog-breeds',
  standalone: true,
  imports: [CommonModule, NgFor, NgxPaginationModule],
  templateUrl: './dog-breeds.component.html',
  styleUrl: './dog-breeds.component.css'
})
export class DogBreedsComponent {
  breeds: Breed[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pagedBreeds: Breed[] = [];
  

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds(): void {
    this.breedsService.getBreeds().subscribe((breeds) => {
      this.breeds = breeds;
    });
  }

  onPageChange(event: number): void {
    this.currentPage = event;
  }

  setPage(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + 90;
    this.pagedBreeds = this.breeds.slice(startIndex, endIndex);
    this.currentPage = page;
  }

  pageChanged(event: number): void {
    this.setPage(event);
  }

}
