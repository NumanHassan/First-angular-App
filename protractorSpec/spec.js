describe('First-angular-App', function() {
     var list = element.all(by.css('.dropdown option'));
    it('should have a title', function() {
        browser.get('http://localhost/First-angular-App/source/');

        expect(browser.getTitle()).toEqual('First Angular App');
    });

    it('should have a title text', function() {

        expect(element(by.id('headertext')).getText()).toEqual('First Angular JS App');
    });

    it('should test radio button Presence', function() {

        expect(element(by.id('Asc')).isPresent()).toBe(true);
    });

    it('should test radio button Presence', function() {

        expect(element(by.id('Desc')).isPresent()).toBe(true);
    });

    it('should test radio button Presence', function() {

        expect(element(by.id('sorting_options')).isPresent()).toBe(true);
    });

    it('should count items in list', function() {

        expect(element.all(by.repeater('x in names')).count()).toEqual(25);
    });

    it('should count the number of option', function() {
        expect(element(by.id('sorting_options')).all(by.tagName('option')).count()).toBe(3);
    });

    it('should test the sorting_options text', function() {
     
        expect(list.get(0).getText()).toBe('Please Select for sorting');
        expect(list.get(1).getText()).toBe('Title');
        expect(list.get(2).getText()).toBe('Score');
    });

    it('ensures there is a table loaded before moving on', function() {
         expect($('table').isPresent()).toBeTruthy();
    });

    it('count row in table1', function() {
        expect(element(by.id('table1')).all(by.tagName('tr')).count()).toBe(3);
    });

    it('count row in table2', function() {
        expect(element(by.id('table2')).all(by.tagName('tr')).count()).toBe(26);
    });
    
});