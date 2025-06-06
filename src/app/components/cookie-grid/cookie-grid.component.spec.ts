import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieGridComponent } from './cookie-grid.component';

describe('CookieGridComponent', () => {
  let component: CookieGridComponent;
  let fixture: ComponentFixture<CookieGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookieGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
