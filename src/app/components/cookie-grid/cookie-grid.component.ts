import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-grid',
  templateUrl: './cookie-grid.component.html',
  styleUrls: ['./cookie-grid.component.css']
})
export class CookieGridComponent {
  cookies = Array(9).fill(0).map((_, i) => `Cookie ${i + 1}`);
}