import React, { useState, useEffect } from 'react';
import { Row , Button} from 'react-bootstrap';
import { getDeviceStatus } from '../../../src/services/deviceStatusService';
import { StatusCard } from './StatusCard';
import { NewStatus } from './NewStatus';


export const Status = () => {

  const [status, setStatus] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const statusListing = async () => {
    try{
      const { data }= await getDeviceStatus()
      console.log(data)
      setStatus(data);
    }catch(error){
      console.log(error);
    }
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    statusListing();
  }, []);

  return (
    <div className='container'>
      <Row xs={1} md={4} className="g-5 mt-2 mb-5">
        {status.map((status) => (
          <StatusCard key={status._id} status={status}/>
        ))}
      </Row>
      
      {
        openModal ? <NewStatus handleOpenModal={ handleOpenModal } statusListing = { statusListing }/> :
          ( <Button variant="primary" type="submit" onClick={ handleOpenModal }>
              <i className="fa-solid fa-plus"></i>
            </Button>)
      }

    </div>
  )
}


