import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { HighlightAutoResult, HighlightLoader } from "ngx-highlightjs";

const themeGithub: string = 'node_modules/highlight.js/styles/github.css';
const themeAndroidStudio: string = 'node_modules/highlight.js/styles/androidstudio.css';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.less']
})
export class ExamplesComponent implements OnInit {

  response!: HighlightAutoResult;

  code = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Test 1!";
  document.getElementById("demo2").innerHTML = "Test 2!";
}`;

  currentTheme: string = themeGithub;

  constructor(private hljsLoader: HighlightLoader) {
  }

  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }

  changeTheme() {
    this.currentTheme =
      this.currentTheme === themeGithub ? themeAndroidStudio : themeGithub;
    this.hljsLoader.setTheme(themeGithub);
    console.log(this.hljsLoader)
  }

  ngOnInit(): void {
  }
}
