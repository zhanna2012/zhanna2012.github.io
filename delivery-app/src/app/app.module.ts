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

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
    ProductTableComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
