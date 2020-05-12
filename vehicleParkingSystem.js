"use strict";

class ParkingSpace {
    constructor(address){
        this.id = ++ParkingSpace.count;
        this.parkedVehicleCount=0; 
        this.parkedVehicleList=[];
        this.vehicleSpace = 2;
        this.address = address;
    }

    parkVehicle(vehicle){
        if(this.vehicleSpace){
            console.log(`Vehicle${vehicle.id} vehicle parked at ${this.address} in the slot number ${this.vehicleSpace}`)
            this.vehicleSpace--;
            vehicle.setParkingStatus(true);
            this.parkedVehicleList.push(vehicle.id);
            return true;
        } else{
            console.error('No Space in the parking.. get a new Parking Space')
            return false;
        }
    }

    getParkedVehicleList(){
        return this.parkedVehicleList;
    }
}
ParkingSpace.count=1;


class Vehicle {
    constructor(name, model, owner, type='car'){
        this.id = ++Vehicle.count;
        this.name = name;
        this.model = model;
        this.owner = owner;
        this.isParked = true;
        this.type = type;
    }

    setParkingStatus(value){
        // check boolean
        this.isParked = value;
    }

    getParkingStatus(){
        return this.isParked;
    }
}
Vehicle.count = 0;

const v1 = new Vehicle('maruti', 'v8', 'lalit', 'Bike');
const v2 = new Vehicle('maruti', 'v8', 'lalit');
const v3 = new Vehicle('maruti', 'v8', 'lalit');
const v4 = new Vehicle('maruti', 'v8', 'lalit');
const v5 = new Vehicle('maruti', 'v8', 'lalit');

const p1 = new ParkingSpace('avenue 1');
const p2 = new ParkingSpace('avenue 2');


p1.parkVehicle(v1);
p1.parkVehicle(v2);
p1.parkVehicle(v3);

p2.parkVehicle(v4);
p2.parkVehicle(v3);
p2.parkVehicle(v5);

console.log(JSON.stringify(p1.getParkedVehicleList()));
console.log(JSON.stringify(p2.getParkedVehicleList()));
