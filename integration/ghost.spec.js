describe('Tests E2E Ghost', () => {
	beforeEach(() => {
	    cy.visit('/ghost')
	    cy.url().should('include', 'signin')
		/*cy.get('input[id="ember8"]').type('m.agonf@uniandes.edu.co')
    cy.get('input[id="ember10"]').type('chisp@s3411')
    cy.get('button[id="ember12"]').click()*/
cy.get('#ember7').type('lucia.neme@gmail.com')
			cy.get('#ember9').type('Aforero.2o1o')
			cy.get('#ember11 > span').click()
			cy.wait(2000)
	//cy.url().should('include', 'site')
	  
  })

  it('admin - list pages', () => {
	cy.get('a[href="#/pages/"]').click()
	cy.url().should('include', 'pages')
  })

  it('admin - create page', () => {
	cy.get('a[href="#/pages/"]').click()
	cy.url().should('include', 'pages')

	cy.get('a[href="#/editor/page/"]').click()
	cy.url().should('include', 'editor/page')
	cy.get('textarea').type('Cypress Test Page')
//	cy.get('textarea[placeholder="Page Title"]').type('Cypress Test Page')
	//cy.get('button.post-settings').click()
		cy.contains('Publish').click()
	cy.get('button.close.settings-menu-header-action').click()
	cy.get('a[href="#/pages/"]').click()	
	cy.url().should('include', 'pages')
  })

  /*it('admin - publish page', () => {
	cy.get('a[href="#/pages/"]').click()
	cy.url().should('include', 'pages')

    cy.contains('Cypress Test Page').click()
	cy.contains('Publish').click()
	cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
	cy.get('a[href="#/pages/"]').click()
	cy.url().should('include', 'pages')	

  })

  it('admin - check featured page', () => {
	cy.get('a[href="#/pages/"]').click()
	cy.url().should('include', 'pages')

	cy.contains('Cypress Test Page').click()
	cy.get('button.post-settings').click()
	cy.get('input.gh-input.post-settings-featured').should('not.be.visible').check({ force: true}) 
	cy.get('button.close.settings-menu-header-action').click()
	cy.get('a[href="#/pages/"]').click()	
	cy.url().should('include', 'pages')	
  })
*/
/*
  it('admin - unpublish page', () => {
	cy.get('a[href="#/pages/"]').click()
	cy.url().should('include', 'pages')

	cy.contains('Cypress Test Page').click()
	cy.contains('Update').click()
	cy.get('gh-publishmenu-radio-button').first().check()
	cy.get('[type="radio"].gh-publishmenu-radio-button').first().check() //.should('not.be.visible').check({ force: true}) 
	cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
	cy.get('button.close.settings-menu-header-action').click()
	cy.get('a[href="#/pages/"]').click()
	cy.url().should('include', 'pages')
  })
//*/

/*
  it('admin - delete page', () => {
	cy.get('a[href="#/pages/"]').click()
	cy.url().should('include', 'pages')

    cy.contains('Cypress Test Page').click()
	cy.get('button.post-settings').click()
	cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click() 
	cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
	cy.get('button.close.settings-menu-header-action').click()
  })
//*/

})
