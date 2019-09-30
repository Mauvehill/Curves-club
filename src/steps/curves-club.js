import { Given, When, Then } from 'cucumber';

Given('I visit the Curves club lingerie website', function() { 
    browser.url('https://www.curvesclublingerie.com/');
})

When('I click Styles Solutions tab', function() {
    console.log('click step');
    const styleSolutions = browser.$('#et-navigation li:nth-child(3) a');
    styleSolutions.waitForDisplayed();
    styleSolutions.click();
})

Then('the header title should be displayed', function() {
    const header = browser.$$('h2')[3];
    expect(header.getText()).to.equal('OUR STYLE SOLUTIONS FOR THE CURVY WOMAN');
    expect(header.getText()).to.include('OUR STYLE SOLUTIONS');
})

Then('I should see 5 links', function() {
    const links = browser.$$('#et-menu li a');
    expect(links).to.have.lengthOf(5);
    console.log('check type of links', typeof(links.length));
})

When('I click Book your bra fitting today', function() {
    browser.$('#About a[class*="button"]').click();

}) 

When('the contact submission form is displayed', function() {
    const form = browser.$('#et_pb_contact_form_0');
    form.waitForDisplayed();
    expect(form.isDisplayed()).to.be.true
    expect(form.isDisplayed()).to.eql(true)
})

When('I fill in the contact form', function() {
    browser.$('#et_pb_contact_name_1').addValue('Adetomi');
    browser.$('[name="et_pb_contact_email_1"]').addValue('adetomi@hotmail.com');
    browser.$('[data-original_id="preffered_date"]').addValue('28/10/2019');
    browser.$('[data-original_id="phone_number"]').addValue('07947832579');
    browser.$$('.et_pb_contact_field_checkbox label')[1].click();
     
    browser.$('#et_pb_contact_message_1').addValue('I need a re-fit');
    browser.$('[type="submit"]').click();
})

Then('I should see submission confirmation message', function() {
    const confirmationMessage = browser.$('.et-pb-contact-message');
    confirmationMessage.waitForDisplayed();

    expect(confirmationMessage.isDisplayed()).to.be.true
    expect(confirmationMessage.getText()).to.equal('Thanks for contacting us');
    // console.log('I am looking for this: ', confirmationMessage.isDisplayed());
})