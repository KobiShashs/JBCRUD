import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NumbersService } from 'src/app/services/numbers.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  public x: number;
 public constructor(private title: Title, private numbersService: NumbersService) { }

  ngOnInit(): void {

    this.title.setTitle('Two');
    this.x = this.numbersService.getNum();
  }

}
