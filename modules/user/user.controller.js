const userHelper = require('./user.helper');
const userService = require('./user.service');

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const users = await userService.getAllUser();
            return res.status(200).send({
                success: true,
                message: 'All users get successfully',
                data: users,
            });
        } catch (err) {
            return res.statsu(500).send({
                success: false,
                message: 'An error occur',
            });
        }
    },
};
