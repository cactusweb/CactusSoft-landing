import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  fullpage;

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
