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

        userUC = new UserUseCase(mockUserReturn)
    })
    describe("Get All User Test", () => {
        test("should isSuccess = true statusCode = 200, and type data is array", async  () => { 
            let res = await userUC.getAllUser()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(Array.isArray(res.data)).toBeTruthy();
            expect(res.data[0]).toHaveProperty("nama");
            expect(res.data[0]).toHaveProperty("asal_Kota");
            expect(res.data[0]).toHaveProperty("no_Whatsapp");
            expect(res.data[0]).toHaveProperty("pendidikan_terakhir");
            expect(res.data[0]).toHaveProperty("tanggal_lahir");
            expect(res.data[0]).toHaveProperty("url_foto");
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
            expect(res.data).toHaveProperty("nama");
            expect(res.data).toHaveProperty("asal_Kota");
            expect(res.data).toHaveProperty("no_Whatsapp");
            expect(res.data).toHaveProperty("pendidikan_terakhir");
            expect(res.data).toHaveProperty("tanggal_lahir");
            expect(res.data).toHaveProperty("url_foto");
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
            let res = await userUC.createUser()

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toHaveProperty("nama");
            expect(res.data).toHaveProperty("asal_Kota");
            expect(res.data).toHaveProperty("no_Whatsapp");
            expect(res.data).toHaveProperty("pendidikan_terakhir");
            expect(res.data).toHaveProperty("tanggal_lahir");
            expect(res.data).toHaveProperty("url_foto");
         })
    })

    describe("Update User", () => {
        test("should isSuccess = true statusCode = 200, and type data is Object ", async  () => { 
            let res = await userUC.updateUser({nama: "customerUpdate"})

            expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(res.data).toHaveProperty("nama");
            expect(res.data).toHaveProperty("asal_Kota");
            expect(res.data).toHaveProperty("no_Whatsapp");
            expect(res.data).toHaveProperty("pendidikan_terakhir");
            expect(res.data).toHaveProperty("tanggal_lahir");
            expect(res.data).toHaveProperty("url_foto");
         })
    })
})