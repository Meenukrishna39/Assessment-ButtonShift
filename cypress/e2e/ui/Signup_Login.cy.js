//// <reference types="cypress" />

import { beforeEach } from "mocha";

describe("User signup and login", () => {
  beforeEach(function () {
    cy.fixture("User").then(function (userData) {
      this.userData = userData;
    });
    cy.fixture("Validation").then(function (validation) {
      this.validation = validation;
    });
  });

  it("Should sign up new user successfully", function () {
    cy.visit(this.userData.url);
    cy.get(this.userData.signup.signupButton).click();
    cy.get(this.userData.signup.emailTextarea).type(this.userData.user.email);
    cy.get(this.userData.signup.authchecker).click();
    cy.get(this.userData.signup.passwordTextarea1).type(
      this.userData.user.password
    );
    cy.get(this.userData.signup.passwordTextarea2).type(
      this.userData.user.password
    );
    cy.get(this.userData.signup.enterButtonPassword).click();

    const otp = "123456";
    const otpChars = otp.split("");
    cy.get(this.userData.signup.otpInput).each(($el, index) => {
      cy.wrap($el).type(otpChars[index]);
    });
    cy.get(this.userData.signup.enterOtpButton).click();
    cy.wait(10000);
    cy.get(this.userData.signup.dropDown).click();
    cy.get(this.userData.signup.dropdownList).should(
      "have.length.greaterThan",
      100
    );
    cy.get(this.userData.signup.dropdownListIndia).click();
    cy.get(this.userData.signup.phoneNumberInput).type(
      this.userData.user.phoneNumber
    );
    cy.get(this.userData.signup.verify).click();
    cy.get(this.userData.signup.otpInput).each(($el, index) => {
      cy.wrap($el).type(otpChars[index]);
    });
    cy.wait(5000);
    cy.get(this.userData.signup.verifiedTick).should("be.visible");
    cy.get(this.userData.signup.signup).click();
    cy.wait(15000);
    cy.url().should("include", "community");
    cy.get(this.userData.signup.menu).click();
    cy.get(this.userData.signup.logout).click();
  });

  it("Login existing user successfully", function () {
    cy.visit(this.userData.url);
    cy.get(this.userData.login.loginButton).click();
    cy.get(this.userData.login.emailTextarea).type(`${this.userData.user.email}{enter}`);
    cy.get(this.userData.login.passwordTextarea).type(this.userData.user.password);
    cy.get(this.userData.login.login).click();
    cy.wait(5000);
    cy.url().should("include", "community");
  });


});
