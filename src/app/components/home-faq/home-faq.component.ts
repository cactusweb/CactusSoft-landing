import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.scss']
})
export class HomeFaqComponent implements OnInit {
  cards

  ngOnInit(): void {
    this.cards = document.querySelectorAll( '.faq-cards .card' );
    this.listenOpeningQuestion();
  }

  listenOpeningQuestion(){
    this.cards.forEach( card => {
      card.addEventListener( 'click', () =>{
        if ( window.innerWidth > 780 ) return;

        card.classList.toggle('active');

        this.resetAllActiveCards( card );
        let p = card.querySelector('p')
        p.style['max-height'] = !card.classList.contains('active') ? '0px' : `${p.scrollHeight + 10}px`


      })
    })
  }

  resetAllActiveCards( targetCard ){
    this.cards.forEach( card => {
      let p = card.querySelector('p')
      if ( card != targetCard ){
        card.classList.remove('active');
        p.style['max-height'] = `0px` 
      }
    });
  }

}
