const resData = require("../helper/response");

module.exports = {
    getUserById: async (req, res, next) => {
        try {
            let { id } = req.params
            let user = await req.userUC.getUserById(id);
            if (!user.isSuccess) {
                return res.status(user.statusCode).json(resData.failed(user.reason));
            }
            res.status(user.statusCode).json(resData.success(user.data));
        } catch (e) {
            next(e);
        }
    },

    getAllUser: async (req, res, next) => {
        try {
            let user = await req.userUC.getAllUser();
            if (!user.isSuccess) {
                return res.status(user.statusCode).json(resData.failed(user.reason));
            }
            res.status(user.statusCode).json(resData.success(user.data));
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            let userData = {
                name: req.body.name,
                birth: new Date(req.body.birth),
                age: null,
                phone: req.body.phone,
                city: req.body.city,
                educationLevel: req.body.educationLevel,
                urlFotoId: null,
            };
            let user = await req.userUC.createUser(userData);
            if (!user.isSuccess) {
                return res
                    .status(user.statusCode)
                    .json(resData.failed(user.reason));
            }
            res.status(user.statusCode).json(resData.success(user.data));
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            let userData = {
                name: req.body.name,
                birth: new Date(req.body.birth),
                age: null,
                phone: req.body.phone,
                city: req.body.city,
                educationLevel: req.body.educationLevel,
            };
            let user = await req.userUC.updateUser(userData, id);
            if (!user.isSuccess) {
                return res
                    .status(user.statusCode)
                    .json(resData.failed(user.reason));
            }
            res.status(user.statusCode).json(resData.success());
        } catch (e) {
            next(e);
        }
    },
};
