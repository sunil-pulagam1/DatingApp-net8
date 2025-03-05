import { Component, OnInit, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient)
  title = 'DatingApp-SPA';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:7150/api/users').subscribe({
      next:response=>this.users = response,
      error: error => console.error(error),
      complete:()=> console.log('complete')
    })
  }
}
