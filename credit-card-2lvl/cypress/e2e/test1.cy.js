/// <reference types="cypress" />

describe('Тестируем ввод данных карты', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/');
  })
  it('Проверка ввода корректных данных', () => {
    cy.get('#name').type('Ivanov Ivan');
    cy.get('#cardnumber').type('1234123621456985');
    cy.get('#expirationdate').type('01/12');
    cy.get('#securitycode').type('123');

    cy.get('.btn-valid').click();
    cy.get('h2').contains('Данные верны');
  });

  it('Проверка ввода Некорректных данных', () => {
    cy.get('#name').type('Ivanov');
    cy.get('#cardnumber').type('12341236II456985');
    cy.get('#expirationdate').type('01/12');
    cy.get('#securitycode').type('13');

    cy.get('.btn-valid').click();
    cy.get('h2').contains('Данные неверны, проверьте введенную информацию');
  });



  // it('Ввести имя', () => {

  // });
  // it('Ввести имя', () => {

  // });

})