import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  rootClassName: string = ''
  @Input()
  link2: string = 'Speakers'
  @Input()
  link3: string = 'Agenda'
  @Input()
  link1: string = 'About'

  constructor() {}
}
