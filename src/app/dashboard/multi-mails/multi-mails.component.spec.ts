import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMailsComponent } from './multi-mails.component';

describe('MultiMailsComponent', () => {
  let component: MultiMailsComponent;
  let fixture: ComponentFixture<MultiMailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiMailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
