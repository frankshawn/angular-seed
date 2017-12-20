import { Routes } from '@angular/router'

import { LayoutComponent } from '../layout/layout.component'
import { LayoutChildGuardService } from '../layout/layout-child-guard.service'

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivateChild: [
            LayoutChildGuardService
        ],
        children: [
            { path: 'home', loadChildren: './home/index.module#HomeModule' },
            { path: 'simpleUI', loadChildren: './simple-ui/index.module#SimpleUIModule' },
            { path: '**', redirectTo: '/simpleUI/table' }
        ]
    },
    { path: 'account', loadChildren: './account/account.module#AccountModule' },
    { path: '**', redirectTo: '/account/login' }
]
