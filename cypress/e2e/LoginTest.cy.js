import Login from "../support/Pages/LoginTestPage.js";


describe('TestSuite', () =>{

   before(() => {
      const lg=new Login();
      lg.GoToUrl();
  
    });
  
    it('LoginTest', () =>{      

       cy.fixture("login.json").then((data)=>{
         data.forEach((userdata)=>{
            
         const ln =new Login();
         ln.getUserName(userdata.username);
         ln.getPassword(userdata.password);
         ln.clickSubmit();

         if(userdata.username=='Admin' && userdata.password=='admin123')
         { 
            ln.VerifyLogin();
            cy.wait(2000);
            ln.clickLogout();
         }
         
         else
         {
            ln.VerifyAlert();
         }
         
       })

      }) 
         
    })
    
})