import Login from "../support/Pages/LoginTestPage.js";
import Recruitment from "../support/Pages/RecruitmentPage.js";
import TimeReport from "../support/Pages/TimeReportPage.js";

describe('TestSuite', () =>{
    
  before(() => {
    const lg=new Login();
    lg.GoToUrl();

  });

  after(() => {
    const lg=new Login();
    lg.clickLogout(); 
  })


  it('Time Report Query', () =>{
    
      const lg=new Recruitment();
      lg.UserLogin();
        
        cy.fixture("time.json").then((data)=>{
          data.forEach((userdata)=>{

         const lg = new TimeReport;
         lg.getProjectName(userdata.projectname);
         lg.getDateFrom(userdata.datefrom);
         lg.getDateTo(userdata.dateto);
         lg.Verifyact1(userdata.act1);  
         lg.Verifyt1(userdata.t1)
         lg.Verifyact2(userdata.act2);  
         lg.Verifyt2(userdata.t2)
         lg.Verifyact3(userdata.act3);  
         lg.Verifyt3(userdata.t3)
         lg.Verifyact4(userdata.act4);  
         lg.Verifyt4(userdata.t4)
         lg.Verifyact5(userdata.act5);  
         lg.Verifyt5(userdata.t5)
         lg.Verifyact6(userdata.act6);  
         lg.Verifyt6(userdata.t6)

          })
        })
    })
})