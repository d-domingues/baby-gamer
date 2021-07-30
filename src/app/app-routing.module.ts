import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'family-gallery',
    loadChildren: () =>
      import('./pages/family-gallery/family-gallery.module').then(
        (m) => m.FamilyGalleryPageModule
      ),
  },
  {
    path: 'match-pairs',
    loadChildren: () =>
      import('./pages/match-pairs/match-pairs.module').then(
        (m) => m.MatchPairsModule
      ),
  },
  {
    path: 'who-is',
    loadChildren: () =>
      import('./pages/who-is/who-is.module').then((m) => m.WhoIsModule),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('./pages/collection/collection.module').then(
        (m) => m.CollectionModule
      ),
  },
  {
    path: 'multiple-choice',
    loadChildren: () =>
      import('./pages/multiple-choice/multiple-choice.module').then(
        (m) => m.MultipleChoiceModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
