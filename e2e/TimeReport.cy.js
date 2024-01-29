describe('TestSuite', () =>{
    
    it('Time Report Query', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")     
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        cy.get("button[type='submit']").click();
        cy.get(':nth-child(4) > .oxd-main-menu-item').click();
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();

        cy.fixture("time.json").then((data)=>{
        data.forEach((userdata)=>{

        cy.get('.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active').type(userdata.projectname);
        cy.wait(2000);
        cy.get('.oxd-autocomplete-option > span').click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(userdata.datefrom);
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(userdata.dateto);
        cy.get('.oxd-button').click();
        cy.get('[style="height: 32px; transform: translateY(0px);"] > .cell-action').should('have.text',userdata.act1);
        cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(1) > div.col-alt.rgCell').should('have.text',userdata.t1);
        cy.get('[style="height: 32px; transform: translateY(32px);"] > .cell-action').should('have.text',userdata.act2);
        cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(2) > div.col-alt.rgCell').should('have.text',userdata.t2);
        cy.get('[style="height: 32px; transform: translateY(64px);"] > .cell-action').should('have.text',userdata.act3);
        cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(3) > div.col-alt.rgCell').should('have.text',userdata.t3);
        cy.get('[style="height: 32px; transform: translateY(96px);"] > .cell-action').should('have.text',userdata.act4);
        cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(4) > div.col-alt.rgCell').should('have.text',userdata.t4);
        cy.get('[style="height: 32px; transform: translateY(128px);"] > .cell-action').should('have.text',userdata.act5);
        cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(5) > div.col-alt.rgCell').should('have.text',userdata.t5);
        cy.get('[style="height: 32px; transform: translateY(160px);"] > .cell-action').should('have.text',userdata.act6);
        cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(6) > div.col-alt.rgCell').should('have.text',userdata.t6);
     
            })
        })

        cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); //logout   
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    })


})