import React from 'react';

export function findArrayElementByTitle(array, id) {
    return array.find((element) => {
      return element.id === id;
    })
  }