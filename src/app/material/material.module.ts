import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

const MaterialComponent=[MatButtonModule,
  MatToolbarModule,
  LayoutModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  FormsModule,
  MatTreeModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatTableModule,
  MatSelectModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatCardModule
]

@NgModule({

  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
