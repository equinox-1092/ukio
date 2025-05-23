export class Apartments {
    constructor({apartmentId=0, cityId=0, numberBedrooms=0, numberGarage=0, Price=0, squareMeters=0, description='', startDate='', endDate='', state='A'}) {
        this.apartmentId = apartmentId;
        this.cityId = cityId;
        this.numberBedrooms = numberBedrooms;
        this.numberGarage = numberGarage;
        this.Price = Price;
        this.squareMeters = squareMeters;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.state = state;
    }
}