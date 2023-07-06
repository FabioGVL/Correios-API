describe('Buscar por um CEP válido e validar o response', () => { 
    
    it('Validação do response para CEP do RS', () => { 
      
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


    it('Validação do response para CEP do SP', () => { 
      
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


it('Validação do response para CEP do RJ', () => { 
      
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


    it('Validação do response para CEP do DF', () => { 
      
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


    it('Validação do response para CEP do MG', () => { 
      
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


    it('Validação do response para CEP do CE', () => { 
      
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

    it('Validação do response para CEP do PR', () => { 
      
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


    it('Validação do response para CEP do GO', () => { 
      
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


    it('Validação do response para CEP do MT', () => { 
      
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


    it('Validação do response para CEP do MS', () => { 
      
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


    it('Validação do response para CEP do BA', () => { 
      
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


    it('Validação do response para CEP do AM', () => { 
      
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

  })