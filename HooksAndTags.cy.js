//before
//after
//beforeEach
//afterEach


describe('My Test Suite', ()=>{

    before(()=>{

        cy.log("*********** launch app ***********")

    })

    after(()=>{

        cy.log("*********** close app ***********")

    })

    beforeEach(()=>{

        cy.log("*********** login ***********")

    })

    afterEach(()=>{

        cy.log("*********** logout ***********")

    })



    it.skip('search',()=>{

        cy.log("*********** searching ***********")


    })


    it.only('advanced search',()=>{

        cy.log("*********** advanced searching ***********")


    })


    it('listing Products',()=>{

        cy.log("*********** product listing ***********")



    })


   


})