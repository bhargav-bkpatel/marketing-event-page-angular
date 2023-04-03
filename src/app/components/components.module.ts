import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Copyright } from './copyright/copyright.component'
import { Footer } from './footer/footer.component'
import { NumbersCard } from './numbers-card/numbers-card.component'
import { SpeakerCard } from './speaker-card/speaker-card.component'
import { EventCard } from './event-card/event-card.component'
import { Navigation } from './navigation/navigation.component'
import { Slide } from './slide/slide.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'

@NgModule({
  declarations: [
    Copyright,
    Footer,
    NumbersCard,
    SpeakerCard,
    EventCard,
    Navigation,
    Slide,
    NavigationLinks,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Copyright,
    Footer,
    NumbersCard,
    SpeakerCard,
    EventCard,
    Navigation,
    Slide,
    NavigationLinks,
  ],
})
export class ComponentsModule {}
