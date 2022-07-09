import {Pickers} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on the landing Page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("input Forms - I Should be able to click date Pickers", function () {
        cy.get(Pickers.popupAds).click()
        cy.get(Pickers.datePickers).click()
        cy.get(Pickers.bootstrapdatePicker).click()
        cy.get(Pickers.selectdate).click()
        cy.get(Pickers.selectdateToday).click()
        cy.get(Pickers.selectdate).click()
        cy.get(Pickers.selectdateClear).click()
        cy.get(Pickers.dateRange).click()
        cy.get(Pickers.date).click()
        cy.get(Pickers.dateRange2).click()
        cy.get(Pickers.date2).click()
    })
    it("input Forms - I Should be able to click jquerydatepicker)", function () {
        cy.get(Pickers.popupAds).click()
        cy.get(Pickers.datePickers).click()
        cy.get(Pickers.jqueryDate).click()
        cy.get(Pickers.daterangerPicker).click()
        cy.get(Pickers.daterangerPicker1).click()
        cy.get(Pickers.daterangerPickerTo).click()
        cy.get(Pickers.daterangerPickerTo2).click()

    })

})