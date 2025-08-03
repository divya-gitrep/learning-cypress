
describe ('mysuite', ()=>
{

    it('Capture screenshots & Videos' , ()=>
       {

       cy.visit("https://powertofly.com/");
       cy.screenshot("homepage"); 

       cy.wait(5000);

       cy.get('.greenctamai').screenshot("logo");



       })
      

})