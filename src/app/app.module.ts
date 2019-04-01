import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

import { ToolsComponent } from './tools/tools.component';
import { CardToolComponent } from './tools/card-tool/card-tool.component';
import { SearchToolsComponent } from './tools/search-tools/search-tools.component';
import { ModalAddToolComponent } from './tools/modal-add-tool/modal-add-tool.component';
import { ModalRemoveToolComponent } from './tools/card-tool/modal-remove-tool/modal-remove-tool.component';
import { FilterSearch } from './tools/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    HeaderComponent,
    FooterComponent,
    SearchToolsComponent,
    CardToolComponent,
    ModalAddToolComponent,
    ModalRemoveToolComponent,
    FilterSearch
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
