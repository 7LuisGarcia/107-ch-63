const catalog = [
    {
        "title": "Super Cleat",
        "category": "Cleats",
        "price": 200.00,
        "image" : "cleat1.webp",
        "_id": "1", // This is unique
    },

    {
        "title": "Fly Cleat",
        "category": "Cleats",
        "price": 220.00,
        "image" : "cleat2.png",
        "_id": "2",
    },

    {
        "title": "Control Cleat",
        "category": "Cleats",
        "price": 190.00,
        "image" : "cleat3.png",
        "_id": "3",
    },

    {
        "title": "Speed Cleat",
        "category": "Cleats",
        "price": 200.00,
        "image" : "cleat4.png",
        "_id": "4",
    },
];

class DataService {
    getProducts()
    {
        return catalog;
    }
};
    
export default DataService