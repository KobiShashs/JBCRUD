import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';


// STEP 2
const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: '', component: OneComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
