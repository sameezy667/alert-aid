// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/landing/Home/home.component';
import { FeatureSelectionComponent } from './pages/feature-selection/feature-selection.component';
import { DisasterPredictionComponent } from './pages/disaster-prediction/disaster-prediction.component';
import { ImplementationComponent } from './pages/implementation/implementation.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeatureSelectionComponent },
  { path: 'prediction', component: DisasterPredictionComponent },
  { path: 'implementation', component: ImplementationComponent },
  { path: 'about', component: AboutUsComponent }
];
