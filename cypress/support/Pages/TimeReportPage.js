class TimeReport
{

   getProjectName(projectname)
   {
      cy.get(':nth-child(4) > .oxd-main-menu-item').click();
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
      cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
      cy.get('.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active').type(projectname);
        cy.wait(2000);
   }
   
   getDateFrom(datefrom)
   {
      cy.get('.oxd-autocomplete-option > span').click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(datefrom);
   }

   getDateTo(dateto)
   {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(dateto);
      cy.get('.oxd-button').click();
   }
  
   Verifyact1(act1)
   {
      cy.get('[style="height: 32px; transform: translateY(0px);"] > .cell-action').should('have.text',act1);
   }
   
   Verifyt1(t1)
   {
   cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(1) > div.col-alt.rgCell').should('have.text',t1);
   }

   Verifyact2(act2)
   {
      cy.get('[style="height: 32px; transform: translateY(32px);"] > .cell-action').should('have.text',act2);
   }
   
   Verifyt2(t2)
   {
   cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(2) > div.col-alt.rgCell').should('have.text',t2);
   }

   Verifyact3(act3)
   {
      cy.get('[style="height: 32px; transform: translateY(64px);"] > .cell-action').should('have.text',act3);
   }

   Verifyt3(t3)
   {
   cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(3) > div.col-alt.rgCell').should('have.text',t3);
   }

   Verifyact4(act4)
   {
      cy.get('[style="height: 32px; transform: translateY(96px);"] > .cell-action').should('have.text',act4);
   }

   Verifyt4(t4)
   {
   cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(4) > div.col-alt.rgCell').should('have.text',t4);
   }

   Verifyact5(act5)
   {
      cy.get('[style="height: 32px; transform: translateY(128px);"] > .cell-action').should('have.text',act5);
   }

   Verifyt5(t5)
   {
   cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(5) > div.col-alt.rgCell').should('have.text',t5);
   }

   Verifyact6(act6)
   {
      cy.get('[style="height: 32px; transform: translateY(160px);"] > .cell-action').should('have.text',act6);
   }

   Verifyt6(t6)
   {
   cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-paper-container:nth-child(3) div.oxd-report-table.--frame div.main-viewport div.viewports revogr-viewport-scroll.rgCol div.inner-content-table div.vertical-inner div.content-wrapper revogr-overlay-selection:nth-child(1) revogr-data:nth-child(4) div.rgRow:nth-child(6) > div.col-alt.rgCell').should('have.text',t6);
   }

}

export default TimeReport;