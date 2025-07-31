

describe('My Test Suite', ()=>{

    let userdata;
        before( ()=>{
            cy.fixture("practicetestautomation").then((data)=>{
               userdata=data;
             })
        })



    //Direct Access
    it('FixturesDemoTest',  ()=> {

        
        // cy.visit("https://practicetestautomation.com/practice-test-login/");
        // cy.get("#username").type("student");
        // cy.get("#password").type("Password123");
        // cy.get("#submit").click();
        // cy.get(".post-title").should('have.text','Logged In Successfully');

        // cy.visit("https://practicetestautomation.com/practice-test-login/");

        // cy.fixture('practicetestautomation').then((data)=>{

        // cy.get("#username").type(data.username);
        // cy.get("#password").type(data.password);
        // cy.get("#submit").click();
        // cy.get(".post-title").should('have.text', data.expected); 
             
        // })
        
    })

    //Access through Hook - for multiple it blocks
    it.only('FixturesDemoTest',  ()=> {

        cy.visit("https://practicetestautomation.com/practice-test-login/");


        cy.get("#username").type(userdata.username);
        cy.get("#password").type(userdata.password);
        cy.get("#submit").click();
        cy.get(".post-title").should('have.text', userdata.expected); 
             
        
         
    })


})