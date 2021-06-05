 import {Routes} from '@angular/router';

 export const FRONTEND_ROUTES:Routes=[
     {
         path:'',
         loadChildren:()=> import ('../uac/uac.module').then(m=>m.UACModule)
         
     }
 ]