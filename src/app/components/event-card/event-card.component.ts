import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['event-card.component.css'],
})
export class EventCard {
  @Input()
  title: string = 'Inbound Marketing Secrets'
  @Input()
  image_alt: string = 'image'
  @Input()
  text: string =
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=200'

  constructor() {}
}
