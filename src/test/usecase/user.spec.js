require("dotenv").config();
const UserUseCase = require('../../usecase/user')
const mockUser = require('../mock/user.mock')
const mockUrl = require('../mock/urlFoto.mock')

let mockUserReturn, mockUrlFotoReturn = {}
let userUC = null

describe("USER TEST", () => {
    beforeEach(() => {
        mockUserReturn = {
            getAllUser: jest.fn().mockReturnValue([mockUser.user]),
            getUserById: jest.fn().mockReturnValue(mockUser.user),
            createUser: jest.fn().mockReturnValue(mockUser.user),
            updateUser: jest.fn().mockReturnValue(true),
            deletUser: jest.fn().mockReturnValue(true),
        }
        mockUrlFotoReturn  = {
            getFotoByUserId: jest.fn().mockReturnValue(mockUrl.urlFoto),
        }

        userUC = new UserUseCase(mockUserReturn, mockUrlFotoReturn)
    })
    describe("Get All User Test", () => {
        test("should isSuccess = true statusCode = 200, and type data is array", async () => {
            let res = await userUC.getAllUser()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(Array.isArray(res.data)).toBeTruthy();
            expect(res.data[0]).toHaveProperty("name");
            expect(res.data[0]).toHaveProperty("city");
            expect(res.data[0]).toHaveProperty("phone");
            expect(res.data[0]).toHaveProperty("educationLevel");
            expect(res.data[0]).toHaveProperty("birth");
        
        })

        test("should isSuccess = true statusCode = 200, and type data is array if data user not available", async () => {
            mockUserReturn.getAllUser = jest.fn().mockReturnValue([])
            let res = await userUC.getAllUser()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toEqual([])
        })
    })

    describe("Get User By ID Test", () => {
        test("should isSuccess = true statusCode = 200, and type data is Object ", async () => {
            let res = await userUC.getUserById()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toHaveProperty("name");
            expect(res.data).toHaveProperty("city");
            expect(res.data).toHaveProperty("phone");
            expect(res.data).toHaveProperty("educationLevel");
            expect(res.data).toHaveProperty("birth");
            expect(res.data).toHaveProperty("urlFoto");
        })

        test("should isSuccess = true statusCode = 200, and type data is array if data user not available", async () => {
            mockUserReturn.getUserById = jest.fn().mockReturnValue(null)
            let res = await userUC.getUserById()

            expect(res.isSuccess).toBeFalsy();
            expect(res.statusCode).toEqual(404);
            expect(res.reason).toEqual('user not found')
            expect(res.data).toEqual(null)
        })
    })

    describe("Create User", () => {
        test("should isSuccess = true statusCode = 200, and type data is Object ", async () => {
            let res = await userUC.createUser()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toHaveProperty("name");
            expect(res.data).toHaveProperty("city");
            expect(res.data).toHaveProperty("phone");
            expect(res.data).toHaveProperty("educationLevel");
            expect(res.data).toHaveProperty("birth");
        
        })
    })

    describe("Update User", () => {
        test("should isSuccess = true statusCode = 200, and type data is Object ", async () => {
            let res = await userUC.updateUser(1 ,{ nama: "customerUpdate" })

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
        })

        test("should isSuccess = false statusCode = 404, user not found ", async () => {
            mockUserReturn.getUserById = jest.fn().mockReturnValue(null)
            let res = await userUC.updateUser({ nama: "customerUpdate" })

            expect(res.isSuccess).toBeFalsy();
            expect(res.statusCode).toEqual(404);
            expect(res.reason).toEqual('user not found')
        })
    })

})