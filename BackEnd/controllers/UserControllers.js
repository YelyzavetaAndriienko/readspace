const bcrypt = require('bcrypt');
const UserModer = require('../models/User')

const postUser = async(req, res) => {
    let user = getUser(req);
    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({
            ok: true,
            user: userDB
        });
    })
}

function getUser(req) {
    let {email, password} = req.body;

    return new UserModer({
        email,
        password: bcrypt.hashSync(password, 10),
    });
}

const deleteUser = async(req, res) => {
    console.log(req.params.email)
    const email = req.params.email

    const result = await UserModer.deleteOne({email});
    if (result.deletedCount === 1) {
        res.status(200).send(`User deleted with email: ${email}`)
    } else {
        res.status(404).send(`User not found with email: ${email}`)
    }
}

const getOneUser = async(req, res) => {
    let {email, password} = req.body;

    let user = await UserModer.findOne({email});

    if (! bcrypt.compareSync(password, user.password)){
        return res.status(400).json({
            ok: false,
            err: {
                message: "No such user in the system"
            }
        });
    }
    else
    {
        res.json({
            ok: true,
            user: user
        });
    }
    return user;
}

module.exports = {
    getOneUser, postUser, deleteUser
}