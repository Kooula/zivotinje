import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DogsComponent } from './components/dogs/dogs.component';
import { HeaderComponent } from './components/header/header.component';
import { CatsComponent } from './components/cats/cats.component';

@NgModule({
  declarations: [AppComponent, DogsComponent, HeaderComponent, CatsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
