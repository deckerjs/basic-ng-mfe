import { Routes } from "@angular/router";
import { DefaultContentComponent } from "./components/default-content/default-content.component";

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: DefaultContentComponent,
      pathMatch: 'full'
    },
]