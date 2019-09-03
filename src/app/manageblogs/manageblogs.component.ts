import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blogs } from '../models/blogs';

@Component({
  selector: 'app-manageblogs',
  templateUrl: './manageblogs.component.html',
  styleUrls: ['./manageblogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

  title = 'Manage Blogs';
  blogs: Blogs;
  error: string;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlog().subscribe(
      (data: Blogs) => this.blogs = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.blogService.deleteBlog(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }
}
