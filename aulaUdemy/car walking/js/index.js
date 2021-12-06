class Car  {
    constructor(brand,color,gasoline){
        this.marca = brand;
        this.color = color;
        this.gasoline = gasoline;
    }
    traveledKilometer(Consumption){
        this.Consumption = this.gasoline - Consumption;
        this.gasoline = this.Consumption;
    }

        
    }

    let brasilia = new Car ("Brasilia","yellow",10);
    brasilia.traveledKilometer(2);
    console.log(brasilia);
    
   



    
