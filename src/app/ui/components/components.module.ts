import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProfilesSelectionComponent } from './profiles-selection/profiles-selection.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProfilesSelectionComponent
  ],
  exports: [
    HeaderComponent,
    ProfilesSelectionComponent
  ],
  providers: [],
})
export class ComponentsModule { }
