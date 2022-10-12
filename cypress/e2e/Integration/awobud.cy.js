describe("Testing awobud landing page", ()=>{

  beforeEach(()=>{
    cy.visit("https://www.awobud.com/");
  })

  it('Should scroll to specific sections, or redirect to new url', ()=>{

    cy.get('.see-more-btn')
    cy.get('.services').should('be.visible');
    

    cy.get(".nav-list__item").contains('Strona główna').click();
    cy.get('header').should('be.visible');

    cy.get(".nav-list__item").contains('Usługi').click();
    cy.get('.services').should('be.visible');

    cy.get('.nav-list__item').contains('O nas').click();
    cy.get('.about-us').should('be.visible');

    cy.get('.nav-list__item').contains('Kontakt').click();
    cy.get('.contact').should('be.visible');

    cy.get('.nav-list__item').contains('Galeria').click();
    cy.get('.header-gallery').should('be.visible');
    cy.get('a[href="index.html"]').click();
    cy.get('header').should('be.visible');

    
    
  })

  it("Form should send a message", ()=>{

      cy.get("#name").type("Name and Surname");
      cy.get("#mail").type("example@test.com");
      cy.get('[name=phone]').type("123 123 123");
      cy.get('#msg').type("Example message");

  });

  it('Should scroll to contact form', ()=>{

    cy.get('.about-us__button').click();
    cy.get('.contact').should('be.visible');

  })

  it('Should display information about employment', ()=>{
    cy.get('.employment-offer');
    cy.get('#work-offer').click();
    cy.get('.work-offer-title').contains('Firma AWOBUD niestety aktualnie nie poszukuję nowego pracownika');
  })

  it('Should redirect to gallery', ()=>{

    cy.get('a[href="gallery.html"]').contains('Kliknij w ten link, aby zobaczyć zdjęcia').click()
    cy.get('.header-gallery').should('be.visible');
    cy.get('a[href="index.html"]').click();
    cy.get('header').should('be.visible');

  })

  it('Contact buttons', ()=>{

    cy.get('a[href="tel:602-182-717"]').contains('+48 602 182 717');
    cy.get('a[href="mailto:awobud.biuro@gmail.com"]').contains('awobud.biuro@gmail.com');

  })

}); 