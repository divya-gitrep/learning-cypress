

describe('My First Test', () => {

  it('verify title-positive', () => {

    //test steps

    //visit the website
    cy.visit("https://www.google.com/")

    //assertion to verify the title of the page
    cy.title().should('eq','Google')

  })

  it('verify title-negative', () => {

    //test steps

    //visit the website 
    cy.visit("https://www.google.com/")

    //assertion to verify the title of the page
    cy.title().should('eq','Google123')

  })
 
 



})

// describe('My First Test', function() {
//   it('Does not do much!', function() {
//     expect(true).to.equal(true)
//   })
// })