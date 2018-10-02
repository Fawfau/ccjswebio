/// <reference path="./steps.d.ts" />

Feature('Home');

Scenario('Login @ini', async (I,loginPage) => {
    I.say('Saya Menuju ke web https://katalon-demo-cura.herokuapp.com')
    I.amOnPage('/');
    I.see('CURA Healthcare Service')
    I.click('#btn-make-appointment')
    I.see('Login')
    I.seeCurrentUrlEquals('/profile.php#login')
    loginPage.loginUser('John Doe','ThisIsNotAPassword')
    I.click(loginPage.tombolSubmit)
    I.wait(1)
    I.dontSee('Login failed! Please ensure the username and password are valid.')
    I.see('Make Appointment');
});

Scenario('Buat Janji', async (I) => {
    I.amOnPage('/');
    I.see('Make Appointment');
    I.selectOption('#combo_facility', 'Hongkong CURA Healthcare Center')
    I.checkOption('#chk_hospotal_readmission')
    I.click('#radio_program_none')
    I.click('#txt_visit_date')
    I.click('.datepicker-switch')
    I.click(locate('.datepicker-months').find('td .month').withText('Nov'));
    I.wait(1)
    I.click(locate('.datepicker-days').find('td').withChild('.day').withText('20'));
    I.click('#txt_comment')
    I.fillField('#txt_comment', 'blablabla')
    I.click('#btn-book-appointment')
    I.see('Appointment Confirmation')
    I.click('.btn.btn-default')
    I.see('Make Appointment')
})

Scenario('Masuk ke History, Profil kemudian Logout @ini', async (I) => {
    I.amOnPage('/');
    I.see('Make Appointment')
    I.click('#menu-toggle')
    I.click(locate('.sidebar-nav').find('a').withText('History'))
    I.see('History')
    I.click('#menu-toggle')
    I.click(locate('.sidebar-nav').find('a').withText('Profil'))
    I.see('Profil')
    I.click('.btn.btn-default')
    I.see('CURA Healthcare Service')
})