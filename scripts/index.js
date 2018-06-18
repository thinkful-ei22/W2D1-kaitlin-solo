/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

const store = (function() {
  
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  return {
    items, hideCheckedItems, searchTerm
  };

}());

// const store = {
//   items: [
//     { id: cuid(), name: 'apples', checked: false },
//     { id: cuid(), name: 'oranges', checked: false },
//     { id: cuid(), name: 'milk', checked: true },
//     { id: cuid(), name: 'bread', checked: false }
//   ],
//   hideCheckedItems: false,
//   searchTerm: ''
// };

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});
