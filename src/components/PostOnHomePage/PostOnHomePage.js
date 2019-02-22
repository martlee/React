import React from "react";

const Name = ({ name }) => <p>{name}</p>;
const Image = ({ image }) => <img src={image} alt="" />;
const Amount = ({ amount }) => <p>{amount}</p>;
const Featured = ({ featured }) => <p>{featured}</p>;
const Category = ({ category }) => <p>{category}</p>;

const Post = ({ name, image, amount, featured, category }) => {
  return (
    <div>
      <Name name={name} />
      <Image image={image} />
      <Amount amount={amount} />
      <Featured featured={featured} />
      <Category category={category} />
    </div>
  )
}

export default Post;