import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from "@angular/material/select";
import { RouterModule, Routes } from "@angular/router";
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from '@angular/material/table';
import { ProductTableComponent } from './product-table/product-table.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import { TechnologiesComponent } from './technologies/technologies.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EmailService} from "./email.service";
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'design', component: DesignComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    DesignComponent,
    ContactsComponent,
    ProductTableComponent,
    TechnologiesComponent,
    FeedbackFormComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatSelectModule,
        RouterModule,
        MatListModule,
        RouterModule.forRoot(routes),
        MatTabsModule,
        MatTableModule,
        MatStepperModule,
        MatCardModule,
        MatProgressBarModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
