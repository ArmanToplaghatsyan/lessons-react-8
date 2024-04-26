import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import { MyContext } from '../../context/MyContext';
import { IPost } from '../../types/types';
import { useParams } from 'react-router-dom';

export const MyPost: React.FC = React.memo((): JSX.Element => {
  const {posts, deletePostById} = useContext(MyContext)
  const [arr, setArr] = useState<IPost[]>([])
  const {id} = useParams()

  useEffect(() => {
    if(id){
      setArr([...posts.filter((elm) => elm.user_id == +id)])
    }else{

    }
  }, [id])

  return (
    <div className="MyPost border border-3">
      <h2>My Post </h2>

      <hr />
      {
        posts.map((elm) => {
          return(<div key={elm.id}>
            <h4>{elm.title}</h4>
            <img src={elm.img}></img>
            <p>{elm.body}</p>
            <button className='btn btn-danger' onClick={() => deletePostById(elm.id)}>&times;</button>
          </div>)
        })
      }
    </div>
  );
});

//form
//user_id == params.id
//1 input, 1 select, 1 textarea