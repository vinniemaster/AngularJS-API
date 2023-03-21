import { Component, OnInit } from '@angular/core';
import { Root } from './GH_Interface';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API';
  tabela!:any;
  ngOnInit(): void {
    console.log(this.githubservice.getrepos());
    
    this.tabela = this.githubservice.getrepos();
  }
  constructor(private githubservice:GithubService){}


}
