import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cuidado',
    loadChildren: () => import('./cuidado/cuidado.module').then( m => m.CuidadoPageModule)
  },
  {
    path: 'vamos',
    loadChildren: () => import('./vamos/vamos.module').then( m => m.VamosPageModule)
  },
  {
    path: 'ups',
    loadChildren: () => import('./ups/ups.module').then( m => m.UpsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
