/// <reference types="Cypress" />

describe("Testuojame Programming Topics skiltį", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Courses/Programming");
  });

  it("Tikriname, ar buvo užkrautos kortelės", () => {
    cy.get("#python").should("exist");
    cy.get("#data-science").should("exist");
  });
});
