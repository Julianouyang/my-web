import { HomePageComponent } from './home-page/home-page.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'blog', component: BlogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
