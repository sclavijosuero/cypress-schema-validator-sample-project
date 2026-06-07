/// <reference types="cypress" />

import petstoreSchema from '../fixtures/schemas/petstore-swagger2-schema-errors.json'

describe(`Petstore Swagger2 Test Suite - Standard cy.request) `, () => {
    
    it(`Test will FAIL - Swagger2 Schema Validation - Use Case: "/pet/findByStatus?status=pending" - "get" - 200`, () => {
        const findByStatusReq = {
            url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending',
            headers: { 'Content-Type': 'application/json' }
        }

        cy.request(findByStatusReq)
            .validateSchema(petstoreSchema, { endpoint: '/pet/findByStatus', method: 'get', status: 200 } )
    })
})
