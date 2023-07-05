import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
   // ingresa a detalle-productos, separando cada producto con su id 
    path: 'detalles-productos/:productoId',
    loadChildren: () => import('./pages/detalles-productos/detalles-productos.module').then( m => m.DetallesProductosPageModule)
  },
  {
    path: '**', // cualquier otra ruta que no sea las anteriores
    redirectTo: '' // redireccione a la ruta principal
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
