/// <reference types="Cypress" />

describe("Testuojame Contacts skilties formų validavimą", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Contacts");
  });

  it("Tikriname, ar forma išsisiųs su tuščiais laukais", () => {
    cy.get("#btn-submit").click();
    cy.get("window:alert").should("not.exist");
  });

  it("Tikriname, ar forma išsisiųs su tinkamais laukais", () => {
    cy.get("#first-name").type("jonas");
    cy.get("#last-name").type("jonaitis");
    cy.get("#email").type("jonas@gmail.com");
    cy.get("#phone").type("61212112");
    cy.get("#message").type("labas");

    cy.get("#btn-submit").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Your form was successfully submitted!`);
    });
  });
});
