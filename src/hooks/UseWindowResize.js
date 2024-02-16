/*
 * File: UseWindowResize.js
 * Author: Joseph Koh
 * Description: To handle window resize
 */

import { useEffect } from "react";

// Function to handle window resize
export const UseWindowResize = (...callbacks) => {
  useEffect(() => {
    // On component mount/update
    const handleResize = () => callbacks.forEach((callback) => callback());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Clean up function
  }, []);
};
