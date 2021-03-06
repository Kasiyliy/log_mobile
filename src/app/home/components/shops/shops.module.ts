import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ShopsPage} from './shops.page';
import {ShopListComponent} from './components/shop-list/shop-list.component';
import {DetailsComponent} from './components/details/details.component';

const routes: Routes = [
    {
        path: '', component: ShopsPage,
        children: [
            {path: '', component: ShopListComponent},
            {path: ':id', component: DetailsComponent}
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ShopsPage, ShopListComponent, DetailsComponent]
})
export class ShopsPageModule {
}
