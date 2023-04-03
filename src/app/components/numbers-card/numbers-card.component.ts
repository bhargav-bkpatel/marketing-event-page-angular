import { Component, Input } from '@angular/core'

@Component({
  selector: 'numbers-card',
  templateUrl: 'numbers-card.component.html',
  styleUrls: ['numbers-card.component.css'],
})
export class NumbersCard {
  @Input()
  image_src: string = '/playground_assets/message-200h.png'
  @Input()
  text: string = 'sessions'
  @Input()
  image_alt: string = 'image'
  @Input()
  number: string = '2,148'

  constructor() {}
}
