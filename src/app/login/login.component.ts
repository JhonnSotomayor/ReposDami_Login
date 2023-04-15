import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  isLoggedIn = false;


  


  ngOnInit() {
    // Aquí puedes agregar la lógica que se ejecutará después de que se inicialice el componente
  }

  onSubmit() {
    console.log("Username:", this.username);
    console.log("Password:", this.password);
    if (this.username === "usuario" && this.password === "contraseña") {
      console.log("Login successful");
      this.isLoggedIn = true;
    } else {
      console.log("Invalid username or password");
      this.isLoggedIn = false;
    }
  }
  

}