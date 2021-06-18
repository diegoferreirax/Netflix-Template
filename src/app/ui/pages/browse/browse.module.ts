import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { BrowseRoutingModule } from '../../routing/browse-routing.module';

import { BrowseComponent } from './browse.component';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    BrowseRoutingModule,
    ComponentsModule
  ],
  exports: [
    BrowseComponent
  ],
  providers: []
})
export class BrowseModule { }
