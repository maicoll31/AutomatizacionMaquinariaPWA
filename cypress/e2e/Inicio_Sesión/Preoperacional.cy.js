import {
  preoperacional, iniciar_sesion, llenado_equipo_proyecto_ubicacion, llenado_equipo_proyecto_ubicacion_item, validar_medidores_sin_superar, validar_medidores_superando, observaciones_finales_y_enviar,
  seleccionar_hora_inicial_preoperacional, seleccionar_hora_final_preoperacional, iniciar_sesion_web
} from '../../support/commands';

describe('casos de pruebas preoperacional', () => {

  beforeEach(function () {
    cy.fixture('Sucursales').as('Sucursales');
    cy.fixture('Usuariosweb').as('Usuariosweb')
  });

  const Flujo_Correcto_PreoperacionalCompleto = function () {
    iniciar_sesion.call(this);
    llenado_equipo_proyecto_ubicacion_item.call(this);
    validar_medidores_sin_superar.call(this);
    preoperacional.call(this);
    seleccionar_hora_inicial_preoperacional.call(this);
    seleccionar_hora_final_preoperacional.call(this);
    observaciones_finales_y_enviar.call(this);
  };

  const validar_creacion_preoperacional = function () {
     iniciar_sesion_web.call(this)
    
  };
  const flujo_validacion_superando_medidores = function () {
    iniciar_sesion.call(this);
    llenado_equipo_proyecto_ubicacion_item.call(this);
    validar_medidores_superando.call(this);
    
  };

  it('caso de prueba completo', function () {
    Flujo_Correcto_PreoperacionalCompleto.call(this);
  });

  it('validar creacion preoperacional', function () {
   validar_creacion_preoperacional.call(this)
  });

  it('prueba', function () {
    flujo_validacion_superando_medidores.call(this)

  });

});