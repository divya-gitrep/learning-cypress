  
  
describe("Assertion Demo",() => {

    it("Implicit assertion", () =>{

        cy.visit("https://www.orangehrm.com/")

        //Practicing using following implicit assertions  : should and
        
        //capture the current URL of the webpage and validate the url by providing positive assertions
        // cy.url().should('include','orangehrm.com')
        // cy.url().should('eq','https://www.orangehrm.com/')
        // cy.url().should('contain','orangehrm')


        //alternative way
        // cy.url().should('include','orangehrm.com')
        // .should('eq','https://www.orangehrm.com/')
        // .should('contain','orangehrm')

        //alterative way
        // cy.url().should('include','orangehrm.com')
        // .and('eq','https://www.orangehrm.com/')
        // .and('contain','orangehrm')

        //capture the current URL of the webpage and validate the url by providing negative assertions
        // cy.url().should('not.include','orang123ehrm.com')
        // .and('not.eq','https://www.oranahahgehrm.com/')
        // .and('not.contain','Google')

        //capture the title of the webpage and validate the url by providing positive assertions
        cy.title().should('include','Orange')
        //.and('eq','OrangeHRM')
        //.and('contain','HRM')

        //validae the webpage logo
        cy.get('.navbar-brand > img').should('be.visible')
        .and('exist')
       
 


    })



})