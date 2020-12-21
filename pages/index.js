import React from "react";

const Index = ({ data }) => {
  return <div>{data.name}</div>;
};
export async function getStaticProps() {
  const res = await fetch(`${process.env.API_BASE_URL}en`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default Index;
