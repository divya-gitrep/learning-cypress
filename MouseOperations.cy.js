
require('@4tw/cypress-drag-drop')
describe('Mouse Operations', () => {


    it('MouseHover', () => {

        //launch the website
        cy.visit("https://vinothqaacademy.com/mouse-event/");

        //Assertion to check that menu option is not visible
        cy.get("div[class='collapse navbar-collapse pull-right'] li[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-8464'] a")
          .should('not.be.visible');

        //Mouse Hover
        cy.get('.header_main_menu_wrapper > .collapse > .header-menu > .menu-item-8461 > :nth-child(1)').trigger('mouseover').click();

        cy.wait(3000);
         
        //Assertion to check that menu option is visible
        cy.get("div[class='collapse navbar-collapse pull-right'] li[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-8464'] a")
        .should('be.visible');


    });


    it('Right Click', () => {

        //launch the website
        cy.visit("https://vinothqaacademy.com/mouse-event/");

        // //Approach 1
        // cy.get("#rightclick").trigger('contextmenu');
        // cy.get("body div[id='wrapper'] center center:nth-child(1) a:nth-child(1)").should('be.visible');

        //Approach 2
        cy.get("#rightclick").rightclick();
        cy.get("body div[id='wrapper'] center center:nth-child(1) a:nth-child(1)").should('be.visible');

 
    });


    it('Double Click', () => {

        //launch the website
        cy.visit("https://vinothqaacademy.com/mouse-event/");

        // //Approach 1
        // cy.get("#dblclick").trigger('dblclick');
        // c

        //Approach2
        cy.get("#dblclick").dblclick();
        cy.get("#dblclick")

    });

    it('Drag and Drop Using Plugin', () => {

         //launch the website
        cy.visit("https://vinothqaacademy.com/mouse-event/");
        cy.get('#draggableElement').drag('#droppableElement');
        

    });

     it.only('Scrolling Page', () => {

        cy.visit("https://vinothqaacademy.com/mouse-event/");
        cy.get('#footer_copyright').scrollIntoView();
        cy.get('#footer_copyright').should('be.visible');

        cy.get('.logo-unit > a').scrollIntoView();
        cy.get('.logo-unit > a').should('be.visible');

        cy.get('#footer').scrollIntoView();
        

    });

})