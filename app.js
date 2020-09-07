 
// Budget controller
var budgetController = (function() {

})();



// UI controller
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();



// Global app controller
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventisteners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };


  var ctrlAddItem = function() {

    // 1. Get the filed input data

    var input = UICtrl.getInput();

    // 2. Add the item to te budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
  };

  return {
    init: function() {
      console.log('App started');
      setupEventisteners();
    }
  };

})(budgetController, UIController);

controller.init();