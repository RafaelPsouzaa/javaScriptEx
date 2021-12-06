class Car  {
    construct(brand,color,gasoline){
        this.marca = brand;
        this.color = color;
        this.gasoline = gasoline;
    }
    traveledKilometer(Consumption){
        this.Consumption -= this.gasoline;
    }
        
    }

    let brasilia = new Car ("Brasilia","yellow",10);
    console.log(brasilia);


    
