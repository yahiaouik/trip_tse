export default class Trip {

    trip_id : Number;
    country : String;
    city : String;
    arrival_date : Date;
    departure_date : Date;
    longitude : Number;
    latitude : Number;
    user_id : Number;



    constructor(trip_id : Number,country : String,city : String,arrival_date : Date,departure_date : Date,longitude: Number,latitude : Number,user_id : Number){
        this.trip_id = trip_id;
        this.country = country;
        this.city = city;
        this.arrival_date = arrival_date;
        this.departure_date = departure_date;
        this.longitude = longitude || null;
        this.latitude = latitude || null;
        this.user_id = user_id;
    }

    getTripId(){
        return this.trip_id;
    }

    setTripId(trip_id){
        this.trip_id = trip_id;
    }

    getCountry(){
        return this.country;
    }

    setCountry(country){
        this.country = country;
    }

    getCity(){
        return this.city;
    }

    setCity(city){
        this.city =city;
    }

    getArrivalDate(){
        return this.arrival_date;
    }

    setArrivalDate(arrival_date){
        this.arrival_date = arrival_date;
    }

    getDepartureDate(){
        return this.departure_date;
    }

    setDepartureDate(departure_date){
        this.departure_date = departure_date;
    }

    getLongitude(){
        return this.longitude;
    }

    setLongitude(longitude){
        this.longitude = longitude;
    }

    getLatitude(){
        return this.latitude;
    }

    setLatitude(latitude){
        this.latitude = latitude;
    }

    getUserId(){
        return this.user_id;
    }

    setUserId(user_id){
        this.user_id = user_id;
    }
}