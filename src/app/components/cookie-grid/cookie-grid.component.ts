import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cookie } from './cookie';

@Component({
  selector: 'app-cookie-grid',
  templateUrl: './cookie-grid.component.html',
  styleUrls: ['./cookie-grid.component.css']
})
export class CookieGridComponent implements OnInit {
  cookies: Cookie[] = [];
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let temp: string[] = [];
    this.http.get<string[]>('http://localhost:3000/api/cookies').subscribe({
      next: (urls) => {
        temp = urls;
      },
      error: (err) => console.error('Failed to fetch cookie images:', err),
      complete: () => {
        temp.forEach( url => {
          // split('/').pop()?.split('.')?.[0]?.replaceAll('%20', ' ')
          let cookie = new Cookie(url.split('/').pop()?.split('.')?.[0]?.replaceAll('%20', ' ') || 'Unknown Cookie',
           `http://localhost:3000${url}`, +(Math.random() * (3.99 - 1.5) + 1.5).toFixed(2), 'Delicious cookie');
          this.cookies.push(cookie);
        });
        this.isLoading = false;
      }
    });
  }
  
}