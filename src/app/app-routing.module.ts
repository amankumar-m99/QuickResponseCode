import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';
import { GeneratorComponent } from './generator/generator.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'scan', component: ScannerComponent},
  {path:'generate', component: GeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
