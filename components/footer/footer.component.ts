import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerItems: any = [];
  sponsorsList: any = [];

  constructor() {

    this.footerItems = [
      {
        title: 'About',
        href: '/about'
      },
      {
        title: 'Contact',
        href: '/contact'
      },
      {
        title: 'Privacy Policy',
        href: '/privacy-policy'
      }];

    this.sponsorsList = [
      {
        name: 'Coca-Cola',
        logo: 'assets/images/coca-cola.png',
        href: 'https://www.coca-cola.com'
      },
      {
        name: 'Pepsi',
        logo: 'assets/images/pepsi.png',
        href: 'https://www.pepsi.com'
      },
      {
        name: 'Grześki',
        logo: 'assets/images/grzeski.png',
        href: 'https://www.grzeski.pl'
      }];
  }
}
