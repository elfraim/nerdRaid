import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLearnComponent } from './main-learn/main-learn.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  {
    path: 'learn',
    component: MainLearnComponent,
    pathMatch: 'full'
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'blog', component: BlogComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
