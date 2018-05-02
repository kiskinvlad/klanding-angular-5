import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/***
 * Enable production mode for production environment
 */
if (environment.production) {
  enableProdMode();
}

/***
 * Bootstap error handler
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
