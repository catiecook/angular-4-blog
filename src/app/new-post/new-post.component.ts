import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module'
import { Post } from '../post'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  author = '';

  category= ['Development', 'Art', 'Photography', 'Random', 'Tutorials', 'Quick Projects'];

  model = new Post(1, this.author, this.category[0], 'Lorem ipsum dolor sit amet, postea volumus est at, ei quod tale eos. Quod meis explicari sit ad. Ei summo oportere theophrastus pri, et mel liber vitae suscipiantur. Et pri dolore aliquando, ne delicata reprimique per. Porro noluisse signiferumque ad vel, cum cu iusto vocibus. Sit dolorem consectetuer te.');

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
