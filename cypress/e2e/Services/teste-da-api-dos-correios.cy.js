describe('Busca por um CEP e valida o resultado', () => { 
    
    it('Caso valido 1', () => { 
      
      cy.request({  

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/90245520' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Rua Tarso Galvão Bueno Filho'); 
        expect(response.body.city).to.equal('Porto Alegre');
        expect(response.body.state).to.equal('RS')

      }) 
    })


    it('Caso valido 2', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/01153000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Rua Vitorino Carmilo');
        expect(response.body.city).to.equal('São Paulo');
        expect(response.body.state).to.equal('SP')

      })
    })


it('Caso valido 3', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/20230010' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Rua Riachuelo'); 
        expect(response.body.city).to.equal('Rio de Janeiro');
        expect(response.body.state).to.equal('RJ')

      })
    })


    it('Caso valido 4', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/70635815' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Parque Capital Digital Lote 4'); 
        expect(response.body.city).to.equal('Brasília');
        expect(response.body.state).to.equal('DF')

      })
    })


    it('Caso valido 5', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/30130110' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Alameda Ezequiel Dias');
        expect(response.body.city).to.equal('Belo Horizonte');
        expect(response.body.state).to.equal('MG')

      })
    })


    it('Caso valido 6', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/60055000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Avenida Alberto Nepomuceno'); 
        expect(response.body.city).to.equal('Fortaleza');
        expect(response.body.state).to.equal('CE')

      })
    })

    it('Caso valido 7', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/80250000' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Rua Nunes Machado'); 
        expect(response.body.city).to.equal('Curitiba');
        expect(response.body.state).to.equal('PR')

      })
    })


    it('Caso valido 8', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/74850330' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Rua Almirante Barroso'); 
        expect(response.body.city).to.equal('Goiânia');
        expect(response.body.state).to.equal('GO')

      })
    })


    it('Caso valido 9', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/78070100' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Avenida Carmindo de Campos'); 
        expect(response.body.city).to.equal('Cuiabá');
        expect(response.body.state).to.equal('MT')

      })
    })


    it('Caso valido 10', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/79002030' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Avenida João Rosa Pires'); 
        expect(response.body.city).to.equal('Campo Grande');
        expect(response.body.state).to.equal('MS')

      })
    })


    it('Caso valido 11', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/40026280' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Largo do Pelourinho'); 
        expect(response.body.city).to.equal('Salvador');
        expect(response.body.state).to.equal('BA')

      })
    })


    it('Caso valido 12', () => { 
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/69010110' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.address).to.equal('Rua Monsenhor Coutinho'); 
        expect(response.body.city).to.equal('Manaus');
        expect(response.body.state).to.equal('AM')

      })
    })

    it('Caso invalido 1', () => { 
      
      cy.request({ 

        failOnStatusCode: false, 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/00000000' 

      }).then((response) => { 

        expect(response.status).to.equal(404);
        expect(response.body.message).to.equal('Recurso não encontrado') 


      })
    })


    it('Caso invalido 2', () => { 
      
      cy.request({ 

        failOnStatusCode: false, 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/0000000' 

      }).then((response) => { 

        expect(response.status).to.equal(404); 
        expect(response.body.message).to.equal('Recurso não encontrado')


      })
    })   


    it('Caso invalido 3', () => { 
      
      cy.request({ 

        failOnStatusCode: false, 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/01234567' 

      }).then((response) => { 

        expect(response.status).to.equal(404); 
        expect(response.body.message).to.equal('Recurso não encontrado')


      })
    })   


    it('Caso invalido 4', () => { 
      
      cy.request({ 

        failOnStatusCode: false, 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/01010101' 

      }).then((response) => { 

        expect(response.status).to.equal(404); 
        expect(response.body.message).to.equal('Recurso não encontrado')


      })
    })

  })