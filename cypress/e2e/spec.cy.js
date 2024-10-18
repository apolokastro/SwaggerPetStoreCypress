/// <reference types="Cypress" />

//import { constants } from "buffer"
import cypressPage from "../pageObjects/cypressPage"

describe('Test suite', () => {

  beforeEach(function(){
    cy.fixture('example')
    .then(data => {
      this.data = data;
    })
  });

  /*it('First Test', function() {
    const cp = new cypressPage()
    cy.visit('https://example.cypress.io')
    cp.getGetOption().click()
    cy.get('h1').contains('Querying')
    cy.log(this.data.name.nickname);
  })

  it('Second Test', () => {
    const cp = new cypressPage()
    cy.visit('https://example.cypress.io')
    cp.getChildrenOption().click()
    cy.get('h1').contains('Traversal')
  })

  it('Third Test', () => {
    const cp = new cypressPage()
    cy.visit('https://example.cypress.io')
    cp.getGetOption().click()
    cy.get('h1').contains('Queryingx')
  })

    it('getInventoryTest', function() {
      
      cy.request('https://petstore.swagger.io/v2/store/inventory')
      .its('status').should('eq',200)
      cy.log(this.data.name.nickname);
      cy.log(Cypress.currentTest.title);
    })*/

    it('createUserTest', function() {
      
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: {
          id: this.data.createUserTest.id,
          username: this.data.createUserTest.username,
          firstName: this.data.createUserTest.firstName,
          lastName: this.data.createUserTest.lastName,
          email: this.data.createUserTest.email,
          password: this.data.createUserTest.password,
          phone: this.data.createUserTest.phone,
          userStatus: this.data.createUserTest.userStatus
        }
      })
      .its('status').should('eq',200)
    })

    it('getUserTest', function() {
      
      cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/'+this.data.getUserTest.username
      })
      .its('status').should('eq',200)
    })

    it('updateUserTest', function() {
      
      cy.request({
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/user/'+this.data.updateUserTest.username,
        body: {
          firstName: this.data.updateUserTest.firstName,
          lastName: this.data.updateUserTest.lastName
        }
      })
      .its('status').should('eq',200)
    })

    it('deleteUserTest', function() {
      
      cy.request({
        method: 'DELETE',
        url: 'https://petstore.swagger.io/v2/user/'+this.data.deleteUserTest.username
      })
      .its('status').should('eq',200)
    })

})