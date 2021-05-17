/// <reference types="cypress" />




describe("Test Contact Us form via Automation Test Store", () => {

    //test 1

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        })
        cy.get('#ContactUsFrm_first_name').type("Samuel").then(function(fname){
            cy.log("FirstName entered: " +fname.val())
        })
        cy.get('#ContactUsFrm_first_name').should( 'have.value',"Samuel")

        cy.get('#ContactUsFrm_email').type("samuel.adjin@amalitech.org").then(function(emailAddr){
            cy.log("Email entered: " +emailAddr.val());
        })
        cy.get('#ContactUsFrm_email').should('have.value',"samuel.adjin@amalitech.org" );
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        .then(function(info){
            cy.log("Enquiry entered:" +info.val());
        })
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed!");
    });


    // test 2
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        })
        
        cy.get('#ContactUsFrm_email').type("samuel.adjin@amalitech.org").then(function(emailAddr){
            cy.log("Email entered: " +emailAddr.val());
        })
        cy.get('#ContactUsFrm_email').should('have.value',"samuel.adjin@amalitech.org" );
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        .then(function(info){
            cy.log("Enquiry entered:" +info.val());
        })
        cy.get("button[title='Submit']").click()
        cy.get('.element_error').should('have.text',"First name: is required field! Name must be between 3 and 32 characters!")
        cy.log("Test has completed!");
    });


    // test 3
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        })
        cy.get('#ContactUsFrm_first_name').type("Samuel").then(function(fname){
            cy.log("FirstName entered: " +fname.val())
        })
        cy.get('#ContactUsFrm_first_name').should( 'have.value',"Samuel")

       
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        .then(function(info){
            cy.log("Enquiry entered:" +info.val());
        })
        cy.get("button[title='Submit']").click()
        cy.get('.element_error').should('have.text'," Email: is required field! E-Mail Address does not appear to be valid")
        cy.log("Test has completed!");
    });


    //test 4
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        })
        cy.get('#ContactUsFrm_first_name').type("Samuel").then(function(fname){
            cy.log("FirstName entered: " +fname.val())
        })
        cy.get('#ContactUsFrm_first_name').should( 'have.value',"Samuel")

        cy.get('#ContactUsFrm_email').type("samuel.adjin@amalitech.org").then(function(emailAddr){
            cy.log("Email entered: " +emailAddr.val());
        })
        
        cy.get("button[title='Submit']").click()
        cy.get('.element_error').should('have.text'," Enquiry: is required field! Enquiry must be between 10 and 3000 characters!")
        cy.log("Test has completed!");
    });


    //test 5
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
       
        
        cy.get("button[title='Submit']").click()
        cy.get('.element_error').should('have.text',"First name: is required field! Name must be between 3 and 32 characters!")
        cy.get('.element_error').should('have.text'," Email: is required field! E-Mail Address does not appear to be valid")
        cy.get('.element_error').should('have.text'," Enquiry: is required field! Enquiry must be between 10 and 3000 characters!")
        cy.log("Test has completed!");
    });
})   

})