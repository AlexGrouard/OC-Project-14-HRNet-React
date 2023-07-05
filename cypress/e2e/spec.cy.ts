describe("form opening", () => {
	it("open the localhost page", () => {
		cy.visit("http://localhost:5173/")
	})
})

describe("table testing", () => {
	it("open the table", () => {
		cy.visit("http://localhost:5173/")
		/* ==== Generated with Cypress Studio ==== */
		cy.get("a").click()
		cy.get(".css-132xy47-MuiTableCell-root").should("have.text", "Jane")
		/* ==== End Cypress Studio ==== */
	})
})

describe("form testing", () => {
	it("fill the form and submit", () => {
        cy.visit("http://localhost:5173/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get("#firstName").clear("J")
        cy.get("#firstName").type("John")
        cy.get("#lastName").clear("D")
        cy.get("#lastName").type("Doe")
        cy.get("body").click()
        cy.get(":nth-child(3) > .main > input").click()
        cy.get(":nth-child(3) > .main > input").click()
        cy.get(
			'.visible > table > tbody > :nth-child(3) > [data-value="12"]'
		).click()
        cy.get(".visible > .header > div > :nth-child(1)").select("1")
        cy.get(".visible > .header > div > :nth-child(2)").select("1986")

        /* ==== Generated with Cypress Studio ==== */
        cy.get('.MuiGrid-container').click();
        cy.get(':nth-child(4) > .main > input').click();
        cy.get(':nth-child(4) > [data-value="17"]').click();
        cy.get('.visible > .header > div > :nth-child(1)').select('6');
        cy.get('.visible > .header > div > :nth-child(2)').select('2022');
        cy.get('body').click();
        cy.get("#Department").parent().click().get('[data-value="Sales"]').click()
        cy.get('#street').clear('1');
        cy.get('#street').type('123 main St');
        cy.get('#city').clear('S');
        cy.get('#city').type('Somewhere');
        cy.get('body').click();
        cy.get("#states").parent().click().get('[data-value="Idaho"]').click()
        cy.get('#zipCode').clear('1');
        cy.get('#zipCode').type('12345');
        cy.get('.MuiButtonBase-root').click();
        cy.get('.MuiModal-root > .MuiBox-root').click();
        cy.get('body').click();
		cy.get(".css-132xy47-MuiTableCell-root").should("have.text", "John")
        /* ==== End Cypress Studio ==== */
    })
})
