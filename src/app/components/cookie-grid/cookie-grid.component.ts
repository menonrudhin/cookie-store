import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cookie-grid',
  templateUrl: './cookie-grid.component.html',
  styleUrls: ['./cookie-grid.component.css']
})
export class CookieGridComponent implements OnInit {
  cookies: string[] = [];
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
          this.cookies.push(`http://localhost:3000${url}`);
        });
        this.isLoading = false;
      }
    });
  }
  
}