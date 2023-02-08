import { useState } from "react"

const NewMessage = (props) => {
  const [form, setForm] = useState({ text: '' })
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddMessage(props.profileId, form)
    setForm({ text: '' })
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={form.text}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button type="submit">Add Comment</button>
    </form>
  )
}

export default NewMessage