import { Close } from '@mui/icons-material'

const NewPost = ({ setShowNewPost }) => {
  const handleCloseNewPost = (e) => {
    if (e.target.id === 'overlay') setShowNewPost((prev) => false)
  }

  return (
    <section
      id="overlay"
      className="absolute flex h-full w-full items-center justify-center bg-black bg-opacity-70"
      onClick={handleCloseNewPost}
    >
      <div className="flex h-1/2 w-11/12 items-center justify-center bg-white">
        <button className="bg-blue-btn text-white">Add photo</button>
      </div>

      <div
        className="absolute right-10 top-10 cursor-pointer text-white"
        onClick={() => setShowNewPost((prev) => false)}
      >
        <Close fontSize="large" />
      </div>
    </section>
  )
}

export default NewPost
