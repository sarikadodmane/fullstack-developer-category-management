const moduleUsingDB = require('../../src/services/userCategoryService');
const UserCategory = require('../../src/models/userCategoryModel');

const fetchData = {
  "id": 1,
  "category": "Women",
  "alias": "W",
  "status": 1,
  "created_date": "2023-06-09T11:39:59.000Z",
  "last_modified": "2023-06-09T11:39:59.000Z"
};

const createRecordMessage = { message: 'user category has been created' }

jest.mock("../../src/models/userCategoryModel", () => ({
  findAll: jest.fn(() => Promise.resolve({ data: fetchData })),
  create: jest.fn(() => Promise.resolve({ data: createRecordMessage })),
  findOne: jest.fn(() => Promise.resolve({ data: fetchData })),
}));


describe("user category test suit", () => {

  test("should fetch the data from user category", async () => {
    const response = await moduleUsingDB.getUserCategory();
    expect(UserCategory.findAll).toHaveBeenCalled();
    expect(response.data.category).toEqual("Women");
  });

  test("should create new record in user category", async () => {
    const body = {
      category: 'Women',
      alias: 'W'
    }
    const response = await moduleUsingDB.createUserCategory(body);
    expect(UserCategory.create).toHaveBeenCalled();
    expect(response).toEqual(createRecordMessage);
  });

  test("should fetch the record from user category based on provided id", async () => {
    const param = {
      alias: 'W'
    }
    const response = await moduleUsingDB.findUserCategory(param);
    expect(UserCategory.findOne).toHaveBeenCalled();
    expect(response.data.category).toEqual("Women");
  });
});

