import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-purchase-status',
  templateUrl: './purchase-status.component.html',
  styleUrls: ['./purchase-status.component.scss']
})
export class PurchaseStatusComponent implements OnInit {
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
