

describe('handling frames',() => {
    
    it ('approach1',()=>{

        cy.visit('https://demo.automationtesting.in/Frames.html');

        const iframe = cy.get('singleframe')
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap);

          iframe.clear().type("Welcome");


    })
 
})

