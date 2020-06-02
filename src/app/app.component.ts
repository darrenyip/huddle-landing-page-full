import { Component } from '@angular/core';
import { Card } from './card.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[];
  constructor(){
    this.cards = [
      new Card(
        "Grow Together",
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ",
        'assets/images/illustration-grow-together.svg'
      ),
      new Card(
        "Flowing Conversations",
        "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. ",
        'assets/images/illustration-flowing-conversation.svg'
      ),
      new Card(
        "Your Users",
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. ",
        'assets/images/illustration-your-users.svg'
      ),
    ]
  }
}
