// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);







// import { bootstrap }    from '@angular/platform-browser-dynamic';
// // import { FormList } from './components/dform-list/form-list';

// import { FormStore } from './form-store';
// import { App } from './app';

// bootstrap(App, [FormStore]);