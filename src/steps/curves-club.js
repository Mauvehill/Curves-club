import { Given, When, Then } from "cucumber";

Given("I visit the Curves club lingerie website", function() {
    browser.url("https://www.curvesclublingerie.com/");
});

When("I click {string} tab - {int}", function(string, int) {
    console.log("what is the name of string?: ", string);
    console.log("what is the number?: ", int);
    const link = browser.$(`#et-navigation li:nth-child(${int}) a`);
    link.waitForDisplayed();
    link.click();
});

Then("the {string} for the corresponding tab {int} should be displayed", function(headerTitle, tabNumber) {
    // Notes: Debugging
    // console.log('what type is tabNumber: ', typeof tabNumber);
    // console.log('header index is: ', headerIndex);

    const header = browser.$$("h2")[tabNumber];
    const headerText = header.getText();

    header.waitForDisplayed();

    expect(headerText).to.include(headerTitle);
});

Then("I should see 5 links", function() {
    const links = browser.$$("#et-menu li a");
    expect(links).to.have.lengthOf(5);
    console.log("check type of links", typeof links.length);
});

Then("the header title is displayed", function() {
    const whoWeServeHeader = browser.$$("h2")[2];
});

When("I click Book your bra fitting today", function() {
    browser.$('#About a[class*="button"]').click();
});

When("the contact submission form is displayed", function() {
    const form = browser.$("#et_pb_contact_form_0");
    form.waitForDisplayed();
    expect(form.isDisplayed()).to.be.true;
    expect(form.isDisplayed()).to.eql(true);
});

When("I fill in the contact form", function() {
    browser.$("#et_pb_contact_name_1").addValue("Adetomi");
    browser.$('[name="et_pb_contact_email_1"]').addValue("adetomi@hotmail.com");
    browser.$('[data-original_id="preffered_date"]').addValue("28/10/2019");
    browser.$('[data-original_id="phone_number"]').addValue("07947832579");
    browser.$$(".et_pb_contact_field_checkbox label")[1].click();

    browser.$("#et_pb_contact_message_1").addValue("I need a re-fit");
    browser.$('[type="submit"]').click();
});

Then("I should see submission confirmation message", function() {
    const confirmationMessage = browser.$(".et-pb-contact-message");
    confirmationMessage.waitForDisplayed();
    const confirmationMessageText = confirmationMessage.getText();

    expect(confirmationMessage.isDisplayed()).to.be.true;
    expect(confirmationMessageText).to.equal("Thanks for contacting us");
    expect(confirmationMessageText).to.include("contacting us");
    console.log("I am looking for this: ", confirmationMessage.isDisplayed());
});
