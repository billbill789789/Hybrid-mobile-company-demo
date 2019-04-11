import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'About Us',
      url: '/about'
    },
      {
          title: 'Patients',
          url: '/patients'
      },
      {
          title: 'Pysicians',
          url: '/Pysicians'
      },
      {
          title: 'Pharmacy',
          url: '/Pharmacy'
      },
      {
          title: 'Medical Reps',
          url: '/Medical Reps'
      },
      {
          title: 'Careers',
          url: '/Careers'
      },
      {
          title: 'Event & News',
          url: '/Event & News'
      }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
