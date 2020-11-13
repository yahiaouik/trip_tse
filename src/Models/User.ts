export default class User {
    user_id: Number;
    firstname : String;
    lastname : String;
    promo : String;
    email : String;
    password : String;
    
    constructor(user_id : Number,firstname :String ,lastname :String,promo:String,email:String,password:String) {
      this.user_id = user_id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.promo = promo;
      this.email = email;
      this.password = password;
    }

    getUserId(){
        return this.user_id;
    }

    setUserId(user_id)
    {
        this.user_id = user_id;
    }

    getFirstname(){
        return this.firstname;
    }

    setFirstname(firstname){
        this.firstname = firstname;
    }

    getLastname(){
        return this.lastname;
    }

    setLastname(lastname){
        this.lastname = lastname;
    }

    getPromo(){
        return this.promo;
    }

    setPromo(promo){
        this.promo = promo;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password){
        this.password = password;
    }

  }

