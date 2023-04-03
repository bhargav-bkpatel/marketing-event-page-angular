import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
})
export class Navigation {
  @Input()
  button1: string = 'register'
  @Input()
  image_src: string = '/assets/playground_assets/logo-1500h.png'
  @Input()
  button: string = 'register'
  @Input()
  image_alt1: string = 'image'
  @Input()
  image_src1: string = '/playground_assets/logo-white-1500h.png'
  @Input()
  image_alt: string = 'logo'

  constructor() {}
}
