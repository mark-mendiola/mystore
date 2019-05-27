import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/* 3rd Party Modules and Services */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/external/in-memory-data/in-memory-data.service';

/* Project Modules and Components */
import { SharedRoutingModule } from './shared-routing.module';
import { NgsFormComponent } from './components/ngs-form/ngs-form.component';
import { NgsFieldGroupComponent } from './components/ngs-form/ngs-field-group/ngs-field-group.component';
import { NgsFieldComponent } from './components/ngs-form/ngs-field/ngs-field.component';
import { TextareaComponent } from './components/ngs-form/ngs-field/fields/textarea/textarea.component';
import { SelectComponent } from './components/ngs-form/ngs-field/fields/select/select.component';
import { InputComponent } from './components/ngs-form/ngs-field/fields/input/input.component';
import { ImageUploadComponent } from './components/ngs-form/ngs-field/fields/image-upload/image-upload.component';

/* Layout */
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { HeaderComponent } from './components/templates/header/header.component';

/* Miscellaneous */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    NgsFormComponent,
    NgsFieldComponent,
    TextareaComponent,
    SelectComponent,
    InputComponent,
    ImageUploadComponent,
    NgsFieldGroupComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false
      }
    ),
    ReactiveFormsModule,
    FontAwesomeModule,
    PaginationModule.forRoot()
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    NgsFormComponent,
    NgsFieldComponent,
  ]
})
export class SharedModule { }
