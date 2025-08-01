
describe('MyTestSuite', ()=> {

    it('DataDrivenTest', ()=> {

        cy.fixture("practicetestautomation2").then((data)=>{

            cy.visit("https://practicetestautomation.com/practice-test-login/");


            data.forEach((userdata)=>{

                 cy.get("#username").type(userdata.username);
                 cy.get("#password").type(userdata.password);
                 cy.get("#submit").click();
                 

                if(userdata.username=='student' && userdata.password=='Password123')
                {
                    cy.get(".post-title").should('have.text', userdata.expected); 
                    cy.get('.wp-block-button__link');
                }

                //below code needs work
                // else(userdata.username=='incorrectUser' && userdata.password=='Password123')
                // {
                //     cy.get("#error").should('have.text', userdata.expected);
                // }
                // //  else(userdata.username=='student' && userdata.password=='PaincorrectPassword')
                // // {
                // //     cy.get("#error").should('have.text',userdata.expected); 
                // // }
             
             
            })

        })

    })


})