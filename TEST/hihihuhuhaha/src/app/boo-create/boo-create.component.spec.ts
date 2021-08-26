import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooCreateComponent } from './boo-create.component';

describe('BooCreateComponent', () => {
  let component: BooCreateComponent;
  let fixture: ComponentFixture<BooCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
