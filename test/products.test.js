const { createProducts } = require('../services/productsApi')

jest.mock('../model/products', () => {
    return jest.fn().mockImplementation((data) => {
        return {
            save: jest.fn().mockResolvedValue(),
            name: data
        };
    });
});


const data = {
    "name": "pramod",
    "price": 10,
    "desc": "none"
}

test('Test Backend Pass Data', async ()=> {
    const result = await createProducts(data)

    expect(result !== null).toBe(true);
    expect(result.name).toEqual('pramod');
    expect(result).toEqual(data)
})