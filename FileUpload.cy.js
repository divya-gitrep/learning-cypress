
import 'cypress-file-upload';
describe('File Upload', (()=>{



    it('Single File Upload', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");                 //launch website
        cy.get('#file-upload').attachFile('test1.docx');                       //click file upload and select file to upload
        cy.get('#file-submit').click();                                        //click Submit
        cy.wait(5000);                                                         //wait for 5 sec
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!'); //check the confirmation message

    })

    it('File Upload - Rename', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");                                  //launch website
        cy.get('#file-upload').attachFile({filePath:'test1.docx',fileName:'myfile.docx'});      //click file upload, select file to upload and rename it
        cy.get('#file-submit').click();                                                         //click Submit
        cy.wait(5000);                                                                          //wait for 5 sec
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');                 //check the confirmation message

        

    })

    it('File Upload - Drag and Drop', ()=>{


        cy.visit("https://the-internet.herokuapp.com/upload");                                  //launch website
        cy.get("#drag-drop-upload").attachFile("test1.docx",{ subjectType:"drag-n-drop"});     //drag and drop the file
        cy.wait(5000);   
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
        .contains('test1.docx');
    
    })

    it('Multiple Files Upload', ()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");                                      //launch website
        cy.get("#filesToUpload").attachFile(["test1.docx", "test2.pdf"]);                                       //upload multiple files
        cy.wait(5000);   
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');

        

    })

      it.only('File Upload - Shadow Dom', ()=>{

        cy.visit("https://practice.expandtesting.com/shadowdom");   //launch the website
        cy.get(".1",{includeShadowDom:true}).click();



        

    })

}))