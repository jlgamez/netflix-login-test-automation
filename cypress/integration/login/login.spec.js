import { describe } from 'mocha';
import { basePage } from '../common/base.page';

describe('Perform login', function(){

    before(function(){
        basePage.goToLoginPage;
    });
    
    it('Should have title Netflix', function(){

        basePage.pageTitle.should('eq', 'Netflix');
    });

});