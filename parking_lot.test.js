const expect  = require('chai').expect;
const ParkingLot = require("./parking_lot");

// TODO: shold use sinon for stabing console.log

describe('Validating parking lot instance Behaviour:', function() {
    const parkingLot =  new ParkingLot(5);
    it('Does it have the init Behaviour', function(done){
        expect(parkingLot.init).to.be.a('function');
        done();
    });

    it('Does it have the park Behaviour', function(done){
        expect(parkingLot.park).to.be.a('function');
        done();
    });

    it('Does it have the leave Behaviour', function(done){
        expect(parkingLot.leave).to.be.a('function');
        done();
    });

    it('Does it have the leave getStatus', function(done){
        expect(parkingLot.getStatus).to.be.a('function');
        done();
    });

    it('Should not have the Private data totalSlots', function(done){
        expect(parkingLot.totalSlots).to.be.a('undefined');
        done();
    });

    it('Should not have the Private data parkedVehicleList', function(done){
        expect(parkingLot.parkedVehicleList).to.be.a('undefined');
        done();
    });
});


describe('Validating parking lot creation:', function() {
    const parkingLot =  new ParkingLot(5);
    const result = parkingLot.init();
    it('does init Behaviour is returing Success', function(done){
        expect(result).be.true;
        done();
    });
});


describe('Validating parking behaviour for vehicle:', function() {
    const parkingLot =  new ParkingLot(3);
    parkingLot.init();
    const firstIncertiotSuccess = parkingLot.park('testing-vehicle1')
    parkingLot.park('testing-vehicle2');
    parkingLot.park('testing-vehicle3');
    const fullInstance = parkingLot.park('testing-vehicle4');
    parkingLot.leave('testing-vehicle1');
    parkingLot.leave('testing-vehicle2');
    const nextNearestInstace= parkingLot.park('testing-vehicle3');

    it('does park Behaviour is returing Success', function(done){
        expect(firstIncertiotSuccess.status).be.true;
        expect(firstIncertiotSuccess.slot).to.eql('1');
        done();
    });

    it('does park Behaviour is returing false when full', function(done){
        expect(fullInstance.status).be.false;
        done();
    });

    it('does park Behaviour is following that nearest slot should be alloted', function(done){
        expect(firstIncertiotSuccess.status).be.true;
        expect(firstIncertiotSuccess.slot).to.eql('1');
        done();
    });
});


describe('Validating leaving behaviour for vehicle:', function() {
    const parkingLot =  new ParkingLot(3);
    parkingLot.init();
    parkingLot.park('testing-vehicle1')
    const leavingResult = parkingLot.leave('testing-vehicle1');
    const invalidVahicleResponse = parkingLot.leave('testing-vehicle2');
    
    it('does park Behaviour is returing Success', function(done){
        expect(leavingResult.status).be.true;
        expect(leavingResult.empty_slot).to.eql('1');
        done();
    });

    it('does park Behaviour is following that nearest slot should be alloted', function(done){
        expect(invalidVahicleResponse.status).be.false;
        done();
    });

    // TODO: Write test for Cost calculation
});