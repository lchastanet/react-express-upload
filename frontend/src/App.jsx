import { useEffect, useState } from "react"
import Form from "./components/Form"
import axios from "axios"

function App() {
  const [filesDisplay, setFilesDisplay] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/image")
      .then((res) => setFilesDisplay(res.data))
  }, [])

  const handleDelete = (e) => {
    const id = e.target.getAttribute("data-id")

    axios.delete(`http://localhost:8000/image/${id}`).then(() => {
      setFilesDisplay(
        filesDisplay.filter((file) => file.id !== parseInt(id, 10))
      )
    })
  }

  return (
    <div className="d-flex flex-column mt-5 justify-content-center align-items-center">
      <Form setFilesDisplay={setFilesDisplay} />
      <div className="d-flex flex-row mt-5 justify-content-center">
        {filesDisplay.map((picture) => (
          <div key={picture.id} className="d-flex flex-column">
            <img
              src={picture.file_name}
              alt={picture.name}
              className="img-thumbnail m-2"
              style={{ height: "100px" }}
            />
            <button
              data-id={picture.id}
              onClick={handleDelete}
              className="btn btn-danger mx-3"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
