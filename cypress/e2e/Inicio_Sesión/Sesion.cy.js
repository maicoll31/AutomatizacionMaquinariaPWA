import { cerrar_sesion, iniciar_sesion } from '../../support/commands';
describe('LOGIN', () => {

  before(() => {

    cy.fixture('Sucursales').as('Sucursales');

  });

  const Principal = function () {
   iniciar_sesion.call(this);
    cerrar_sesion.call(this);

  }

  it('Sesion', Principal)
});