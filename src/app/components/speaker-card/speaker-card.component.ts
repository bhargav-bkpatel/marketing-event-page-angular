import { Component, Input } from '@angular/core'

@Component({
  selector: 'speaker-card',
  templateUrl: 'speaker-card.component.html',
  styleUrls: ['speaker-card.component.css'],
})
export class SpeakerCard {
  @Input()
  firstName: string = 'Jonathan'
  @Input()
  lastName: string = 'carey'
  @Input()
  image_alt: string = 'image'
  @Input()
  role: string = 'brand manager @ pepsi'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300'

  constructor() {}
}
