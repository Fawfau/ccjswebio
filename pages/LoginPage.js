
const I = actor();

module.exports = {
fields:{
    email : '#txt-username',
    password : '#txt-password'
  },

  tombolSubmit:{
    btnLogin :'.btn.btn-default'
  },
  // insert your locators and methods here

  loginUser(email, password){
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.wait(1);
  }
  // insert your locators and methods here
}
