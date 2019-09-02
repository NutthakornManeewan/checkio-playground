const { biggerPrice } = require("./biggerPrice");

test(`biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]) == [
        {"name": "wine", "price": 138},
        {"name": "bread", "price": 100}
    ]`,() => {
        expect(biggerPrice(2, [
            {"name": "bread", "price": 100},
            {"name": "wine", "price": 138},
            {"name": "meat", "price": 15},
            {"name": "water", "price": 1}
        ])).toEqual([
            {"name": "wine", "price": 138},
            {"name": "bread", "price": 100}
        ]);
    });

test(`biggerPrice(1, [
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170}
    ]) == [{"name": "whiteboard", "price": 170}]`,() => {
        expect(biggerPrice(1, [
            {"name": "pen", "price": 5},
            {"name": "whiteboard", "price": 170}
        ])).toEqual([{"name": "whiteboard", "price": 170}]);
    });