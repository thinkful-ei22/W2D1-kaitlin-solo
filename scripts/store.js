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
  
  const findById = function (id) {
    let foundItem = store.items.find(item => {
      item.id === id;
    });
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
    let checkItem = this.findById(id);
    checkItem.checked = !checkItem.checked;
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
    // find item at this index
    // const currIndex = store.items.findIndex(currId => {
    //   currId === id;
    // });
    // this.items.splice(currIndex, 1);

    const result = store.items.filter(item => item.id !== id);
    // update store.items
    store.items = result;
    console.log(store.items);

  };

  return {
    items, hideCheckedItems, searchTerm, addItem, findById, findAndToggleChecked, findAndUpdateName, findAndDelete
  };
  
}());