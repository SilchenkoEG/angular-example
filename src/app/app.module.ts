import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatGridListModule,
  MatInputModule
} from '@angular/material';
import { CounterComponent } from './counter/counter.component';
import {StoreModule} from '@ngrx/store';
import { counterReducer } from  './root-store/router/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {todoReducer} from "./root-store/toDoList/todo.reducer";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ToDoListComponent,
    PostDetailComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer, toDo:todoReducer }),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
