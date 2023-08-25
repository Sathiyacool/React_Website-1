import React from 'react'
import '../../Styles/Placestovisit/Chennai.css'
import Chennai1 from '../../Images/chennai1.jpeg'
import Chennai2 from '../../Images/chennai2.jpeg'
import Chennai3 from '../../Images/chennai3.jpeg'
import Chennai4 from '../../Images/chennai4.jpeg'
import { Row,Col,Container } from 'react-bootstrap'

const Chennai = () => {
  return (
    <div className='conatiner'> 
      <h1 className='text-center tourist-places-primary-heading'>Chennai</h1>
      <h2 className='text-center tourist-places-sub-heading'>Tourist Places Visit</h2>

      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2} className="text-right">
          <img
            src={Chennai1}
            alt="Chennai1_Img"
            className="tourist-places-img"  
          />
        </Col>
        <Col md={10} className="text-right"> 
          <h1 className='tourist-places-secondary-heading'>Marina Beach, Overview</h1>   
          <p className='tourist-places-text'>
            Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal. The beach is stretched out to a distance of 13 kilometres making it the longest natural urban beach in the country, second largest in the world and also the most crowded beach in India with almost 30,000 visitors a day.
          </p>
          <p className='tourist-places-text'>
            With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.
          </p>
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>MGR Flim City, Overview</h1>   
          <p className='tourist-places-text'>
            Having been established in the year 1994, a considerably new structure, the MGR Film city is managed by the Government of Tamil Nadu in loving memory of MG Ramachandran who was not only a crowd-pleasing tamil actor but also a longtime CM of Tamil Nadu.
          </p>
          <p className='tourist-places-text'>
            With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.
          </p>
                    
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Chennai2}
            alt="Chennai2_Img"
            className="tourist-places-Chennai2-img"  
          />
          </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2}  className="text-right">
          <img
            src={Chennai3}
            alt="Chennai3_Img"
            className="tourist-places-Chennai3-img"  
          />
        </Col>
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Marundeeswarar Temple, Overview</h1>   
          <p className='tourist-places-text'>
            The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva in the form of Marundeeswar or Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian architecture, this temple is a must visit for anyone visiting Chennai or nearby cities.
          </p>
          <p className='tourist-places-text'>
            Glorified in the 7th-8th century by Nayanars (Saivite Saints), Tirugnana Sambandar, and Appar, the temple was expanded by the Chola Kingdom in the 11th century. Moreover, given the name, Marundeeswarar Temple has been a place of worship especially for people with diseases and those facing various problems with their health. The prasadam here is a mixture of sacred ash, water, and milk which is believed to cure any ailments. One must visit the temple to encounter the miraculous power it is said to have.
          </p>   
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Breezy Beach, Overview</h1>   
          <p className='tourist-places-text'>
            Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted, its a perfect getaway for anyone looking for a peaceful evening.
          </p>
          <p className='tourist-places-text'>
            This beach is not as popular and known as the Elliots beach, and is hence more quiet and peaceful. Evenings are very pleasant and breezy here, and in the recent years, lots of tourists have been attracted towards this beach for its beauty. Those looking for an amiable, refreshing and breezy place to chill out and have fun, the Breezy beach of Chennai is the place to be.
          </p>      
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Chennai4}
            alt="Chennai4_Img"
            className="tourist-places-Chennai4-img"  
          />
          </Col> 
      </Row>
    </div>
  )
}

export default Chennai