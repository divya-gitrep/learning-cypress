//click on link using label
//over writing existing contains() command
//re-usable custom command


describe('Custom commands', () =>{


    it("handling links", () => {


    cy.visit("https://demo.nopcommerce.com/");


    //direct approach-without using custom command
    //cy.get("img[title='Show details for Apple MacBook Pro']").click();

    //with custom command
    cy.clickLink("Apple MacBook Pro");

    cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro');


    })


})