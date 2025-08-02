// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-schema-validator';

// MOCKING JAVASCRIPT LIBRARIES:
// - Mockoon (https://github.com/mockoon/mockoon)
// - Mock Service Worker (https://github.com/mswjs/msw)
// - MirageJS (https://github.com/miragejs/miragejs)
// - Nock (https://github.com/nock/nock)

Cypress.Commands.add('requestMock', (method = 'GET', url) => {
    const fixturePath = `${url}_${method.toUpperCase()}`

    cy.fixture(fixturePath).then((responseData) => {
        cy.log(`👽👽👽 *** MOCKING REQUEST WITH PROVIDED FIXTURE *** `,  responseData)
        return cy.wrap(responseData)
    })
})