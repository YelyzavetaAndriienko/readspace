const mongoose = require("mongoose");
const {BookModel, AuthorModel, GenresModel} = require("../models/Book");
const UserModel = require('../models/User')

const getBooks = async (req, res) => {
    try {
        const books = await BookModel.aggregate([
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
            }
        ])

       return res.json({ok: true,
                  books:books,
                  status: "success"})
    }
    catch (err) {
        res.status(400).json({
            ok: false,
            err : err.message
        })
    }

};

const getAllGenres = async (req,res) => {
    try {
         GenresModel.find().then( data => {
             return res.json({data})
         }
        )
    }
    catch (err) {
        res.status(400).json({
            ok: false,
            err : err.message
        })
    }
}

const getRandomBooksWithoutParam = async (req, res) => {

    try {
        const myRandomBook = await BookModel.aggregate([
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
            {$sample: {size: 1}}

        ])

        const forRes = []
        for await (const book of myRandomBook){
            forRes.push(book)
        }
        console.log(forRes)
        res.json({ ok: true,
                   book:forRes[0],
                   status:"success"})

    } catch (err) {
        res.status(400).json({ok: false,
                              error : err.message})
    }
};

//рекомендувати тільки ті книги, які не збережені у юзера?
const getRandomBooksForUser = async (req, res) => {

    try {
        const id = req.params.id
        const user = await UserModel.findById(id)
       if (user) {
           let myRandomBook = null
           if (user.genres.length>=1) {
                myRandomBook = await BookModel.aggregate([
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
                           genres: {
                               $in: user.genres
                           },
                           _id : {
                               $nin: user.books
                           }
                       }
                   },
                   {$sample: {size: 1}}

               ])
           }
           else {
                myRandomBook = await BookModel.aggregate([
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
                   {$sample: {size: 1}}

               ])
           }

           const forRes = []
           for await (const book of myRandomBook) {
               forRes.push(book)
           }

           res.json({
               ok: true,
               book: forRes[0],
               status: "success"
           })
       }
       else {
           res.status(400).json({ok: false,
               error : "No user"})
       }

    } catch (err) {
        res.status(400).json({ok: false,
            error : err.message})
    }
};

const getBookById = async (req,res) => {

    try {
        const book = await BookModel.aggregate([
            {
                $match : {"_id" : mongoose.Types.ObjectId(req.params.id)}
            }, {
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
            }
        ])
        res.json({ ok: true,
            book:book,
            status:"success"})
    }
    catch (err) {
        return res.status(400).json({
            ok: false,
            err: err
        })
    }
}


//check this method
const postBook = async  (req,res) => {

    let post = new BookModel ({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        authors: await getAuthors(req.body.authors),
        genres: await getGenres(req.body.genres)
    })

        //res.json(post)


     await post.save((err, post) => {
         if (err) {
             return res.status(400).json({
                 ok: false,
                 err: err
             });
         }
         res.json({
             ok: true,
             user: post
         });
     })

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

 async function getAuthors(req) {

    let res = []

    for (const i of req) {
        const author = await AuthorModel.aggregate([{ $match : {"author_name" : i}}])

        for await (const e of author) {
            res.push(mongoose.Types.ObjectId(e._id))
        }

    }
    return res
}

module.exports = {
    getBooks, getRandomBooksWithoutParam, getRandomBooksForUser, getBookById, postBook, getAllGenres
};