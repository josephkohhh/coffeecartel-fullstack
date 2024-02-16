/**
 * File: LocalStorage.js
 * Author: Joseph Koh
 * Description: Functions for interacting with local storage
 */

// Function to retrieve data from local storage
export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

// Function to save data to local storage
export const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

// Function to remove from local storage based on specified key
export const clearFromLocalStorage = (key) => localStorage.removeItem(key);
