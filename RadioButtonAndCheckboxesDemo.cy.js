
describe('Check UI Element' , () =>{
// it("Checking Radio Buttons", () =>{

//     //launch the webpage
//     cy.visit("https://practice.expandtesting.com/radio-buttons")

//     //check the visibility of the radio buttons
//     cy.get("input#blue").should('be.visible')
//     cy.get("input#red").should('be.visible')
//     cy.get("input#green").should('be.visible')

//     //selecting the radio buttons
//     cy.get("input#red").check().should('be.checked')
//     cy.get("input#blue").check().should('not.be.checked')
//     cy.get("input#green").check().should('not.be.checked')

// })

it("Checking Checkboxes", () =>{

    //launch the webpage
    cy.visit("https://practice.expandtesting.com/checkboxes")

    // //check the visibility of the cehckboxes
    // cy.get("input#checkbox1").should('be.visible')
    
    // //selecting single checkbox
    // cy.get("input#checkbox1").check().should('be.checked')
   
    // //unselecting the checkbox
    // cy.get("input#checkbox1").uncheck().should('not.be.checked')

    //selecting all the checkboxes
    // cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    // cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    //select first check box
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')



})

})
