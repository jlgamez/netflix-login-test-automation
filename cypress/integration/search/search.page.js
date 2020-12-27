const searchEelements = {
    searchButton: () => cy.findByRole('button', { name: /search/i }),
    searchBar: () => cy.get('input[name="searchInput"]'),
    firstResult: () => cy.find('.fallback-text').eq(0),
    noResultsWarning: () => cy.get('.noResults p:nth-child(1)'),
};

export const search = {
    clickOnSearch(){searchEelements.searchButton().click();},
    searchFor(searchStr){navElements.searchBar().type(searchStr).type('{enter}');},
    firstResultShouldContain(searchStr){searchEelements.firstResult().contains(searchStr);},
    noResultsMessageShouldContain(searchStr){searchEelements.noResultsWarning().contains(searchStr);}
    // par excluir search term de resultados que no deban incluirlo usa el firstRESULTCONTAINS con la regex ^((?!searchStr).)*$


};