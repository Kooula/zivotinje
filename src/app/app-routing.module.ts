import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './components/cats/cats.component';
import { DogsComponent } from './components/dogs/dogs.component';

const routes: Routes = [
  {
    path: 'dogs',
    component: DogsComponent,
  },
  {
    path: 'cats',
    component: CatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
