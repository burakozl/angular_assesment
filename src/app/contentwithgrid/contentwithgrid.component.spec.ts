import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentwithgridComponent } from './contentwithgrid.component';

describe('ContentwithgridComponent', () => {
  let component: ContentwithgridComponent;
  let fixture: ComponentFixture<ContentwithgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentwithgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentwithgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
