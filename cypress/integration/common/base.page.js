export const basePage = {
    shouldHaveInUrl(str){ cy.url().should('contain', str);},
    shouldNotHaveInUrl(str){cy.url().should('not.contain', str);},
    pageTitleMAtch(title){cy.title().should('eq', title);},
    refresh(){cy.reload();},
    killCookies(){cy.clearCookies();},
    keepCookies(){Cypress.Cookies.preserveOnce('SecureNetflixId', 'hasSeenCookieDisclosure', 'lhpuuidh-browse-VVCRB7NARJDMVCTBZ74P3GGWMM', 'profilesNewSession');},
    checkCurrentPage(str){
        let currentUrl;
        cy.url().then((url)=>{
           currentUrl = url;
        });
        if (currentUrl.includes(str)) { 
            return true;
        } else { 
            return false;
        }
    },
    checkInIfProfilePage(){
        let currentPageisProfile = document.getElementsByClassName('profile-gate-label');
        let ptofileIsvisible = document.getElementsByClassName('profile-gate-label').offsetParent;
        cy.wait(1500);
        if(currentPageisProfile){
            cy.get('div[data-profile-guid="VVCRB7NARJDMVCTBZ74P3GGWMM"]').click();
        }
    },
};

export const go = {
    toHomePage () {
        cy.visit('https://www.netflix.com/browse/');
    },

    toLoginPage () {cy.visit('https://www.netflix.com/login');}
}

export const perform = {
    login(user, password){
        go.toLoginPage();
        cy.findByRole('textbox', { name: /email or phone number/i }).type(user, {force:true});
        cy.findByLabelText(/password/i).type(password, {force:true});
        cy.findByRole('button', { name: /sign in/i }).click();
        basePage.checkInIfProfilePage();
    },

    getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      }
}

