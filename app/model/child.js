// Shared Child Constructor
bestCoinApp.factory("Child", function(){
    function Child(plainObject) {
        this.mood = plainObject.mood;
        this.health = plainObject.health;
        this.achievements = plainObject.achievements;
        this.goodDeeds = plainObject.goodDeeds;
        this.helpFamely = plainObject.helpFamely;
        this.tellSome = plainObject.tellSome;
    };
    return Child;
});

// bestCoinApp.factory("children", function(Child) {
//     var childArr = [];

//     var load = function(allDataObjectArr) {
//         for (var i = 0; i < allDataObjectArr.length; i++) {
//             childArr.push(new Recipe(allDataObjectArr[i]))
//         }
//     }



//     var add = function(recipe) {
//         recipeArr.push(recipe);
//     }

//     var update = function(index, recipe) {
//         recipeArr[index] = recipe;
//     }

//     var remove = function(index) {
//         recipeArr.splice(index, 1);
//     }

    

//     var getAll = function() {
//         return recipeArr;
//     }

//     var get = function(index) {
//         return recipeArr[index];
//     }

//     var removeAll = function() {
//         recipeArr = [];
//     }

//     return {
//         add: add,
//         update: update,
//         remove: remove,
//         load: load,
//         getAll: getAll,
//         get: get,
//         removeAll: removeAll
//     }
// })