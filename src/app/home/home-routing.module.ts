import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: '', component: HomePage,
        children: [
            {path: 'main', loadChildren: './components/main/main.module#MainPageModule'},
            {path: 'users', loadChildren: './components/users/users.module#UsersPageModule'},
            {path: 'companies', loadChildren: './components/companies/companies.module#CompaniesPageModule'},
            {path: 'errors', loadChildren: './components/errors/errors.module#ErrorsPageModule'},
            {path: 'items', loadChildren: './components/items/items.module#ItemsPageModule'},
            {path: 'cars', loadChildren: './components/cars/cars.module#CarsPageModule'},
            {path: 'orders', loadChildren: './components/orders/orders.module#OrdersPageModule'},
            {path: '', redirectTo: 'main', pathMatch: 'full'},
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}