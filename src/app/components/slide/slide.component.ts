import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-slide',
  templateUrl: 'slide.component.html',
  styleUrls: ['slide.component.css'],
})
export class Slide {
  @Input()
  heading: string = 'Slide #1'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
