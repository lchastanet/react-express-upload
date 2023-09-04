const { addOne, getAll, deleteOne } = require("../model/image.model.js")

const createOne = async (req, res) => {
  try {
    const result = await addOne({
      name: req.body.name,
      file_name: req.file.filename,
    })

    if (result) res.sendStatus(201)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

const browse = async (req, res) => {
  try {
    const result = await getAll()

    res.json(result)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

const removeOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    await deleteOne(id)

    res.sendStatus(204)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

module.exports = { createOne, browse, removeOne }
