describe("Navigation Bar", () => {
  const ids = [
    "tour",
    "product",
    "features",
    "enterprise",
    "support",
    "pricing",
  ];

  before(() => {
    cy.visit("/");
  });

  it("is rendered with correct links", () => {
    cy.get("nav > .container > .py-2")
      .should("exist")
      .each((elements, index) => {
        cy.get(elements).should("have.id", ids[index]).click();
        cy.url().should("include", "/#");
      });
  });

  it("checkout button works", () => {
    cy.get("#cart").click();
    cy.get("#yourShoppingCart").should("have.text", "Your Shopping Cart");
    cy.get("#noItemsInCart").should("have.text", "No items in cart.");
    cy.get("#total").should("have.text", "Total: $0.00");
  });
});
