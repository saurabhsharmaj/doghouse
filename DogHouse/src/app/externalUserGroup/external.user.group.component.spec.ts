import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalUserGroupComponent } from './external.user.group.component';

describe('ExternalUserGroupComponent', () => {
  let component: ExternalUserGroupComponent;
  let fixture: ComponentFixture<ExternalUserGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalUserGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
