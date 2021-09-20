import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoModule } from './todos/todo.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, TodoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
