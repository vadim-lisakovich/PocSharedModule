import { SharedFeatureComponent } from './components/shared-feature/shared-feature.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathService } from './Services/math.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedFeatureComponent],
  exports: [SharedFeatureComponent]
})
export class SimpModModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SimpModModule,
      providers: [MathService]
    };
  }
}
