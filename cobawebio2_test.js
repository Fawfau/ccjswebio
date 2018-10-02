
Feature('toolsqa');

Scenario('test something', (I) => {
    I.amOnPage('http://toolsqa.com/automation-practice-form/')
    I.fillField('firstname','Fawaz')
    I.fillField('lastname','Fauzan')
});
