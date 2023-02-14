import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StackSkillComponent } from './stack-skill/stack-skill.component';
import { NgModelComponentComponent } from './ng-model-component/ng-model-component.component';
import { NgTemplateComponentComponent } from './ng-template-component/ng-template-component.component';
import { DIComponentComponent } from './dicomponent/dicomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    StackSkillComponent,
    NgModelComponentComponent,
    NgTemplateComponentComponent,
    DIComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
