import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-faq-mobile',
  templateUrl: './home-faq-mobile.component.html',
  styleUrls: ['./home-faq-mobile.component.scss']
})
export class HomeFaqMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll( '.card' ).forEach( card => {
      card.addEventListener( 'click', () => {
        if ( card.classList.contains('active') )
          card.classList.remove('active')
        else 
          card.classList.add('active')
      })
    })
  }


  onClickQuestion(ell){
    console.log( ell )
  }

}
