import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiRootModule } from '@taiga-ui/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [AppComponent, TopBarComponent],
  imports: [BrowserModule, TuiRootModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
