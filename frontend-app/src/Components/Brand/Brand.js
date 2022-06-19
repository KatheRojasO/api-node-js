import React, {useState, useEffect} from 'react';
import { Button, Row } from 'react-bootstrap';
import { getDeviceBrand } from '../../services/brandService';
import { BrandCard } from './BrandCard';
import { NewBrand } from './NewBrand';



export const Brand = () => {
  
  const [brand, setBrand] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const brandListing = async () => {
    try{
      const { data }= await getDeviceBrand()
      console.log(data)
      setBrand(data);
    }catch(error){
      console.log(error);
    }
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    brandListing();
  }, []);
  return (
    <>
      <div className='container'>
      <Row xs={1} md={4} className="g-5 mt-2 mb-5">
        {brand.map((brand) => (
          <BrandCard key={brand._id} brand={brand}/>
        ))}
      </Row>
      
      {
        openModal ? <NewBrand handleOpenModal={ handleOpenModal } statusListing = { brandListing }/> :
          ( <Button variant="primary" type="submit" onClick={ handleOpenModal }>
              <i className="fa-solid fa-plus"></i>
            </Button>)
      }

    </div>
    </>
  )
}
