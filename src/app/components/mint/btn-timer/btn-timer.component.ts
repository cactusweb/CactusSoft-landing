import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-timer',
  templateUrl: './btn-timer.component.html',
  styleUrls: ['./btn-timer.component.scss']
})
export class BtnTimerComponent implements OnInit {
  @Input() startTime: number
  timeToStart: number = 0;
  hh: number = 0;
  ticker: any;

  @Output() onTimerEnd = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.getTimer();
  }

  getTimer(){
    let now = new Date().getTime()
    this.timeToStart = new Date(this.startTime).getTime() - now;
    this.setTicker()
  }

  setTicker(){

    this.hh = Math.floor(this.timeToStart/(1000 * 60 * 60))

    this.ticker = setInterval( () => {
      this.timeToStart = this.timeToStart - 1000;
      this.hh = Math.floor(this.timeToStart/(1000 * 60 * 60))
      if ( this.timeToStart < 0 ){
        this.onTimerEnd.emit()
        clearInterval(this.ticker)
      }
    }, 1000)
  }

}
