require("dotenv").config();
const UserUseCase = require('../../usecase/user')
const mockUser = require('../mock/user.mock')

let mockUserReturn = {}
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

        func = {
            getAge: jest.fn().mockReturnValue()
        }

        userUC = new UserUseCase(mockUserReturn, func)
    })
    describe("Get All User Test", () => {
        test("should isSuccess = true statusCode = 200, and type data is array", async  () => { 
            let res = await userUC.getAllUser()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(Array.isArray(res.data)).toBeTruthy();
            expect(res.data[0]).toHaveProperty("name");
            expect(res.data[0]).toHaveProperty("dateOfBirth");
            expect(res.data[0]).toHaveProperty("age");
            expect(res.data[0]).toHaveProperty("whatsapp");
            expect(res.data[0]).toHaveProperty("education");
            expect(res.data[0]).toHaveProperty("cityId");
            expect(res.data[0]).toHaveProperty("photoId");
         })

         test("should isSuccess = true statusCode = 200, and type data is array if data user not available", async  () => { 
            mockUserReturn.getAllUser = jest.fn().mockReturnValue([])
            let res = await userUC.getAllUser()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toEqual([])
         })
    })

    describe("Get User By ID Test", () => {
        test("should isSuccess = true statusCode = 200, and type data is Object ", async  () => { 
            let res = await userUC.getUserById()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toHaveProperty("name");
            expect(res.data).toHaveProperty("dateOfBirth");
            expect(res.data).toHaveProperty("age");
            expect(res.data).toHaveProperty("whatsapp");
            expect(res.data).toHaveProperty("education");
            expect(res.data).toHaveProperty("cityId");
            expect(res.data).toHaveProperty("photoId");
         })

         test("should isSuccess = true statusCode = 200, and type data is array if data user not available", async  () => { 
            mockUserReturn.getUserById = jest.fn().mockReturnValue(null)
            let res = await userUC.getUserById()

            expect(res.isSuccess).toBeFalsy();
            expect(res.statusCode).toEqual(404);
            expect(res.reason).toEqual('user not found')
            expect(res.data).toEqual(null)
         })
    })

    describe("Create User", () => {
        test("should isSuccess = true statusCode = 200, and type data is Object ", async  () => { 
            let res = await userUC.createUser(mockUser.user)

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toHaveProperty("name");
            expect(res.data).toHaveProperty("dateOfBirth");
            expect(res.data).toHaveProperty("age");
            expect(res.data).toHaveProperty("whatsapp");
            expect(res.data).toHaveProperty("education");
            expect(res.data).toHaveProperty("cityId");
            expect(res.data).toHaveProperty("photoId");
         })
    })

    describe("Update User", () => {
        test("should isSuccess = true statusCode = 200, and type data is Object ", async  () => { 
            let res = await userUC.updateUser({nama: "customerUpdate"})

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toHaveProperty("name");
            expect(res.data).toHaveProperty("dateOfBirth");
            expect(res.data).toHaveProperty("age");
            expect(res.data).toHaveProperty("whatsapp");
            expect(res.data).toHaveProperty("education");
            expect(res.data).toHaveProperty("cityId");
            expect(res.data).toHaveProperty("photoId");
         })
    })
})