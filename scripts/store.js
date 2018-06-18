'use strict';

/* global Item */

const store = (function() {
  
  let hideCheckedItems = false;
  let searchTerm = '';

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  
  const getIdFromElement = function(element) {
    const itemId = $(element).closest('.js-item-element').attr('data-item-id');
    return itemId;
};

  const findById = function (id) {
    console.log(`Find by ${id}.`);
    let foundItem = this.items.find(item => item.id === id);
    return foundItem;
  };

  const addItem = function(itemName){
    try{
      Item.validateName(itemName);
      let item = Item.create(itemName);
      this.items.push({ id: cuid(), name: itemName, checked: false });
    }
    catch(err){
      console.log(`Cannot add ${err.message}`);
    }
  };

  const findAndToggleChecked = function(id) {
    // find the item's id
    const foundItem = this.findById(id);
    console.log(foundItem);
    console.log(id);
    foundItem.checked = !foundItem.checked;
  };

  const findAndUpdateName =  function(id, newName) {
    try {
      Item.validateName(newName);
      const item = Item.findById(id);
      item.name = newName;
    } catch(err) {
      console.log(`Cannot add ${err.message}`);
    }
  };

  const findAndDelete = function(id) {
    const result = store.items.filter(item => item.id !== id);
    // update store.items
    store.items = result;
    console.log(store.items);

  };

  return {
    items, getIdFromElement, hideCheckedItems, searchTerm, addItem, findById, findAndToggleChecked, findAndUpdateName, findAndDelete
  };
  
}());