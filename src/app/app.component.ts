import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedefinirSenhaComponent } from './components/redefinir-senha/redefinir-senha.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RedefinirSenhaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loja';
}
