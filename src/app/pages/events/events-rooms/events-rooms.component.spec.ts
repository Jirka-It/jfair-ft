import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRoomsComponent } from './events-rooms.component';

describe('EventsRoomsComponent', () => {
  let component: EventsRoomsComponent;
  let fixture: ComponentFixture<EventsRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
