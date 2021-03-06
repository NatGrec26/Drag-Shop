import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CheckoutModule } from './checkout/checkout.module';
import { AboutUsModule } from './about-us/about-us.module';
import {UiModule} from './ui/ui.module';
import {ContactModule} from './contact/contact.module';
import {TutorialsModule} from './tutorials/tutorials.module';
import {ProductsModule} from './products/products.module';
import { GalleryModule } from './gallery/gallery.module';
import {ShoppingCartModule} from './shopping-cart/shopping-cart.module';
import { DescriptionProductModule } from './description-product/description-product.module';
import * as fromStore from './store';
//import * as fromGuards from './guards';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    NgbModule,
    CheckoutModule,
    AboutUsModule,
    UiModule,
    ContactModule,
    TutorialsModule,
    ProductsModule,
    GalleryModule,
    ShoppingCartModule,
    DescriptionProductModule


  ],
  providers: [
    ...fromStore.services,
    ...fromStore.stores,
    ...fromStore.queries,
    //...fromGuards.guards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
