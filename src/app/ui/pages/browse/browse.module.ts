import { NgModule } from '@angular/core';
import { BrowseRoutingModule } from '../../routing/browse-routing.module';
import { BrowseComponent } from './browse.component';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    BrowseRoutingModule
  ],
  exports: [
    BrowseComponent
  ],
  providers: []
})
export class BrowseModule { }
