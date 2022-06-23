# NgxTypingTest

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0
and [Angular Material](https://v13.material.angular.io/).

## Install

```
npm i @supphawit/ngx-typing-test
```

## API reference

### NgxTypingTestConfig

List of configuration for setting the library.

```ts
export interface NgxTypingTestConfig {
  time: number;
  maxWordsInRow: number;
  attempts: number;
  language: 'en' | 'de' | 'nl' | 'fr' | 'es' | 'ca' | 'it' | 'pt' | 'th' | 'ja';
}
```

**Default:**

```ts
  time: 60;
maxWordsInRow: 10;
attempts: -1; /// unlimited
language: 'en';
```

### NgxTypingTestResult

This is an object you will get when the test has done.

```ts
export interface NgxTypingTestResult {
  wordsSubmitted: number;
  wordsCorrect: number;
  charsTyped: number;
}
```

### NgxTypingTestComponent

selector: `<ngx-typing-test></ngx-typing-test>`

#### Additional properties

| Name                                      | Description                  |
|-------------------------------------------|------------------------------|
| @Input() config: `NgxTypingTestConfig`    | configuration of typing test |
| @Output() finished: `NgxTypingTestResult` | result of typing test        |

## Usage

### Add NgxTypingTestModule

```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxTypingTestModule} from 'ngx-typing-test';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ///other imports
    NgxTypingTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```

### Set tying test configuration

you can set configuration of typing test by using ***config*** input decorator.

app.component.ts

```ts
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-libs';
  public config = {
    time: 5,
    maxWordsInRow: 10,
    attempts: 2,
    language: 'en',
  };

}

```

app.component.html

```html

<ngx-typing-test [config]="config"></ngx-typing-test>
```

### Log typing test result

you can log the test result by using ***finished*** output decorator.

app.component.ts

```ts
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-libs';
  public config = {
    time: 5,
    maxWordsInRow: 10,
    attempts: 2,
    language: 'en',
  };
  
  public done(data: any) {
    console.log(data);
  }
}

```

app.component.html

```html

<ngx-typing-test [config]="config" (finished)="done($event)"></ngx-typing-test>
```

## About us

### Develop by Oliver Schmidt
GitHub: [@olischmidt123](https://github.com/olischmidt123)


npm organization: [@supphawit-j](https://www.npmjs.com/settings/supphawit-j/packages)

_______
