import React, { useState, useEffect } from 'react';
import { Row , Button} from 'react-bootstrap';
import { getInventory } from '../../../src/services/inventoryService';
import { DeviceCard } from './DeviceCard';
import { NewDevice } from './NewDevice';


export const Devices = () => {

  const [inventory, setInventory] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const inventoryListing = async () => {
    try{
      const { data }= await getInventory()
      console.log(data)
      setInventory(data);
    }catch(error){
      console.log(error);
    }
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    inventoryListing();
  }, []);

  return (
    <div className='container'>
      <Row xs={1} md={4} className="g-5 mt-2 mb-5">
        {inventory.map((inventory) => (
          <DeviceCard key={inventory._id} inventory={inventory}/>
        ))}
      </Row>
      
      {
        openModal ? <NewDevice handleOpenModal={ handleOpenModal } inventoryListing = { inventoryListing }/> :
          ( <Button variant="primary" type="submit" onClick={ handleOpenModal }>
              <i className="fa-solid fa-plus"></i>
            </Button>)
      }

    </div>
  )
}

