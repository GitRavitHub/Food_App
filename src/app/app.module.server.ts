import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

// Import the AppModule, but ensure no circular dependencies are created
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // Import AppModule only if it does not import AppServerModule or cause circular imports
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
