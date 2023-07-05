import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DetallesProductosPage } from './detalles-productos.page';

describe('DetallesProductosPage', () => {
  let component: DetallesProductosPage;
  let fixture: ComponentFixture<DetallesProductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
