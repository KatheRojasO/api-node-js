import React, {useState, useEffect} from 'react';
import { Button, Row } from 'react-bootstrap';
import { getUser } from '../../services/userService';
import { UserCard } from './UserCard';
import { NewUser } from './NewUser'


export const Users = () => {

  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const userListing = async () => {
    try{
      const { data }= await getUser()
      console.log(data)
      setUsers(data);
    }catch(error){
      console.log(error);
    }
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    userListing();
  }, []);

  return (
    <>
      <div className='container'>
      <Row xs={1} md={4} className="g-5 mt-2 mb-5">
        {users.map((users) => (
          <UserCard key={users._id} users={users}/>
        ))}
      </Row>
      
      {
        openModal ? <NewUser handleOpenModal={ handleOpenModal } statusListing = { userListing }/> :
          ( <Button variant="primary" type="submit" onClick={ handleOpenModal }>
              <i className="fa-solid fa-plus"></i>
            </Button>)
      }

    </div>
      
    </>
  )
}
