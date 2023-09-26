import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDesejosComponent } from './cadastrar-desejos.component';

describe('CadastrarDesejosComponent', () => {
  let component: CadastrarDesejosComponent;
  let fixture: ComponentFixture<CadastrarDesejosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarDesejosComponent]
    });
    fixture = TestBed.createComponent(CadastrarDesejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
