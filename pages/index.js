import React from "react";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";



const Home = (props) => {
  const [count, setCount] = useState(0);

  const up = () => {
    setCount(count + 1);
  };

  const down = () => {
    setCount(count - 1);
  };

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    console.log(json)
    return { posts: json };
  };

  return (
    <div>
      <Header></Header>
      Home {count} {props.post.title}
      <Button action={up} text="+1"></Button>
      <Button action={down} text="-1" success></Button>
      <Button action={getPosts} text="Get Posts"></Button>
      <Footer></Footer>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await res.json();
  return { post: json };
};

export default Home;
