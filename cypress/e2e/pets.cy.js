/// <reference types="cypress" />

const userberta = 'berta test' 

describe('Testing Users', () => {
  it('Create a new user', () => {

    cy.request({
      method: 'POST',
      url: '/user',
        body: {
          id: 333,
          username: userberta,
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
    
    }).then((response) => {
      // Cypress._.each(response.body.id,(ids) =>{
      //   expect(ids.id).to.not.be.null
      // })
      expect(response.status).to.equal(200)
      })
  
  })

  //it('Check the array of users', () =>{})

  it('Login into the system', () => {
    cy.request({
      method: 'GET',
      url: '/user/login?username=id lucas&password=id tester'
    }).then((response) => {
    expect(response.status).to.equal(200);
    //TODO//expect(response.body.username).to.equal('lucas') ***must be checked by the message field***

      })
    })

  it('Logout into the system', () => {
    cy.request({
      method: 'GET',
      url: '/user/logout'
    }).then((response) => {
    expect(response.status).to.equal(200);
    })
  })
  
  it('Search user by username', () => {
    cy.request({
      method: 'GET',
      url: '/user/berta test'
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body.id).to.equal(333)
  

})
  })

  it('Update user', () =>{
    cy.request({
      method: 'PUT',
      url: '/user/berta test',
        body: {
        id: 1000,
        username: 'berta updated',
        firstName: 'berta',
        lastName: 'updated',
        email: 'berta_updated@tester.com',
        password: 'bertaupdated123!',
        phone: '(33)99994-5544',
        userStatus: 100
        }
    })
    .then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal('1000') //it's the new id given
      })
  })

  it('Validate updated user', () => {
  
  cy.request({
    method: 'GET',
    url: '/user/berta updated'
  })
  .then((response) => {
  expect(response.status).to.equal(200)
  expect(response.body.id).to.equal(1000)
  expect(response.body.username).to.equal('berta updated')
  expect(response.body.firstName).to.equal('berta')
  expect(response.body.lastName).to.equal('updated')
  expect(response.body.email).to.equal('berta_updated@tester.com')
  expect(response.body.password).to.equal('bertaupdated123!')
  expect(response.body.phone).to.equal('(33)99994-5544')
  expect(response.body.userStatus).to.equal(100)
  
  })
})


  it('Delete user', () => {
    cy.request({
      method: 'DELETE',
      url: '/user/berta test'
    }).then((response) => {
    expect(response.status).to.equal(200);
      })
  })
  

})
