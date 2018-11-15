import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public postId : string;
  public comments: any[];

  constructor(private activatedRoute: ActivatedRoute, private _router: Router) {
    this.activatedRoute.params.subscribe(params => this.postId = params.id)
  }

  async ngOnInit() {
    this.comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`).then(res => res.json());
  }

  goBack() {
    // this._router.navigate(['']);
    this._router.navigateByUrl('');
  }
}
