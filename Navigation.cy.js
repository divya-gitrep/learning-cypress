 
 //go() 

 describe('mysuite' , ()=> 
    
{
    it ('NavigationTest', ()=>{

        cy.visit("https://demo.opencart.com/",{failOnStatusCode: false });
        cy.title().should('eq',"Your Store");  //Home Page

        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click();

        
        cy.get("div[id='content'] h2").should('have.text',"Cameras"); //Cameras page

        cy.go('back'); //go back to home
        cy.title().should('eq', "Your Store");

        cy.go('forward'); //cameras page
        cy.get("div[id='content'] h2").should('have.text',"Cameras"); 

        cy.go(-1); //home
        cy.title().should('eq',"Your Store");  //Home Page

        cy.go(1); //cameras 
        cy.get("div[id='content'] h2").should('have.text',"Cameras"); 

        cy.reload();

    })

})