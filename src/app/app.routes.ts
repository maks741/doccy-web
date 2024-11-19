import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import {EditDocumentComponent} from './edit-document/edit-document.component';

export const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent,
    title: "Authentication"
  },
  {
    path: ":user-name",
    component: HomeComponent,
    title: "Home"
  },
  {
    path: ":user-name/documents/:document-id",
    component: EditDocumentComponent,
    title: "Edit"
  }
];
