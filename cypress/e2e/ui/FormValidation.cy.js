//// <reference types="cypress" />

import { beforeEach } from "mocha";

describe("Form Validations", () => {
  beforeEach(function () {
    cy.fixture("User").then(function (userData) {
      this.userData = userData;
    });
    cy.fixture("Validation").then(function (validation) {
        this.validation = validation;
      });
  });

  it("Should check that all fields are required", function () {
    cy.visit(this.userData.url);
    cy.get(this.userData.signup.signupButton).click();
    cy.get(this.userData.signup.authchecker).click();
    cy.get(this.validation.emailValidation).should('exist');
    cy.get(this.userData.signup.emailTextarea).type(this.userData.user.email);
    cy.get(this.userData.signup.authchecker).click();
    cy.get(this.userData.signup.passwordTextarea1).type(
        this.validation.password1
      );
      cy.get(this.userData.signup.passwordTextarea2).type(
        this.validation.password2
      );
      cy.get(this.userData.signup.enterButtonPassword).click();
cy.get(this.validation.passwordValidation).should('exist');
    cy.get(this.userData.signup.passwordTextarea1).type(
        this.userData.user.password
      );
      cy.get(this.userData.signup.passwordTextarea2).type(
        this.userData.user.password
      );
      cy.get(this.userData.signup.enterButtonPassword).click();

      cy.get(this.userData.signup.enterOtpButton).click();
      cy.get(this.validation.otpFieldValidation).should('exist');
      const otp = "123456";
      const otpChars = otp.split("");
      cy.get(this.userData.signup.otpInput).each(($el, index) => {
        cy.wrap($el).type(otpChars[index]);
      });

  });
});
