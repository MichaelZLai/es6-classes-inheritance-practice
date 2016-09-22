class User {
  constructor(user,pass) {
    this.username = user;
    this.password = pass;
  }
  changePassword(newPass){
    this.password = newPass;
  }
}

class Admin extends User{
  constructor(user,pass,accessLevel) {
    super(user,pass);
    this.accessLevel = accessLevel;
  }
  overridePassword(user,newPassword){
    if (this.accessLevel >= 7){
      user.password = newPassword;
  }
}
}


const qtpie = new User("qtpie","america");
const uglypie = new Admin("uglypie","maine",10);
