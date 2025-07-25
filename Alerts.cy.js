describe('Alerts', () => {

    //1) Javascript Alert : It will have some text and an OK button

    it('Js Alert', () => {

        //launch the website
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //Locate the web element and click on it
        cy.get("button[onclick ='jsAlert()']").click()

        //Trigger an event to validate the text on alert window
        cy.on('window:alert',(t) => {
             expect(t).to.contains('I am a JS Alert')
        })

        //alert window automstically closed by cypress

        //validate the success message 
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })


    //2) Javascript Confirm Alert : t will have some text with 'OK' and 'Cancel' button


      it('Js Confirm Alert', () => {

        //launch the website
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //Locate the web element and click on it
        cy.get("button[onclick ='jsConfirm()']").click()

        //Trigger an event to validate the text on alert window
        cy.on('window:confirm',(t) => {
             expect(t).to.contains('I am a JS Confirm')
        })

        //alert window automatically closed by using OK-default button by cypress

        //validate the success message 
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('Js Confirm Alert', () => {

        //launch the website
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //Locate the web element and click on it
        cy.get("button[onclick ='jsConfirm()']").click()

        //Trigger an event to validate the text on alert window
        cy.on('window:confirm',(t) => {
             expect(t).to.contains('I am a JS Confirm')
        })

        //alert window automatically closed by using OK-default button by cypress

        cy.on('window:confirm', ()=> false) //cypress closes aler window using cancel button

        //validate the message 
        cy.get('#result').should('have.text','You clicked: Cancel')

    })


    //3) Javascript Prompt Alert : It will have some text with text box for user input along with 'OK'

    it('Js Prompt Alert', () => {

        //launch the website
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome')

        })

        //Locate the web element and click on it
        cy.get("button[onclick ='jsPrompt()']").click()

        //alert window automatically closed by using OK-default button by cypress

        //cy.on('window:prompt', ()=> false) //cypress closes aler window using cancel button 

         //validate the message 
        cy.get('#result').should('have.text','You entered: welcome')
     
    })


    //4) Authenticated Alert

    it.only('Js Authenticated Alert', () => {

        //approach 1 
        //launch the website
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth : 
        //                                                                {
        //                                                                 username:"admin",
        //                                                                 password:"admin"
        //                                                                 }
        //                                                           })

        // cy.get("div[class='example'] p").should('have.contain','Congratulations! You must have the proper credentials.')

        //approach2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain','Congratulations! You must have the proper credentials.')

        
     
    })





}) 