import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'principal', component: PaginaPrincipalComponent
    }
];
