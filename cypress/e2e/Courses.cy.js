/// <reference types="Cypress" />

describe("Testuojame Trending Courses skiltį", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Tikriname, ar atvaizduojami tik Business kursai", () => {
    cy.get("#btn-business").click();

    cy.get('[id="business"]').should("have.length", 8);

    cy.get("#development").should("not.exist");
    cy.get("#marketing").should("not.exist");
    cy.get("#design").should("not.exist");
  });

  it("Tikriname, ar atvaizduojami tik Marketing kursai", () => {
    cy.get("#btn-marketing").click();

    cy.get('[id="marketing"]').should("have.length", 8);

    cy.get("#development").should("not.exist");
    cy.get("#business").should("not.exist");
    cy.get("#design").should("not.exist");
  });
});
