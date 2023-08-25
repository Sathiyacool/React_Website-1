import React from 'react'
import Rameswaram1 from '../../Images/rameshwarem1.jpeg'
import Rameswaram2 from '../../Images/rameshwarem2.jpeg'
import Rameswaram4 from '../../Images/rameshwaram3.jpeg'
import Rameswaram3 from '../../Images/rameshwarem4.jpeg'
import '../../Styles/Placestovisit/Rameswaram.css'
import { Row,Col } from 'react-bootstrap'

const Rameswaram = () => {
  return (
    <div className='conatiner'> 
      <h1 className='text-center tourist-places-primary-heading'>Rameswaram</h1>
      <h2 className='text-center tourist-places-sub-heading'>Tourist Places Visit</h2>

      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2} className="text-right">
          <img
            src={Rameswaram1}
            alt="Rameswaram1_Img"
            className="tourist-places-img"  
          />
        </Col>
        <Col md={10} className="text-right"> 
          <h1 className='tourist-places-secondary-heading'>Dhanushkodi Temple, Overview</h1>   
          <p className='tourist-places-text'>
            Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a natural calamity, the cyclone, it got completely washed away.
          </p>
          <p className='tourist-places-text'>
            It holds the advantage of being on an island and is exquisitely covered by waters on all the four sides of it. It is sandwiched between the Bay of Bengal and Indian Ocean. When viewed from a birds eye, The seas are in the shape of bow and arrow. The arrow head is considered to be a sacred place for worship by the Hindus and people from far and wide come there to offer sacred prayers to the deity. Lord Rama has his pious foot marks in this temple and the whole story of Ramayana revolves around this temple island. It is a wonderful pilgrim place for the followers of Lord Rama. The place is an approximate of 18 kms from Rameshwaram and one can easily travel by road.
          </p>
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Lakshmana Temple, Overview</h1>   
          <p className='tourist-places-text'>
            Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order to offer sacred prayers to lord Lakshmana, this temple has been constructed in Rameshwaram itself which indicates that Lord Lakshman had been given a valuable place in the dynasty of Lord Rama.
          </p>
          <p className='tourist-places-text'>
            Several wonderful sculptures of Lord Lakshmana have been carved out from marble and the temple has the statues of lord Rama and Goddess Sita too which signifies the spirit of unitedness that exisited between them.
          </p>
                    
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Rameswaram2}
            alt="Rameswaram2_Img"
            className="tourist-places-rameswaram2-img"  
          />
          </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2}  className="text-right">
          <img
            src={Rameswaram3}
            alt="Rameswaram3_Img"
            className="tourist-places-img"  
          />
        </Col>
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Villoondi Tirtham, Overview</h1>   
          <p className='tourist-places-text'>
            Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists. It also has a spring inside the sea which makes the attraction a unique one and is often associated with the Legend of Ramayana. It is believed that Lord Rama shot an arrow to create this spring to help his people with drinking water.
          </p>
          <p className='tourist-places-text'>
            Villoondi Theertham is situated about 6 km from the Rameswaram main bus stand. Besides its arresting views and silent tides, the place is also known for its pure water spring inside the sea. A few metres from the shore, this pure water well beside the sea is a marvel. Devotees connect its existence to a mythological legend from the epic Ramayana. After rescuing Goddess Sita and bringing her back to Rameswaram from Sri Lanka, Lord Rama performed rituals by installing a Shiva linga on the spot.
          </p>   
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Rameshwaram Temple, Overview</h1>   
          <p className='tourist-places-text'>
            A perfect blend of mind-boggling architecture and spiritual significance, Rameshwaram Temple, also known as Ramanathaswamy Temple of Tamil Nadu is dedicated to Lord Shiva. It also boasts of being one of the 12 Jyotirlinga temples of India. Not just spiritually, Rameshwaram Temple is appealing architecturally also. With the longest corridor of the world and immaculate carvings on pillars, it is definitely a treat for your eyes.
          </p>
          <p className='tourist-places-text'>
            The lingam in the Rameshwaram Temple was installed by Lord Rama but, the construction was led by several rulers over the centuries. Inside the temple, there are two lingams- Ramalingam and Shivalingam. The latter is still worshipped first to preserve the words of Lord Rama. Besides daily Abhishkams and poojas performed with great zeal, there are absorbing festivals worth witnessing.
          </p>      
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Rameswaram4}
            alt="Rameswaram4_Img"
            className="tourist-places-rameswaram4-img"  
          />
          </Col> 
      </Row>
    </div>
  )
}

export default Rameswaram