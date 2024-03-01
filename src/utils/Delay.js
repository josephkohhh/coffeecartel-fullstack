/*
 * File: Delay.js
 * Author: Joseph Koh
 * Description: Contains helper function for delaying process
 */

// Function to delay a process
export const Delay = (setLoading, ms) => {
  return new Promise((resolve) => {
    setLoading(true);

    setTimeout(() => {
      resolve(); // Resolve promise after setting loading state to false
    }, ms);
  });
};
