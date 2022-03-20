export default function PostID({ postID }) {
  return (
    <div>
      <p>{postID}</p>
    </div>
  )
}

export function getServerSideProps(context) {
  return {
    props: {
      postID: context.query.postID,
    },
  }
}
