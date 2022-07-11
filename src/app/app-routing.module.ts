import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './autenticazione/auth.guard';
import { LoginPage } from './autenticazione/login/login.page';
import { RegisterPage } from './autenticazione/register/register.page';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () =>
      import('./page/homepage/homepage.module').then((m) => m.HomepageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./page/about/about.module').then((m) => m.AboutModule),
    canActivate: [AuthGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'login', component: LoginPage },
  { path: 'registrazione', component: RegisterPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
