/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventsStandsTableComponent } from './events-stands-table.component';

describe('EventsStandsTableComponent', () => {
  let component: EventsStandsTableComponent;
  let fixture: ComponentFixture<EventsStandsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsStandsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsStandsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
