import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

import { getUsers } from "../actions/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  // Load Users
  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setUsers(data);
    })();
  }, []);

  const up = () => {
    setCount(count + 1);
  };

  const down = () => {
    setCount(count - 1);
  };

  // const getUsers = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const json = await res.json();
  //   setUsers(json);
  //   console.log(users);
  //   return { posts: json };
  // };

  return (
    <div>
      <Header></Header>
      Home {count} {props.post.title} <FontAwesomeIcon icon={faUser} /><FontAwesomeIcon icon={['fab', 'apple']} />
      <Button action={up} text="+1"></Button>
      <Button action={down} text="-1" success></Button>
      {/* <Button action={getPosts} text="Get Users"></Button> */}
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
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
