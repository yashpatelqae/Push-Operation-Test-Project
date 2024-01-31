class Recruitment
{

    UserLogin()
    {
     cy.get("input[placeholder='Username']").type("Admin");
    
     cy.get("input[placeholder='Password']").type("admin123");
   
     cy.get("button[type='submit']").click();
    }

    
    AddFirstName(firstname)
    {
     cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
     cy.get('.orangehrm-header-container > .oxd-button').click();
     cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(firstname);
    }

    AddLastName(lastname)
    {
     cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(lastname);
    }
    
    
    AddEmail(email)    
    {
     cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(email);
     cy.get('.oxd-button--secondary').click();
    }

    VerifyUser(expected)
    {cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-text')
       .should('have.text',expected);
    }


    DeleteUser()
    {cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']").click();
    cy.wait(1000)
    }
}

export default Recruitment;