const moduleUsingDB = require('../../src/services/clothCategoryService');
const clothCategory = require('../../src/models/clothCategoryModel');

const fetchData =  {
    "id": "278c1239-6765-4ac6-a24d-62e1f456a237",
    "category": "Dresses",
    "sub_category": "{Causal Dresses:casual tops,Party Dresses:party tops}",
    "user_category": "W",
    "instock": 10,
    "status": 1,
    "created_date": "2023-06-09T14:23:37.000Z",
    "last_modified": "2023-06-09T14:23:37.000Z"
}

const createRecordMessage = { message: 'cloth category has been created' };

jest.mock("../../src/models/clothCategoryModel", () => ({
  findAll: jest.fn(() => Promise.resolve({ data: fetchData })),
  create: jest.fn(() => Promise.resolve({ data: createRecordMessage })),
  findOne: jest.fn(() => Promise.resolve({ data: fetchData })),
  update: jest.fn(() => Promise.resolve({})),
  destroy: jest.fn(() => Promise.resolve({})),
}));


describe("cloth category test suit", () => {

  test("should fetch the data from cloth category", async () => {
    const response = await moduleUsingDB.getClothCategoryList();
    expect(clothCategory.findAll).toHaveBeenCalled();
    expect(response.data.category).toEqual("Dresses");
  });

  test("should create new record in cloth category", async () => {
    const body = {
      category: 'Dresses',
      user_category: 'W',
      sub_category:"{Causal Dresses:casual tops,Party Dresses:party tops}",
      instock : 10 ,
    }
    const response = await moduleUsingDB.createClothCategory(body);
    expect(clothCategory.create).toHaveBeenCalled();
    expect(response).toEqual(createRecordMessage);
  });

  test("should fetch the record from cloth category based on provided data", async () => {
    const param = {
        category: 'Dresses',
        user_category: 'W'
    }
    const response = await moduleUsingDB.findClothCategory(param);
    expect(clothCategory.findOne).toHaveBeenCalled();
    expect(response.data.category).toEqual("Dresses");
  });

  test("should update the record from cloth category based on provided details", async () => {
    const id =  "278c1239-6765-4ac6-a24d-62e1f456a237"
    const param = {
        category: "Non Branded",
        user_category: "M",
        sub_category:"{Causal Dresses:casual tops,Party Dresses:party tops}",
        instock: 10,
    }
    const response = await moduleUsingDB.updateClothCategory(id,param);
    expect(clothCategory.update).toHaveBeenCalled();
    expect(response).toEqual({});
  });

  test("should delete the record from cloth category based on provided id", async () => {
    const id =  "278c1239-6765-4ac6-a24d-62e1f456a237"
    const response = await moduleUsingDB.deleteClothCategory(id);
    expect(clothCategory.destroy).toHaveBeenCalled();
    expect(response).toEqual({});
  });

});

