/// <reference types="Cypress" />

describe("Testuojame Partners skiltį", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Tikriname, ar atvaizduojami du įmonių logotipai", () => {
    cy.get("#logo-1").should("exist");
    cy.get("#logo-4").should("exist");
  });
});
