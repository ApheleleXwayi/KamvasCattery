describe('Weekly booking', function () {
    it('should return the booking cost for Wednesday special of 25% off', function () {
        const booking = {
            check_in_day: 'Wednesday',
            duration: 3,
            cat_name: 'Snowy'
        }
        assert.equal(101.25, bookingCost(booking));

    });

    it('should return the booking cost for Friday special of 15% off', function () {

        assert.equal(114.75, bookingCost({
            check_in_day: 'Friday',
            duration: 3,
            cat_name : 'Snowy'
          }));

    });

    it('should return the booking cost for Monday', function () {
        assert.equal(135, bookingCost({
            check_in_day: 'Monday',
            duration: 3,
            cat_name : 'Snowy'
          }));

    });

}); 
