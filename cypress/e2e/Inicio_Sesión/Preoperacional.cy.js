import { preoperacional, iniciar_sesion, llenado_equipo_proyecto_ubicacion,llenado_equipo_proyecto_ubicacion_item,validar_medidores_sin_superar,validar_medidores_superando, medidores } from '../../support/commands';

describe('casos de pruebas preoperacional', () => {

  beforeEach(function () {
    cy.fixture('Sucursales').as('Sucursales');
  });

  const Flujo_Correcto_PreoperacionalCompleto = function () {
    iniciar_sesion.call(this);
    llenado_equipo_proyecto_ubicacion_item.call(this);
    validar_medidores_sin_superar.call(this)
    preoperacional.call(this)
  };

  const flujo_validacion_superando_medidores = function () {
    iniciar_sesion.call(this);
    llenado_equipo_proyecto_ubicacion_item.call(this);
    validar_medidores_superando.call(this)
    preoperacional.call(this)
  };


  it('caso de prueba completo', function () {
    Flujo_Correcto_PreoperacionalCompleto.call(this);
  });

  it('prueba', function () {
    flujo_validacion_superando_medidores.call(this);
  });


  
});