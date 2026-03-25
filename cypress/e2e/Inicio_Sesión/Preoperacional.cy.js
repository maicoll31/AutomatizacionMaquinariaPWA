import { preoperacional, iniciar_sesion, medidores } from '../../support/commands';

describe('Preoperacional', () => {

  beforeEach(function () {
    cy.fixture('Sucursales').as('Sucursales');
  });

  const Flujo_Correcto_PreoperacionalCompleto = function () {
    iniciar_sesion.call(this);
    preoperacional.call(this);
  };



  it('Flujo Correcto PreoperacionalCompleto', function () {
    Flujo_Correcto_PreoperacionalCompleto.call(this);
  });



});