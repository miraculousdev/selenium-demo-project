import {inputForms} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on the inputForms", function () {
    beforeEach(function () {
        cy.visit('/')

    });
     it("input inputForms - I Should be able to click input inputForms", function () {
    cy.get(inputForms.popupAds).click()
         cy.get(inputForms.inputformsBtn).click()
         cy.get(inputForms.checkboxDemo).click()
         cy.get(inputForms.singlecheckboxDemo).click()
         cy.get(inputForms.multipleoptionOption1).click()
         cy.get(inputForms.multipleoptionOption2).click()
         cy.get(inputForms.multipleoptionOption3).click()
         cy.get(inputForms.multipleoptionOption4).click()
         cy.get(inputForms.multipleoptionCheckall).click()
         cy.get(inputForms.multipleoptionUncheckall).click()
         cy.get(inputForms.singlecheckboxDemoUnclick).click() 


      
    
    })
 

it("input inputForms - I Should be able to click input inputForms(simpleFormDemo)", function () {
    cy.get(inputForms.popupAds).click()
    cy.get(inputForms.inputformsBtn).click()
    cy.get(inputForms.simpleFormDemoBtn).click()
    cy.get(inputForms.singleinputField).type(inputForms.simpleinputText)
    cy.get(inputForms.simpleinputFieldshowMessage).click()
    cy.get(inputForms.twoinputsField).type(inputForms.twoinputsFieldText)
    cy.get(inputForms.twoinputsField2).type(inputForms.twoinputsField2Text)
    cy.get(inputForms.gettotal).click()
})


})