const bcrypt = require('bcrypt');
const UserModel = require('../models/User')
const {GenresModel, BookModel} = require('../models/Book')
const mongoose = require("mongoose");

const postUser = async(req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    let user = getUser(req);
    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            user: userDB
        });
    })
}

const getOneUser = async(req, res) => {
    let {email, password} = req.body;

    let user = await UserModel.findOne({email});

    if (user == null || ! bcrypt.compareSync(password, user.password)){
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

function getUser(req) {
    let {email, password} = req.body;

    return new UserModel({
        email,
        password: bcrypt.hashSync(password, 10),
    });
}

const deleteUser = async(req, res) => {
    const email = req.params.email

    const result = await UserModel.deleteOne({email});
    if (result.deletedCount === 1) {
        res.status(200).send(`User deleted with email: ${email}`)
    } else {
        res.status(404).send(`User not found with email: ${email}`)
    }
}


//user and books

//в боді передаємо айді книги book_id! придумати як передавати саме її
const addBookForUser = async (req, res) => {
    try {
        //console.log(req.params.id)
        //console.log(req.body.book_id)

        let user = await UserModel.findById(req.params.id)

        if (user) {
            const user_book = user.books || []

            if (!user_book.includes(req.body.book_id)) {
                user_book.push(req.body.book_id)

                await UserModel.updateOne({"_id": req.params.id}, {$set: {"books": user_book}})
                let user = await UserModel.findById(req.params.id)
                return res.status(200).json({
                    ok: true,
                    user : user,
                    user_book: user_book
                })
            }else {
                return res.status(300).json("User has this book")
            }

        }
    }
    catch (err) {
            return res.status(400).json({
                ok: false,
                err: err
            })
    }
}

const getUserBooks = async (req, res) => {
    try {

        let user = await UserModel.findById(req.params.id)

        if (user) {
            const user_book = user.books || []

            const allUserBooks = await BookModel.aggregate([
                {
                    $lookup: {
                        from: 'Authors_ua',
                        localField: 'authors',
                        foreignField: '_id',
                        as: 'full_authors'
                    }
                },
                {
                    $lookup: {
                        from: 'Genres_ua',
                        localField: 'genres',
                        foreignField: '_id',
                        as: 'full_genres'
                    }
                },
                {
                    $match: {
                        _id: {
                            $in: user_book
                        }
                    }
                }
            ])

            const result = []
            for await (const book of allUserBooks) {
                result.push(book)
            }

            return res.status(200).json({
                ok: true,
                id : req.params.id,
                books: result
            })
        }
    }
    catch (err) {
        return res.status(400).json({
            ok: false,
            err: err
        })
    }
}

//айди для видалення книги передаємо в боді delete_book_id
const deleteUserBook = async (req, res) => {
    try {

        let user = await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { 'books': req.body.delete_book_id } }
        );

        console.log(user)

            return res.status(200).json({
                ok: true,
                id : req.params.id,
                books: user.books
            })

    }
    catch (err) {
        return res.status(400).json({
            ok: false,
            err: err
        })
    }
}

//передаємо назви жанрів через боді, повинно передавати всі жанри, навіть які вже були у користувача
const addGenre = async (req, res) => {
    try {
        let genres = await getGenres(req.body.genres);
        console.log(genres)

        const user = await UserModel.findByIdAndUpdate(req.params.id, {genres:genres}, {useFindAndModify : false},function (err, data) {
            if (err) {
                console.log(err);
            }
        })

        return res.json(user)
    }
    catch (err) {
        return res.status(400).json({
            ok: false,
            err: err
        })
    }
}

async function getGenres(req) {
    let res = []

    for (const i of req) {
        const genres = await GenresModel.aggregate([{$match: {"genre_name": i}}])
        for await (const e of genres) {
            res.push(mongoose.Types.ObjectId(e._id))
        }
    }

    return res
}

//return id and genre name
const getUserGenres = async (req, res) => {
    try {
        console.log(req.params.id)
        const user = await UserModel.findById(req.params.id)

        if (user) {
            let genres = user.genres || []
            let genresName = []

            for (const g of genres){
                console.log(g)
                let gr = await GenresModel.findById(g)
                console.log(gr)
                if (gr){
                    genresName.push(gr)
                }
            }

            return res.status(200).json ({
                genres : genresName
            })
        }
    }
    catch (err) {
        return res.status(400).json({
            ok: false,
            err: err
        })
    }
}

module.exports = {
    getOneUser, postUser, deleteUser, addGenre, getUserGenres, addBookForUser, getUserBooks, deleteUserBook
}