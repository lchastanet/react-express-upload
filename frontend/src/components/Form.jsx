import { useState } from "react"

function Form() {
  const [files, setFiles] = useState([])
  const [name, setName] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleForm} className="w-40">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            height: "12rem",
            backgroundColor: "lightgray",
            marginBottom: "1rem",
          }}
        ></div>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="inputName">Nom</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          name="inputName"
          type="text"
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="inputFile">Image</label>
        <br />
        <input
          onChange={(e) => setFiles(e.target.files)}
          className="form-control-file"
          name="inputFile"
          type="file"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  )
}

export default Form
