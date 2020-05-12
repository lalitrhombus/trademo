function ParkingLot(numberOfSlots) {
    let totalSlots = numberOfSlots;
    const parkedVehicleList = {};

    findNearestEmptySlots = () => {
        let nearestEmptySlot = 0;
        Object.keys(parkedVehicleList).every((slot)=>{
            if(!parkedVehicleList[slot].vehicleNumber){
                nearestEmptySlot = slot;
                return false;
            }
            return true;
        })
        return nearestEmptySlot;
    }

    findVehicle = (vehicleNumber) => {
        let vehicleInSlot = 0;
        Object.keys(parkedVehicleList).every((slot)=>{
            if(parkedVehicleList[slot].vehicleNumber === vehicleNumber){
                vehicleInSlot = slot;
                return false;
            }
            return true;
        })
        return vehicleInSlot;
    }

    this.init = () => {
        console.log(`Created parking lot with ${totalSlots} slots`);
        for(let i=1;i<=totalSlots;i++){
            parkedVehicleList[i]={}
        }
    }

    this.park = (vehicleNumber) => {
        const nearestEmptySlot = findNearestEmptySlots();
        if(!nearestEmptySlot){
            console.log('Sorry, parking lot is full');
            return false;
        }
        parkedVehicleList[nearestEmptySlot]={
            vehicleNumber
        }
        console.log(`Allocated slot number: ${nearestEmptySlot}`);
        return true;
    }

    this.leave = (vehicleNumber, time) => {
        const vehicleInSlot = findVehicle(vehicleNumber);
        if(!vehicleInSlot){
            console.log(`Registration number ${vehicleNumber} not found`);
           return false;
        }
        const cost = costCalculation(time);
        parkedVehicleList[vehicleInSlot]={};
        console.log(`Registration number ${vehicleNumber} with Slot Number ${vehicleInSlot} is free with Charge ${cost}`);
        return true;
    }

    this.getStatus = () =>{
        console.log("Slot No.    Registration No.");
        Object.keys(parkedVehicleList).forEach((slot)=>{
            if(parkedVehicleList[slot].vehicleNumber){
                console.log(`${slot}    ${parkedVehicleList[slot].vehicleNumber}`);
            }
        })
        return true;
    }

    costCalculation = (time) => {
        // can be move to constant or configured in constructor on parking lot initiation
        const firstBlockCost = 10; 
        const afterEachHour = 10;
        if(time<=2){
            return firstBlockCost;
        }
        let totalCost = firstBlockCost;
        for(let i=2; i<time; i++){
            totalCost += afterEachHour;
        }
        return totalCost;
    }
}

module.exports = ParkingLot;