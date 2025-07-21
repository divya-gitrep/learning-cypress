

describe('CSSLocators' , () => {

    it("csslocators", () => {

        //launch the application
        cy.visit("https://www.amazon.in")

        //get the input element and pass the value into the element
        cy.get("#twotabsearchtextbox").type("T-shirts")    //id  tag is optional

        //get the element and perform click action
        cy.get("[value='Go']").click()

    

    })
})
