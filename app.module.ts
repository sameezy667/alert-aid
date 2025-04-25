import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/landing/Home/home.component';
import { FeatureSelectionComponent } from './pages/feature-selection/feature-selection.component';
import { DisasterPredictionComponent } from './pages/disaster-prediction/disaster-prediction.component';
import { ImplementationComponent } from './pages/implementation/implementation.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: HomeComponent },
  { path: 'features', component: FeatureSelectionComponent },
  { path: 'prediction', component: DisasterPredictionComponent },
  { path: 'implementation', component: ImplementationComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', redirectTo: 'landing' } // Optional wildcard route
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureSelectionComponent,
    DisasterPredictionComponent,
    ImplementationComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
