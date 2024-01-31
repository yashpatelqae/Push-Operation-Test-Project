class Login
{

   GoToUrl()
   {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   }

   getUserName(username)
   {
    cy.get("input[placeholder='Username']").type(username);
   }
   
   getPassword(password)
   {
    cy.get("input[placeholder='Password']").type(password);
   }

   clickSubmit()
   {
    cy.get("button[type='submit']").click();
   }
  
   VerifyLogin()
   {
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
    .should('have.text','Dashboard'); 
   }

   VerifyAlert()
   {
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
    .should('have.text','Invalid credentials'); 
   }
  
   clickLogout()
   {
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();   
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); 
   }
   
}

export default Login;