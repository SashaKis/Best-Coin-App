// Shared Child Constructor
bestCoinApp.factory("Child", function(){
    function hild(plainObject) {
        this.mood = plainObject.mood;
        this.health = plainObject.health;
        this.achievements = plainObject.achievements;
        this.goodDeeds = plainObject.goodDeeds;
        this.helpFamely = plainObject.helpFamely;
        this.tellSome = plainObject.tellSome;
    };
    return Child;
});