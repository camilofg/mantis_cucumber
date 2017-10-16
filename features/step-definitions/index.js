var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

var currentProjects = 0;

defineSupportCode(({Given, When, Then}) => {
  Given('I go to Mantis home screen', () => {
    browser.url('/mantis/');
    });

  When(/^I fill with (.*)$/ , (username) => {
    browser.pause(5000);
    var mailInput = browser.element('input[name="username"]');
    console.log(mailInput);
    mailInput.click();
    mailInput.setValue(username);
  });

  When('I continue to login', () => {
    var cajaLogIn = browser.element('.width-40.pull-right.btn.btn-success.btn-inverse.bigger-110');
    cajaLogIn.click();
  });

  When(/^I fill Password field with (.*)$/, (password) => {
      browser.pause(5000);
      var passInput = browser.element('input[name="password"]');
      console.log(passInput);
      passInput.click();
      passInput.setValue(password);
  });

  When('again I continue to login', () => {
    var cajaLogIn = browser.element('.width-40.pull-right.btn.btn-success.btn-inverse.bigger-110');
    cajaLogIn.click();
  });

  Then('I expect to get {string}', error => {
    browser.pause(5000);
    var errorMessage = browser.element('.alert.alert-danger').$('p').getText();
    expect(errorMessage).to.equal(error);
  });
  
  Then('I expect to go to {string}', newUrl => {
    browser.pause(5000);
    console.log(browser.getUrl());
    expect(browser.getUrl()).to.equal(newUrl);
  });

});

defineSupportCode(({Given, When, Then}) => {
  Given('I am logged into Mantis', () => {
      browser.url('/mantis/');
      browser.waitForVisible('input[name="username"]', 5000);
      browser.element('input[name="username"]').click();
      browser.element('input[name="username"]').setValue('rcforero');
      
      browser.waitForVisible('input[value="Login"]', 5000);
      browser.element('input[value="Login"]').click();
      
      browser.waitForVisible('input[name="password"]', 5000);
      browser.element('input[name="password"]').click();
      browser.element('input[name="password"]').setValue('Qwerty123');
      
      browser.waitForVisible('input[value="Login"]', 1000);
      browser.element('input[value="Login"]').click();
    });

  When('I go to Manage menu', () => {
    browser.pause(2000);
    browser.element(".sidebar.sidebar-fixed.responsive.compact").$$('li')[6].$('a').click();
    browser.pause(4000);
    browser.element(".nav.nav-tabs.padding-18").$$('li')[2].$('a').click();
  });

  When('I click in Create New Project', () => { 
    browser.pause(5000);
    currentProjects = $$('table.table-striped.table-bordered.table-condensed.table-hover')[0].$('tbody').$$('a').length;
    currentProjects++;
    browser.waitForVisible('input[value="Create New Project"]', 4000);
    $('input[value="Create New Project"]').click();
    console.log('proyectos: '+ currentProjects);
  });

  When(/^I fill with (.*) and (.*)$/, (projectName, description) => {
    browser.pause(5000);
    var tabFillData = browser.element('.table.table-bordered.table-condensed.table-striped').$('tbody');
    console.log(tabFillData.$$('tr')[0].$$('td')[1].$('input').innerHTML);
    tabFillData.element('input[name="name"]').click();
    tabFillData.element('input[name="name"]').setValue('Nuevo proyecto');
    tabFillData.element('textarea[name="description"]').click();
    tabFillData.element('textarea[name="description"]').setValue('');
  });

  When('I Add Project', () => {
    browser.element('input[value="Add Project"]').click();
    browser.pause('4000');
  });

  Then('I expect to see {string}', (error) => {
    browser.pause(5000);
    var newProjectName = browser.element('.alert.alert-danger').$('.bold').getText();
    expect(error).to.equal(newProjectName);
  });
  
  Then('I expect to go to the number of project be plus 1', () => {
    browser.pause(5000);
    var projecsNumber = $$('table.table-striped.table-bordered.table-condensed.table-hover')[0].$('tbody').$$('a').length;
    expect(projecsNumber).to.equal(currentProjects);
  });

});

defineSupportCode(({Given, When, Then}) => {
  Given('I am again logged into Mantis', () => {
      browser.url('/mantis/');
      browser.waitForVisible('input[name="username"]', 5000);
      browser.element('input[name="username"]').click();
      browser.element('input[name="username"]').setValue('rcforero');
      
      browser.waitForVisible('input[value="Login"]', 5000);
      browser.element('input[value="Login"]').click();
      
      browser.waitForVisible('input[name="password"]', 5000);
      browser.element('input[name="password"]').click();
      browser.element('input[name="password"]').setValue('Qwerty123');
      
      browser.waitForVisible('input[value="Login"]', 1000);
      browser.element('input[value="Login"]').click();
  });

  When('I go to Report Issues menu', () => {
    browser.pause(2000);
    browser.element(".sidebar.sidebar-fixed.responsive.compact").$$('li')[2].$('a').click();
  });

  When(/^I fill with (.*) and (.*) and (.*)$/, (assignedTo, summary, description) => {
    browser.pause(5000);
    var selectHandler = browser.element('select[name="handler_id"]');
    selectHandler.selectByValue(assignedTo);

    browser.element('input[name="summary"]').setValue(summary);
    browser.element('textarea[name="description"]').setValue(description);
    browser.element('textarea[name="additional_info"]').setValue('Info');
  });

  When('I Submit Issue', () => {
    browser.element('input[value="Submit Issue"]').click();
  });

  Then('Then I expect to see {string}', (description) =>{
    browser.waitForVisible('table[id="buglist"]', 4000);
    var issuesTab = $("#buglist");
    
    console.log(issuesTab.$('tbody').$$('tr')[0].$$('td')[10].getText());
    expect(issuesTab.$('tbody').$$('tr')[0].$$('td')[10].getText()).toBe(description);
  });
});
