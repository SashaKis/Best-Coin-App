bestCoinApp.factory("children", function(Child) {
    var childArr = [];

    function getAll() {
       return childArr;
   }

    var loadAll = function(allDataObjectArr) {
        for (var i = 0; i < allDataObjectArr.length; i++) {
            childArr.push(new Child(allDataObjectArr[i]))
            console.log(childArr);
        }
    }


  var removeAll = function() {
   childArr = [];
    }

    return {
//         add: add,
//         update: update,
//         remove: remove,
       loadAll: loadAll,
       getAll: getAll,
//         get: get,
       removeAll: removeAll
   }
})