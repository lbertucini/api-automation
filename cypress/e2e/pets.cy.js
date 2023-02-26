/// <reference types="cypress" />

describe('Managing pets', () => {
  it('Add a new pet', () => {

    cy.request({
      method: 'POST',
      url: '/pet',
        body: {
            "name": "doggie",
            "photoUrls": [
              "officia sint ipsum laboris",
              "velit qui incididunt aliqua"
            ],
            "id": 39872314,
            "category": {
              "id": 20932942,
              "name": "anim fugia"
            },
            "tags": [
              {
                "id": 96285173,
                "name": "et non"
              },
              {
                "id": 62303591,
                "name": "do exercitation"
              }
            ],
            "status": "pending"
          }
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.name).to.equal('doggie')
      expect(response.body.photoUrls[0]).to.equal('officia sint ipsum laboris') //todo find a  way to validate all items from the array
      expect(response.body.photoUrls[1]).to.equal('velit qui incididunt aliqua')
      expect(response.body.id).to.equal(39872314)
      expect(response.body.category.id).to.equal(20932942)
      expect(response.body.category.name).to.equal('anim fugia')
      expect(response.body.tags[0].id).to.equal(96285173)
      expect(response.body.tags[0].name).to.equal('et non')
      expect(response.body.status).to.equal('pending')
      })
    })

  it('Update an existing pet', () => {

    cy.request({
      method: 'PUT',
      url: '/pet',
        body: {
            "name": "doggie updated",
            "photoUrls": [
              "photoupdate1",
              "photo update 2"
            ],
            "id": 39873333,
            "category": {
              "id": 20922222,
              "name": "category updated"
            },
            "tags": [
              {
                "id": 96285555,
                "name": "tag updated 1"
              },
              {
                "id": 62306666,
                "name": "tag updated 2"
              }
            ],
            "status": "sold"
          }
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.name).to.equal('doggie updated')
      expect(response.body.photoUrls[0]).to.equal('photoupdate1')
      expect(response.body.photoUrls[1]).to.equal('photo update 2')
      expect(response.body.id).to.equal(39873333)
      expect(response.body.category.id).to.equal(20922222)
      expect(response.body.category.name).to.equal('category updated')
      expect(response.body.tags[1].id).to.equal(62306666)
      expect(response.body.tags[1].name).to.equal('tag updated 2')
      expect(response.body.status).to.equal('sold')
      })
    })
  
  it('Searching pets by status', () => {

    cy.request({
      method: 'GET',
      url: '/pet/findByStatus?status=sold'
    }).then((response) => {
      expect(response.status).to.equal(200)
      //todo validate array list
    })
    })

  it('Searching pets by tags', () => {

    cy.request({
      method: 'GET',
      url: '/pet/findByTags?tags=tag updated 2'
    }).then((response) => {
      expect(response.status).to.equal(200)
      //todo validate array list
    })
    }) 

  it('Finding pets by ID', () => {

    cy.request({
      method: 'GET',
      url: '/pet/39873333'
    }).then((response) => {
      expect(response.status).to.equal(200)
      //todo validate array list
    })
    }) 

  it('Delete a pet', () => {

    cy.request({
      method: 'DELETE',
      url: '/pet/39873333'
    }).then((response) => {
      expect(response.status).to.equal(200)
      //todo validate array list
    })
    }) 

  })