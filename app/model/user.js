// Shared User Constructor
bestCoinApp.factory("User", function(){
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.role = plainObject.role;
        this.dataURL = plainObject.dataURL;
    };

    return User;
});