import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginGuard } from './guard/login.guard';
import { WithsidebarComponent } from './pages/withsidebar/withsidebar.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BlockFormComponent } from './components/block-form/block-form.component';
import { UsersComponent } from './pages/users/users.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { DisplayMessageComponent } from './components/display-message/display-message.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ImagePreviewsComponent } from './components/image-previews/image-previews.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { DisplayCommentsComponent } from './components/display-comments/display-comments.component';
import { AddNewPageComponent } from './pages/add-new-page/add-new-page.component';

const routes: Routes = [
  { path: "", component: SigninComponent },
  {
    path: "dashboard", component: WithsidebarComponent, children: [
      { path: "addNewPage", component: AddNewPageComponent },
      { path: "home", component: MainpageComponent },
      { path: "layout", component: LayoutComponent },
      {path:"comments", component: CommentsComponent, children:[
        {path: "commentPreview/:id" , component: DisplayCommentsComponent}
      ]},
      { path: "imagepreview/:id", component: ImagePreviewsComponent },
      {
        path: "users", component: UsersComponent, children: [
          { path: "sendmessage/:id", component: MessagesComponent }
        ]
      },
      { path: "messages", component: MessagesPageComponent, children: [
        {path: "messagePreview/:id" , component: DisplayMessageComponent}
      ] },
      { path: "addNewBlock", component: BlockFormComponent },
      { path: "gallery", component: GalleryComponent},
    ]
  },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
