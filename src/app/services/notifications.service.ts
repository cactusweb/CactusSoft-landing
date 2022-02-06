import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
  ) { }

  generateNotif( message: string ){
    let notif = document.createElement('div')
    notif.classList.add('notification')
    
    notif.innerHTML = `
      <div class="icon"></div>
      <p class="message">${message}</p>
    `

    let notifBlock = document.querySelector( '#notifications-block' );
    notifBlock?.appendChild( notif );

    setTimeout(() => {
      notif.classList.add( 'show' );
    }, 100);

    setTimeout(() => {
      notif.classList.remove( 'show' )
    }, 5000);

    setTimeout(() => {
      notif.remove();
    }, 5500);
    
  }
}
