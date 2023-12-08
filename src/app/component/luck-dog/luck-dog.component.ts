import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuckService } from '../../service/luck.service';
import { StaticMessageDirective } from "../../directives/static-message.directive";

interface Dog {
  id?: string;
  url?: string;
  width?: number;
  height?: number;
}
@Component({
  selector: 'app-luck-dog',
  standalone: true,
  imports: [CommonModule, StaticMessageDirective],
  templateUrl: './luck-dog.component.html',
  styleUrl: './luck-dog.component.css',
})
export class LuckDogComponent {
  dog: Dog = {};

  constructor(private luckService: LuckService) {}

  ngOnInit(): void {
    this.getLuck();
  }

  getLuck(): void {
    this.luckService.getLuck().subscribe((dog) => {
      this.dog = dog[0];
      console.log(dog[0])
    });
  }




}
