import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ContentwithgridComponent } from './contentwithgrid/contentwithgrid.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'one'},
  {path:'one',component:ContentComponent},
  {path:'two',component:ContentwithgridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
