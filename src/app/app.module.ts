import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemdetailsComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
