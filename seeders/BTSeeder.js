'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers', [{
      burger_name: 'Gourdon-Hamsey Burger',
      devoured: true
    }, {
      burger_name: 'Cheeses Is Born Burger',
      devoured: false
    }, {
      burger_name: 'Poutine on the Ritz Burger',
      devoured: true
    }, {
      burger_name: 'Poblano Picasso Burger',
      devoured: false
    }, {
      burger_name: 'Summer Thyme Burger',
      devoured: false
    }], {});
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('burgers', null, {truncate:true});
  }
};