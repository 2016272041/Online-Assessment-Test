import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignersComponent } from '../assigners/assigners.component';
import { UpdatetestsComponent } from '../admin/updatetests/updatetests.component';
import { DeletetestsComponent } from '../admin/deletetests/deletetests.component';

const routes: Routes = [
    {
        path: 'assigners',
        component: AssignersComponent
    },
    {
        path: 'updatetests',
        component: UpdatetestsComponent
    },
    {
        path: 'deletetests',
        component: DeletetestsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
