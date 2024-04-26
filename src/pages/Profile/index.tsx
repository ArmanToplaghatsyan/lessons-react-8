import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../../types/types';
import { MyContext } from '../../context/MyContext';
import { Card } from 'react-bootstrap';

export const Profile: React.FC = React.memo((): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [us, setUs] = useState<IUser>({} as IUser);
  const { users, posts } = useContext(MyContext);

  useEffect(() => {
    if (id) {
      const x = users.find((elm) => elm.id == +id);
      if (x) {
        setUs(x);
      } else {
        navigate('/');
      }
    }
  }, [id]);

  return (
    <div className="Profile border border-3">
      <h2> Profile </h2>
      <Card>
        <Card.Text>{us.name}</Card.Text>
        <Card.Text>{us.surname}</Card.Text>
        <Card.Body>{us.age}</Card.Body>
        <Card.Body>{us.email} </Card.Body>
      </Card>
      <hr />
      <div className='grid'>
        {
          posts.map((elm) => {
          return  <div key={elm.id}>
            <h4>{elm.title}</h4>
            <img src={elm.img}></img>
            <p>{elm.body}</p>
            <p>{elm.user_id}</p>
            </div>
          })
        }
      </div>
    </div>
  );
});
