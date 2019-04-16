import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: Array<Article> = [];

  constructor() {
    const article: Article = {
      title: 'Welcome to My First Blog',
      date: new Date('April 15, 2019'),
      imgPath: '../../assets/imgs/IMG_0135.jpeg',
      description: 'Thank you for reading this! I am going to post more stuff soon. Stay tuned!'
    };
    this.articles.push(article);
  }

  ngOnInit() {
  }

}
