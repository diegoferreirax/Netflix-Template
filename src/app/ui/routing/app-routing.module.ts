import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "browse",
    loadChildren: () => import("./../pages/browse/browse.module").then(m => m.BrowseModule)
  },
  {
    path: '**',
    redirectTo: 'browse',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
