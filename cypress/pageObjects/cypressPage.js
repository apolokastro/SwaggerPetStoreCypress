class cypressPage{

    getGetOption(){
        return cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a');
    }

    getChildrenOption(){
        return cy.get('.home-list > :nth-child(2) > ul > :nth-child(1) > a');
    }

}

export default cypressPage;