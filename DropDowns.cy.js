describe('handle dropdowns', ()=>{

    it.skip('Drodown with select', () => {

        cy.visit("https://practice.expandtesting.com/dropdown")

        cy.get('#country')
        .select('India')
        .should('have.value','IN')

    })

    it.skip('Autosuggest Dropdown', () => {

        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput')
        .type('Delhi')
       
        cy.get('.suggestion-title').contains('Delhi University').click()

    })

     it('Dynamic Dropdown', () => {

        cy.visit("https://www.google.com/")

       
        cy.get("textarea[id='APjFqb']").type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length',13)

        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
            if($el.text()=='cypress automation tutorial')
            {
             cy.wrap($el).click()
            }

        })

        cy.get("textarea[#APjFqb]").should('have.value','cypress automation tutorial')

    })

})