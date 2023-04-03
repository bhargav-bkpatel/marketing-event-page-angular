import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw4ewm: string = ' '
  rawqj71: string = ' '
  raw2m1h: string = ' '
  rawpzic: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Marketing event page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Marketing event page',
      },
    ])
  }
}
