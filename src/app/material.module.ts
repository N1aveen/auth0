// Modules
import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatButtonModule,
         MatIconModule,
         MatInputModule,
         MatCardModule,
         MatDialogModule,
         MatProgressSpinnerModule,
         MatGridListModule
        } from '@angular/material';


const MatModules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatGridListModule
];

@NgModule({
    imports: MatModules,
    exports: MatModules
})

export class MaterialModule {}