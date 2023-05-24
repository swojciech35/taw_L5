import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  public credentials = {
    title: '',
    text: '',
    image: '',
  };
  constructor(private dataService: DataService, public router: Router) {
  }

  ngOnInit(): void {
  }

  create() {

    this.dataService.addPost(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/blog']);
  }

}
