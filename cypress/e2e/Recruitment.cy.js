import Login from "../support/Pages/LoginTestPage.js";
import Recruitment from "../support/Pages/RecruitmentPage.js";


describe('TestSuite', () =>{

  before(() => {
    const lg=new Login();
    lg.GoToUrl();

  });

  after(() => {
    const lg=new Login();
    lg.clickLogout(); 

  });

    it('Add a candidate,check and delete data', () =>{
                 
       const lg=new Recruitment();
       lg.UserLogin();
                  
       cy.fixture("employee.json").then((data)=>{
       data.forEach((userdata)=>{
       const lg=new Recruitment();

       lg.AddFirstName(userdata.firstname);    
       lg.AddLastName(userdata.lastname);         
       lg.AddEmail(userdata.email);
       lg.VerifyUser(userdata.expected);
       lg.DeleteUser();
         
        })
       
       }) 
       
    })
    
})

