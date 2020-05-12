let ParkingLot = require("./parking_lot");
let parkingLot;
function commandProcessor(command){
    const commandBreakup = command.split(' ');
    switch(commandBreakup[0]){
        case 'create_parking_lot':
            parkingLot =  new ParkingLot(commandBreakup[1]);
            parkingLot.init();
            break;
        case 'park':
            parkingLot.park(commandBreakup[1]);
            break;
        case 'leave':
            parkingLot.leave(commandBreakup[1], commandBreakup[2]);
            break;
        case 'status':
            parkingLot.getStatus();
            break;
        default:
            console.error('Command not exists');
    }
}

module.exports = commandProcessor;