import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { MultiMailsComponent } from './dashboard/multi-mails/multi-mails.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SendMailComponent } from './dashboard/send-mail/send-mail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'contacts', component: ContactsComponent },
  { path: 'multi-emails', component: MultiMailsComponent },
  { path: 'send-mail', component: SendMailComponent },
  { path: 'dash', component: DashComponent },
  { path: 'profile', component: ProfileComponent },

  // { path: 'forgot-password', component: RegisterComponent },
  // { path: '**', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
