describe('TestSuite', () =>{

    it('Add a candidate,check and delete data', () =>{
        
      
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
       cy.get("button[type='submit']").click();
       cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
       cy.get('.orangehrm-header-container > .oxd-button').click();
           
       cy.fixture("employee.json").then((data)=>{
       data.forEach((userdata)=>{
         cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(userdata.firstname);
         cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(userdata.lastname);
         cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.email);
         cy.get('.oxd-button--secondary').click();
         cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-text')
         .should('have.text',userdata.expected);
         cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
         cy.wait(2000);
         cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
         cy.get("button[class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']").click();
         cy.wait(2000);

         cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); //logout   
         cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
       })
       
       }) 
       
    })
    
})

