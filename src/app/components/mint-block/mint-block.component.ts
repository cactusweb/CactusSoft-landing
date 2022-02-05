import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mint-block',
  templateUrl: './mint-block.component.html',
  styleUrls: ['./mint-block.component.scss']
})
export class MintBlockComponent implements OnInit {
  mintedCount: number = 0
  supply: number = 200;

  constructor() { }

  ngOnInit(): void {
  }

}
