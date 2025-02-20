const Users = require('../models/userModel');

const authAdmin = async (req, res, next) => {
    try {
        console.log("Checking admin access for user:", req.user); // Debugging

        const user = await Users.findById(req.user.id);

        if (!user) return res.status(404).json({ msg: "User not found" });

        if (user.role !== 1) // Assuming '1' is admin
            return res.status(403).json({ msg: "Admin Resources Access Denied" });

        next();
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = authAdmin;
