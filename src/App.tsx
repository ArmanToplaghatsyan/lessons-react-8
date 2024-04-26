import React, { useState } from 'react';
import './App.css';
import { MyRouter } from './component/MyRouter';
import { IPost, IUser } from './types/types';
import { MyContext } from './context/MyContext';

function App() {
  const img = [
    '/img/1.jfif',
    '/img/2.webp',
    '/img/3.jfif',
    '/img/4.jpg',
    '/img/5.avif',
  ];

  const [users, setUser] = useState<IUser[]>([
    {
      id: 1,
      name: 'Ani',
      surname: 'Annyan',
      age: 16,
      email: 'ani1A@gmail.com',
      password: "1111",
    },
    {
      id: 2,
      name: 'Gor',
      surname: 'Azatyan',
      age: 18,
      email: 'gor2A@gmail.com',
      password: "2222",
    },
    {
      id: 3,
      name: 'Lilya',
      surname: 'Ayunc',
      age: 17,
      email: 'lilya3A@gmail.com',
      password: "3333",
    },
    {
      id: 4,
      name: 'Vardan',
      surname: 'Ohanyan',
      age: 19,
      email: 'vardan4O@gmail.com',
      password: "4444",
    },
    {
      id: 5,
      name: 'Gohar',
      surname: 'Margaryan',
      age: 20,
      email: 'gohar5M@gmail.com',
      password: "5555",
    },
  ]);

  const [posts, setPost] = useState<IPost[]>([
    {
      id: 1,
      title: 'Post first',
      body: 'It`s first body',
      img: '/img/1.jfif',
      user_id: 1,
    },
    {
      id: 2,
      title: 'Post second',
      body: 'It`s second body',
      img: '/img/3.jfif',
      user_id: 2,
    },
    {
      id: 3,
      title: 'Post third',
      body: 'It`s third body',
      img: '/img/3.jfif',
      user_id: 3,
    },
    {
      id: 4,
      title: 'Post forth',
      body: 'It`s forth body',
      img: '/img/4.jpg',
      user_id: 4,
    },
    {
      id: 5,
      title: 'Post fifth',
      body: 'It`s fifth body',
      img: '/img/2.webp',
      user_id: 5,
    },
    {
      id: 6,
      title: 'Post sixth',
      body: 'It`s sixth body',
      img: '/img/5.avif',
      user_id: 4,
    },
    {
      id: 7,
      title: 'Post sevanth',
      body: 'It`s sevanth body',
      img: '/img/3.jfif',
      user_id: 1,
    },
    {
      id: 8,
      title: 'Post eith',
      body: 'It`s eith body',
      img: '/img/2.webp',
      user_id: 2,
    },
    {
      id: 9,
      title: 'Post ninth',
      body: 'It`s last one body',
      img: '/img/4.jpg',
      user_id: 3,
    },
    {
      id: 10,
      title: 'Post last',
      body: 'It`s last body',
      img: '/img/1.jfif',
      user_id: 5,
    },
  ]);

  const createPost = (data: IPost): void => {
    setPost([...posts, data]);
  };

  const createUser = (data: IUser): void => {
    setUser([...users, data]);
  };

  const deleteUserById = (id: number): void => {
    setUser([...users.filter((elm) => elm.id != id)]);
    setPost([...posts.filter((elm) => elm.user_id != id)]);
  };

  const deletePostById = (id: number): void => {
    setPost([...posts.filter((elm) => elm.id != id)]);
  };

  return (
    <MyContext.Provider
      value={{
        users,
        posts,
        deletePostById,
        deleteUserById,
        createPost,
        createUser,
        img,
      }}
    >
      {' '}
      <div>
        <MyRouter />
      </div>
    </MyContext.Provider>
  );
}

export default App;
