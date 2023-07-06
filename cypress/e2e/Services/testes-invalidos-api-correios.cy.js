describe('Buscar por um CEP inválido e validar o response', () => {
    
});


it('Validação do response para CEP inválido - Do 1 ao 8', () => { 
      
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/12345678' 

    }).then((response) => { 

      expect(response.status).to.equal(404);
      expect(response.body.message).to.equal('CEP 12345678 not found') 


    })
  })


  it('Validação do response para CEP inválido - Menos caracteres, utilizando 0', () => { 
    
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/0000000' 

    }).then((response) => { 

      expect(response.status).to.equal(404); 
      expect(response.body.message).to.equal('CEP 0 not found')


    })
  })   


  it('Validação do response para CEP inválido - Utilização de 0 e 1', () => { 
    
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/01010101' 

    }).then((response) => { 

      expect(response.status).to.equal(404); 
      expect(response.body.message).to.equal('CEP 1010101 not found')


    })
  })


  it('Validação do response para CEP inválido - Alfanumérico', () => { 
    
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/a1b2c3d4' 

    }).then((response) => { 

      expect(response.status).to.equal(400); 
      expect(response.body.errorCode).to.equal('400 BAD_REQUEST')


    })
  })


  it('Validação do response para CEP inválido - Utilização de caracteres especiais', () => { 
    
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/123456@7' 

    }).then((response) => { 

      expect(response.status).to.equal(400); 
      expect(response.body.errorCode).to.equal('400 BAD_REQUEST')


    })
  })


  it('Validação do response para CEP inválido - Menos caracteres com hífen', () => { 
    
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/12-345' 

    }).then((response) => { 

      expect(response.status).to.equal(400); 
      expect(response.body.errorCode).to.equal('400 BAD_REQUEST')


    })
  })


  it('Validação do response para CEP inválido - Mais caracteres', () => { 
    
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/9876543210' 

    }).then((response) => { 

      expect(response.status).to.equal(400); 
      expect(response.body.errorCode).to.equal('400 BAD_REQUEST')


    })
  })


  it('Validação do response para CEP inválido - Menos caracteres (Crescente)', () => { 
    
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/12345' 

    }).then((response) => { 

      expect(response.status).to.equal(404); 
      expect(response.body.message).to.equal('CEP 12345 not found')

    })
})


  it('Validação do response para CEP inválido - Menos caracteres Decrescente', () => { 
    
    cy.request({ 

      failOnStatusCode: false, 

      method: 'GET', 

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/567890' 

    }).then((response) => { 

      expect(response.status).to.equal(404); 
      expect(response.body.message).to.equal('CEP 567890 not found')


    })
  })
