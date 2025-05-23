export class Cities {
    constructor({cityId=0, cityName='', country='', population=0, description='', apartments=[]}) {
        this.cityId = cityId;
        this.cityName = cityName;
        this.country = country;
        this.population = population;
        this.description = description;
        this.apartments = apartments || [];
    }
}