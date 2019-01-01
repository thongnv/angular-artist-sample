import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  { path: '', component: ArtistsComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artists/:id', component: ArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
