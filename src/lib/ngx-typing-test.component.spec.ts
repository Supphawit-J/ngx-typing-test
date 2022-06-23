import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTypingTestComponent } from './ngx-typing-test.component';

describe('NgxTypingTestComponent', () => {
  let component: NgxTypingTestComponent;
  let fixture: ComponentFixture<NgxTypingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTypingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTypingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
