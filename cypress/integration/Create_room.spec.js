///<reference types = "cypress"/>

import { createfunction } from "./Page_objects.spec"
import { loginfunction } from "./Page_objects.spec"
import { logoutfunction } from "./Page_objects.spec"

it ("Create",function(){
    loginfunction(cy)
    const room_button =":nth-child(1)>.btn"
    cy.get(room_button).click()
    const create_room_button = "h2>.btn" 
    cy.get(create_room_button).click()
    const category_selector =":nth-child(1)> select"
      const category_type = "twin"  
      cy.get(category_selector).select(category_type)
      const number_selector = ":nth-child(2)> input"
      const room_number = "2"
      cy.get(number_selector).type(room_number)
      const floor_selector = ":nth-child(3)>input"
      const floor_number = "3"
      cy.get(floor_selector).type(floor_number)
      const available_checkbox = ".checkbox"
      cy.get(available_checkbox).click()
      const price_field = ":nth-child(5)>input"
      const price = "300"
      cy.get(price_field).type(price)
      const room_type_selector = ":nth-child(6)>select"
      const room_type = "penthouse"
      cy.get(room_type_selector).select(room_type)
    createfunction(cy)
    logoutfunction(cy)
})

