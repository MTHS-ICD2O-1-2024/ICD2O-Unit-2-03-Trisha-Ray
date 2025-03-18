// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: March 2025
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)

  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("user-info").innerHTML =
    "Your adress is: " + streetNumber+ "  " +streetName + "."
}
