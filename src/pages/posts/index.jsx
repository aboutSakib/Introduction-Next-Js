const Posts = ({ posts }) => {
  return (
    <div>
      <h1 className="main">All Data</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};
export async function getStaticProps() {
  const res = await fetch(`http://localhost:5000/posts`);
  const posts = await res.json();
  console.log(posts, "posts");
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Posts;
