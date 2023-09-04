const fs = require("node:fs")
const path = require("node:path")
const { addOne, getAll, deleteOne } = require("../model/image.model.js")

const createOne = async (req, res) => {
  try {
    const result = await addOne({
      name: req.body.name,
      file_name: req.file.filename,
    })

    if (result)
      res.status(201).json({
        name: req.body.name,
        file_name: `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`,
      })
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

const browse = async (req, res) => {
  try {
    const result = await getAll()

    const resultWithURL = result.map((img) => ({
      ...img,
      file_name: `${req.protocol}://${req.get("host")}/uploads/${
        img.file_name
      }`,
    }))

    res.json(resultWithURL)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

const removeOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const { image, result } = await deleteOne(id)

    console.log(result)

    await fs.promises.unlink(
      path.join(__dirname, `../../public/uploads/${image[0].file_name}`)
    )

    res.sendStatus(204)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

module.exports = { createOne, browse, removeOne }
