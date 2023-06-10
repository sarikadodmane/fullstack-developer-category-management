const moduleUsingDB = require('../../src/services/footwearCategoryService');
const FootwearCategory = require('../../src/models/footwearCategoryModel');

const fetchData =  {
    "id": "05faa72e-8ff9-4f07-91a1-480d95f947ce",
    "category": "Non Branded",
    "user_category": "M",
    "instock": 10,
    "status": 1,
    "created_date": "2023-06-09T12:18:03.000Z",
    "last_modified": "2023-06-09T12:18:03.000Z"
}

const createRecordMessage = { message: 'footwear category has been created' };

jest.mock("../../src/models/footwearCategoryModel", () => ({
  findAll: jest.fn(() => Promise.resolve({ data: fetchData })),
  create: jest.fn(() => Promise.resolve({ data: createRecordMessage })),
  findOne: jest.fn(() => Promise.resolve({ data: fetchData })),
  update: jest.fn(() => Promise.resolve({})),
  destroy: jest.fn(() => Promise.resolve({})),
}));


describe("footwear category test suit", () => {

  test("should fetch the data from footwear category", async () => {
    const response = await moduleUsingDB.getFootwearCategoryList();
    expect(FootwearCategory.findAll).toHaveBeenCalled();
    expect(response.data.category).toEqual("Non Branded");
  });

  test("should create new record in footwear category", async () => {
    const body = {
      category: 'Women',
      user_category: 'W',
      instock : 10 ,
    }
    const response = await moduleUsingDB.createFootwearCategory(body);
    expect(FootwearCategory.create).toHaveBeenCalled();
    expect(response).toEqual(createRecordMessage);
  });

  test("should fetch the record from footwear category based on provided id", async () => {
    const param = {
      id: "05faa72e-8ff9-4f07-91a1-480d95f947ce"
    }
    const response = await moduleUsingDB.findFootwearCategoryById(param);
    expect(FootwearCategory.findOne).toHaveBeenCalled();
    expect(response.data.category).toEqual("Non Branded");
  });

  test("should update the record from footwear category based on provided details", async () => {
    const id =  "05faa72e-8ff9-4f07-91a1-480d95f947ce"
    const param = {
        category: "Non Branded",
        user_category: "M",
        instock: 10,
    }
    const response = await moduleUsingDB.updateFootwearCategory(id,param);
    expect(FootwearCategory.update).toHaveBeenCalled();
    expect(response).toEqual({});
  });

  test("should delete the record from footwear category based on provided id", async () => {
    const id =  "05faa72e-8ff9-4f07-91a1-480d95f947ce"
    const response = await moduleUsingDB.deleteFootwearCategory(id);
    expect(FootwearCategory.destroy).toHaveBeenCalled();
    expect(response).toEqual({});
  });

});

