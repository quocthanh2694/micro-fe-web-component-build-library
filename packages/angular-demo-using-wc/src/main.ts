import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import '../../ui-libs/pr1-input.js';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
