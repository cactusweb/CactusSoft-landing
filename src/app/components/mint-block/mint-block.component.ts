import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mint-block',
  templateUrl: './mint-block.component.html',
  styleUrls: ['./mint-block.component.scss']
})
export class MintBlockComponent implements OnInit {
  mintedCount: number
  supply: number = 200;
  env = environment

  constructor() { }

  ngOnInit(): void {
  }

}
