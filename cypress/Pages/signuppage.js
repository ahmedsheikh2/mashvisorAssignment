/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class Signup {
      getUserName(){
      return cy.xpath("//input[@id='signup-email']");
    }
    
    getPassword(){
      return cy.xpath("//input[@id='signup-password']");
    }
  
   
    getSignupButton(){
      return cy.xpath('//button[@id="signupButton"]');
    }
    getemailalert(){
      return cy.xpath('//input[@id="email_opt_in"]');
    }
    getcontactedbyinvestment(){
      return cy.xpath('//input[@id="agent_opt_in"]');
    }
    getcontactedbyproperty(){
      return cy.xpath('//input[@id="property_management_opt_in"]');
    }
    getlistingproperty(){
      return cy.xpath('//input[@id="airbnb_opt_in"]');
    }

  
    //Select username
    typeUserName(strEmail) {
      this.getUserName().type(strEmail, { force: true });
    }
  
    //Select password
    typePassword(strPassword) {
      this.getPassword().type(strPassword, { force: true });
    }
  
    //Select Signin button
    clickSignupButton() {
      this.getSignupButton().click(); 
    }
    verifyEmailAlertCheckbox() {
      this.getemailalert().click({force:true}); 
    }
    verifySpecialistContactCheckbox() {
      this.getcontactedbyinvestment().click({force:true}); 
    }
    verifyManagementContactCheckbox() {
      this.getcontactedbyproperty().click({force:true}); 
    }
    verifyListingPropertyCheckbox() {
      this.getlistingproperty().click({force:true}); 
    }


    signUp(username, password, isEmailAlerts, isContactedByProf, isContactedByRentedPropertyMgmntProf, isInterestedInListingAirbnb)
      {
        this.typeUserName(username);
        this.typePassword(password);

        if (!isEmailAlerts) 
        {
          this.verifyEmailAlertCheckbox();
        }
         
        if (!isContactedByProf) 
        {
          this.verifySpecialistContactCheckbox();;
        }  
        
        if (isContactedByRentedPropertyMgmntProf) 
        {
          this.verifyManagementContactCheckbox();;
        }
        
        if (isInterestedInListingAirbnb) 
        {
          this.verifyListingPropertyCheckbox();;
        }
       
        this.clickSignupButton();
      }
  
  }
  export default Signup;