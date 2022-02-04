import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { SendMailComponent } from './dashboard/send-mail/send-mail.component';
import { MultiMailsComponent } from './dashboard/multi-mails/multi-mails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { PreloaderComponent } from './common/preloader/preloader.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    SidebarComponent,
    DashComponent,
    ContactsComponent,
    SendMailComponent,
    MultiMailsComponent,
    PreloaderComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
    
    //MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
