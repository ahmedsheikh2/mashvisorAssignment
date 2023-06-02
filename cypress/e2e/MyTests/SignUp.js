import Signup from '../../Pages/signuppage';
import { randomEmail } from '../../Integration/Utils/utils';

const email = randomEmail();
const signuppage = new Signup();

describe("Mashvisor Application SignUp Flow", function() {

  const testdata = require('../../fixtures/testdata.json');

    testdata.data.forEach((data, index) => {

      it(`Should Signup the Users - ${index + 1}`, function() {

        cy.visit(Cypress.env("app-url"));
        signuppage.signUp(email, data.Password, data.isEmailAlerts, data.isContactedByProf, data.isContactedByRentedPropertyMgmntProf, data.isInterestedInListingAirbnb);
        
        cy.url().should('include', 'https://www.mashvisor.com/explore/search?');
      });
  });
});
