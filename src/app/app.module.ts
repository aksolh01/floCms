import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { GeneralService } from './services/general.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WithsidebarComponent } from './pages/withsidebar/withsidebar.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component'; 
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { PageTableComponent } from './components/page-table/page-table.component';
import { MainInputSearchComponent } from './components/main-input-search/main-input-search.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BlockFormComponent } from './components/block-form/block-form.component';
import { UsersComponent } from './pages/users/users.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { DisplayMessageComponent } from './components/display-message/display-message.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ImagePreviewsComponent } from './components/image-previews/image-previews.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { DisplayCommentsComponent } from './components/display-comments/display-comments.component';
import { AddNewPageComponent } from './pages/add-new-page/add-new-page.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddPostComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    WithsidebarComponent,
    CardPostComponent,
    MainpageComponent,
    PageTableComponent,
    MainInputSearchComponent,
    DeleteDialogComponent,
    LayoutComponent,
    BlockFormComponent,
    UsersComponent,
    CheckBoxComponent,
    SkeletonComponent,
    MessagesComponent,
    MessagesPageComponent,
    DisplayMessageComponent,
    GalleryComponent,
    ImagePreviewsComponent,
    CommentsComponent,
    DisplayCommentsComponent,
    AddNewPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(), BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBQF7KZ0BSne8eaEPnoYo7v6_A_BYPJ7ZM",
      authDomain: "flowoncms.firebaseapp.com",
      projectId: "flowoncms",
      storageBucket: "flowoncms.appspot.com",
      messagingSenderId: "835050545815",
      appId: "1:835050545815:web:a9d5bc001ab193ed077fd2"
    }),
  ],
  providers: [GeneralService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
