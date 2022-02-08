import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bind-error-view',
  templateUrl: './bind-error-view.component.html',
  styleUrls: ['./bind-error-view.component.scss']
})
export class BindErrorViewComponent implements OnInit {
  @Input() errStatus: number
  @Output() onTryAgain = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
