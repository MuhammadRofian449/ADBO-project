class Inventory {
    constructor() {
        this.guitars = [];
    }

    addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
        const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
        this.guitars.push(guitar);
    }

    getGuitar(serialNumber) {
        // Menggunakan metode .find() untuk menggantikan Iterator Java
        return this.guitars.find(guitar => guitar.getSerialNumber() === serialNumber) || null;
    }

    search(searchGuitar) {
        for (const guitar of this.guitars) {
            
            // Logika pencarian builder
            let builder = searchGuitar.getBuilder();
            if (builder && builder !== "" && builder !== guitar.getBuilder()) continue;

            // Logika pencarian model
            let model = searchGuitar.getModel();
            if (model && model !== "" && model !== guitar.getModel()) continue;

            // Logika pencarian type
            let type = searchGuitar.getType();
            if (type && type !== "" && type !== guitar.getType()) continue;

            // Logika pencarian backWood
            let backWood = searchGuitar.getBackWood();
            if (backWood && backWood !== "" && backWood !== guitar.getBackWood()) continue;

            // Logika pencarian topWood
            let topWood = searchGuitar.getTopWood();
            if (topWood && topWood !== "" && topWood !== guitar.getTopWood()) continue;

            return guitar; // Mengembalikan gitar pertama yang cocok
        }
        return null;
    }
}