import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  blogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Blog';
      this.blogService.getBlog(+id).subscribe(
        res => {
          this.blogForm.patchValue({
            id: res.id,
            title: res.title,
            description: res.description,
            is_featured: res.is_featured,
            is_active: res.is_active,
          });
          this.imagePath = res.image;
        }
      );
    } else {
      this.pageTitle = 'Create Blog';
    }

    this.blogForm = this.fb.group ({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      is_featured: ['0'],
      is_active: ['1'],
      image: ['']
    });
  }
    onSelectedFile(event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.blogForm.get('image').setValue(file);
      }
    }

    get title() { return this.blogForm.get('title').value; }
    get description() { return this.blogForm.get('description').value; }

    onSubmit() {
      const formData = new FormData();
      formData.append('title', this.blogForm.get('title').value);
      formData.append('description', this.blogForm.get('description').value);
      formData.append('is_featured', this.blogForm.get('is_featured').value);
      formData.append('is_active', this.blogForm.get('is_active').value);
      formData.append('image', this.blogForm.get('image').value);

      const id = this.blogForm.get('id').value;

    if (id) {
      this.blogService.updateBlog(formData, + id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['blog']);
          }
        },
        error => this.error = error
      );
    }
    }
}
