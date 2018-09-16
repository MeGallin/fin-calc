import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing, routingComponents } from './routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoansComponent } from './loans/loans.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule, Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
