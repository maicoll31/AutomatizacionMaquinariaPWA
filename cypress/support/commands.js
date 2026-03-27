export const iniciar_sesion = function () {

    cy.visit('https://www1.sincoerp.com/SincoPlusMyE/V3/Maquinaria/Web/');

    //CAMPO USUARIO
    cy.get('.css-ef1vrg > .css-1msr7s0 > .css-t42gh3 > .css-12ugur8 > .css-16gx1x3 > .css-ogz4a3 > .css-1swzdn0 > :nth-child(3) > .MuiGrid2-grid-md-12 > .css-1430418 > .css-16lfw73 > .MuiBox-root > :nth-child(1) > .MuiInputBase-root > #Usuario').
        wait(2000).click()
        .type(this.Sucursales[0].usuario);

    //CAMPO CONTRASEÑA
    cy.get('.css-ef1vrg > .css-1msr7s0 > .css-t42gh3 > .css-12ugur8 > .css-16gx1x3 > .css-ogz4a3 > .css-1swzdn0 > :nth-child(3) > .MuiGrid2-grid-md-12 > .css-1430418 > .css-16lfw73 > .MuiBox-root > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > #Contraseña')
        .wait(2000).click()
        .type(this.Sucursales[0].password);

    //BTN CONSULTAR
    cy.get('.css-ef1vrg > .css-1msr7s0 > .css-t42gh3 > .css-12ugur8 > .css-16gx1x3 > .css-ogz4a3 > .css-1swzdn0 > :nth-child(3) > .MuiGrid2-grid-md-12 > .css-1430418 > .css-16lfw73 > .css-1xli2ds > .MuiStack-root > .MuiGrid2-container > .MuiGrid2-grid-xs-12 > .MuiButtonBase-root')
        .wait(3000).click().wait(2000);
    //EMPRESA
    cy.get('.css-ef1vrg > .css-1msr7s0 > .css-t42gh3 > .css-12ugur8 > .css-16gx1x3 > .css-ogz4a3 > .css-1swzdn0 > :nth-child(3) > .MuiGrid2-grid-md-12 > .css-134mtex > .css-16lfw73 > .MuiBox-root > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #EmpresaLogin')
        .click().wait(2000)
        .type(this.Sucursales[0].empresa).type("{enter}");



    //SUCURSAL
    cy.get('.css-ef1vrg > .css-1msr7s0 > .css-t42gh3 > .css-12ugur8 > .css-16gx1x3 > .css-ogz4a3 > .css-1swzdn0 > :nth-child(3) > .MuiGrid2-grid-md-12 > .css-134mtex > .css-16lfw73 > .MuiBox-root > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #SucursalLogin')
        .click().wait(2000)
        .type(this.Sucursales[0].sucursales[0].Sucursal_1).type("{enter}");

    //BTN INGRESSAR
    cy.get('.css-ef1vrg > .css-1msr7s0 > .css-t42gh3 > .css-12ugur8 > .css-16gx1x3 > .css-ogz4a3 > .css-1swzdn0 > :nth-child(3) > .MuiGrid2-grid-md-12 > .css-134mtex > .css-16lfw73 > .css-1ndb9qj > .MuiStack-root > .MuiGrid2-container > .MuiGrid2-root > .MuiButtonBase-root')
        .click().wait(5000);

};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const cerrar_sesion = function () {

    //BTN CAMBIO DE SUCURSAL Y CIERRE DE SESIÓN
    cy.get(':nth-child(3) > .MuiButtonBase-root')
        .click().wait(2000);
    cy.get('.css-dgbjf5 > .MuiTypography-root').click();

}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const llenado_equipo_proyecto_ubicacion = function () {
    //PREOPERACIONAL
    cy.get(':nth-child(2) > .MuiPaper-root > .css-kljmsf > .MuiGrid2-container > .MuiGrid2-grid-xs-4 > img')
        .click().wait(4000)
    //Seleccionar equipo
    cy.get('#Equipo')
        .type(this.Sucursales[0].idEquipoPreoperacional).wait(2000).type("{enter}");


    //Seleccionar proyecto, ubicación y medidor
    //proyecto
    cy.get('#Obra').click().clear()
        .type(this.Sucursales[0].proyecto).wait(4000).type("{enter}")


    //Ubicación
    cy.get('#UbiacionXObra').click()
        .type(this.Sucursales[0].ubicacion).wait(3000).type("{enter}")

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const llenado_equipo_proyecto_ubicacion_item = function () {
    //PREOPERACIONAL
    cy.get(':nth-child(2) > .MuiPaper-root > .css-kljmsf > .MuiGrid2-container > .MuiGrid2-grid-xs-4 > img')
        .click().wait(4000)
    //Seleccionar equipo
    cy.get('#Equipo')
        .type(this.Sucursales[0].idEquipoPreoperacional).wait(2000).type("{enter}");


    //Seleccionar proyecto, ubicación y medidor
    //proyecto
    cy.get('#Obra').click().clear()
        .type(this.Sucursales[0].proyecto).wait(4000).type("{enter}")


    //Ubicación
    cy.get('#UbiacionXObra').click()
        .type(this.Sucursales[0].ubicacion).wait(3000).type("{enter}")

    //Item

    cy.get('#ItemsObra').click();

    cy.get('ul[role="listbox"] li')
        .should('be.visible')
        .first()
        .click();
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const validar_medidores_sin_superar = function () {

    //Medidor 1 o 2

    function sumarMedidor(selector) {
        cy.get(selector)
            .invoke('attr', 'placeholder')
            .then((placeholder) => {

                const actual = parseInt(placeholder) || 0;
                const nuevo = actual + 10;


                cy.get(selector)
                    .clear()
                    .type(nuevo);


            });

    }

    // MEDIDOR 1 (siempre existe)
    sumarMedidor('[id="Medidor1-Trabajo:"]');

    // MEDIDOR 2 (solo si existe)
    cy.get('body').then(($body) => {

        if ($body.find('[id="Medidor2-Trabajo:"]').length > 0) {

            sumarMedidor('[id="Medidor2-Trabajo:"]');

        } else {
            cy.log('Medidor2 no aparece en esta prueba');
        }

    });

    //BTN CONSULTAR

    cy.get('.MuiBox-root > .MuiButtonBase-root').wait(3000).click()

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const validar_medidores_superando = function () {

    //Medidor 1 o 2

    function sumarMedidor(selector) {
        cy.get(selector)
            .invoke('attr', 'placeholder')
            .then((placeholder) => {

                const actual = parseInt(placeholder) || 0;
                const nuevo = actual + 100000;


                cy.get(selector)
                    .clear()
                    .type(nuevo);


            });

    }

    // MEDIDOR 1 (siempre existe)
    sumarMedidor('[id="Medidor1-Trabajo:"]');

    // MEDIDOR 2 (solo si existe)
    cy.get('body').then(($body) => {

        if ($body.find('[id="Medidor2-Trabajo:"]').length > 0) {

            sumarMedidor('[id="Medidor2-Trabajo:"]');

        } else {
            cy.log('Medidor2 no aparece en esta prueba');
        }

    });

    //BTN CONSULTAR

    cy.get('.MuiBox-root > .MuiButtonBase-root').wait(3000).click()
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const preoperacional = function () {

    //Actividades y OBS
    cy.get('.MuiCard-root').eq(1).wait(2000).click()
    cy.get('.MuiCard-root').eq(2).wait(2000).click()

    cy.get('#outlined-multiline-static').click().type("Prueba preoperacional")
        .wait(2000)

    //Adjuntar imagen

    cy.get('label input[type="file"]')
        .selectFile('cypress/fixtures/Preoperacional.png', { force: true });

    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click();

    cy.get('label input[type="file"]')
        .selectFile('cypress/fixtures/Preoperacional2.png', { force: true });

    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click();

    cy.get('label input[type="file"]')
        .selectFile('cypress/fixtures/Preoperacional3.png', { force: true });

    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click();

    cy.get('label input[type="file"]')
        .selectFile('cypress/fixtures/Preoperacional4.png', { force: true });

    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click();

    cy.get('label input[type="file"]')
        .selectFile('cypress/fixtures/Preoperacional5.png', { force: true });



    //Guardar
    cy.contains('button', 'Guardar')
        .click().wait(3000);

    //Enviar y terminar

    cy.contains('button', 'Terminar y enviar reporte')
        .click();

}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const observaciones_finales_y_enviar = function () {
    //Observaciones generales

    cy.get('#outlined-multiline-static')
        .type('Este es un comentario de prueba');

    //Enviar

    cy.contains('button', 'Enviar')
        .click().wait(3000);

}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const seleccionar_hora_inicial_preoperacional = function () {

    cy.contains('Hora inicio')
        .parents('.MuiFormControl-root')
        .within(() => {

            cy.get('[aria-label="Hours"]')
                .type('08', { force: true });

            cy.get('[aria-label="Minutes"]')
                .type('30', { force: true });

            cy.get('[aria-label="Meridiem"]')
                .type('AM', { force: true }).wait(2000);

            //cy.contains('button', 'Aceptar').click()
        });

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const seleccionar_hora_final_preoperacional = function () {

    cy.contains('Hora final')
        .parents('.MuiFormControl-root')
        .within(() => {

            cy.get('[aria-label="Hours"]')
                .type('08', { force: true });

            cy.get('[aria-label="Minutes"]')
                .type('50', { force: true });

            cy.get('[aria-label="Meridiem"]')
                .type('AM', { force: true }).wait(2000);

            //cy.contains('button', 'Aceptar').click()
        });

}//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const iniciar_sesion_web = function () {

    cy.visit(this.Sucursales[0].urlweb);

    //CAMPO USUARIO
    cy.get('#txtUsuario')
        .wait(2000).click()
        .type(this.Usuariosweb[0].usuario);

    //CAMPO CONTRASEÑA
    cy.get('#txtContrasena')
        .wait(2000).click()
        .type(this.Usuariosweb[0].password);

    //BTN CONSULTAR
    cy.get('#btnSiguiente')
        .wait(3000).click().wait(2000);
    //EMPRESA
    cy.get('#ddlEmpresa')
        .select(this.Usuariosweb[0].empresa);

    //SUCURSAL

    cy.get('#txtSucursal').click()
        .clear().wait(1000)
        .type(this.Usuariosweb[0].sucursales[0].Sucursal_1).type("{enter}");


    //BTN INGRESSAR
    //cy.get('.css-ef1vrg > .css-1msr7s0 > .css-t42gh3 > .css-12ugur8 > .css-16gx1x3 > .css-ogz4a3 > .css-1swzdn0 > :nth-child(3) > .MuiGrid2-grid-md-12 > .css-134mtex > .css-16lfw73 > .css-1ndb9qj > .MuiStack-root > .MuiGrid2-container > .MuiGrid2-root > .MuiButtonBase-root')
    //.click().wait(5000);

};

