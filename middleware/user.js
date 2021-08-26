const user = require("../models/user");
module.exports = {
  createUser: async (req, res) => {
    const { email, username, firstName, lastName, password } = req.body;
    try {
      const u = await user.create({email, username, firstName, lastName,password});
      res.json(u);
      console.log("Request sent");
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  logUser: async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) throw new Error("We didn't find any user with this username : " + username);
        if (!(await user.comparePasswords(password)))
            throw Error("Wrong Password,Try again !!");
        res.status(201).json(user.insertToken());
    } catch (e) {
        res.json({ error: e.message });
    }
  },
  updateUser: async (req, res) => {
    const { firstName, lastName, password } = req.body,
      id = req.params.id;
    try {
      const u = await user.findById(id);
      u.firtName = firstName ? firstName : u.firstName;
      u.lastName = lastName ? lastName : u.lastName;
      u.password = password ? password : u.password;
      await u.save();
      res.send(u);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showUser: async (req, res) => {
    const id = req.params.id;
    try {
        const U = await user.findById(id).select({ passwords: 0 }); 
        res.json(U);
    } catch (e) {
        res.json({ error: e.message });
    }
  },
  userToAdmin: async (req, res) => {
    const id = req.params.id;
    try {
        const u = await user.findById(id);
        u.is_Admin = true;
        await u.save();
        res.send(u);
    } catch (e) {
        res.json({ error: e.message });
    }
  },
};
