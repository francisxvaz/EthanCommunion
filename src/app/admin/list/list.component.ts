import { Star } from '../star';
import { StarService } from '../star.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'app/admin/person';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  result: Star[];

  constructor(private starService: StarService) { }
  ngOnInit() {
    this.starService.getStars().subscribe(data => {
            this.result = data;
    });
  }
}
