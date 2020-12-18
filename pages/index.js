import React from "react";

const Index = ({ posts }) => {
  return <div>{posts.name}</div>;
};
export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_API_URL}`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
export default Index;
