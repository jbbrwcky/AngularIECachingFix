import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CacheInterceptor } from './components/cache-interceptor/cache-interceptor.component';

@NgModule({
  declarations: [
    AppComponent,
    CacheInterceptor
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      'provide': HTTP_INTERCEPTORS,
      'useClass': CacheInterceptor,
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
