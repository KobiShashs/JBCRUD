import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NumbersService } from 'src/app/services/numbers.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  public constructor(private title: Title, private numbersService: NumbersService) { }

  ngOnInit(): void {
    this.title.setTitle('Three');
  }

}
