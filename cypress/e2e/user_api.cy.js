/// <reference types="cypress" />

describe('Testing Users', () => {
  it('Create a new user', () => {

    cy.request({
      method: 'POST',
      url: '/user',
        body: {
          id: '333',
          username: 'berta test',
          firstName: 'lucas',
          lastName: 'tester',
          email: 'lucas_tester@tester.com',
          password: 'tester123',
          phone: '4444-4444',
          userStatus: 22
        }
    })
  })
  
  it('Create a array of users', () =>{
    cy.request({
      method: 'POST',
      url: '/user/createWithList',
      body: [
        {
          "id": 445,
          "username": "lucas array1",
          "firstName": "lucas",
          "lastName": "array1",
          "email": "lucas_array1@email.com",
          "password": "array",
          "phone": "44666654453",
          "userStatus": 50673335
        },
        {
          "id": -222,
          "username": "lucas array 2",
          "firstName": "lucas",
          "lastName": "2",
          "email": "lucas_array2@email.com",
          "password": "array",
          "phone": "77554564577",
          "userStatus": -1933333
        }
      ]
    
    })
  
  })



})