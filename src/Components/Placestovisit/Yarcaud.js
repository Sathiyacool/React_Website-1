import React from 'react'
import Yarcaud1 from '../../Images/yercaud1.jpeg'
import Yarcaud2 from '../../Images/yercaud2.jpeg'
import Yarcaud3 from '../../Images/yercaud3.jpeg'
import Yarcaud4 from '../../Images/yercaud4.jpeg'
import '../../Styles/Placestovisit/Yarcaud.css'
import { Row,Col } from 'react-bootstrap'

const Yarcaud = () => {
  return (
    <div className='conatiner'> 
      <h1 className='text-center tourist-places-primary-heading'>Yarcaud</h1>
      <h2 className='text-center tourist-places-sub-heading'>Tourist Places Visit</h2>

      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2} className="text-right">
          <img
            src={Yarcaud1}
            alt="Yarcaud1_Img"
            className="tourist-places-Yarcaud1-img"  
          />
        </Col>
        <Col md={10} className="text-right"> 
          <h1 className='tourist-places-secondary-heading'>Pagoda Point, Overview</h1>   
          <p className='tourist-places-text'>
            Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated to a panoramic view of the entire town of Salem as well as the neighbouring village of Kakambadi. The twists and turns of the 21 hairpin bends of Yercaud can be seen from this spot as they envelop themselves around the hills. The mysterious piles of stones arranged in the form of a pyramid resembling a Pagoda give the location its unique name. These stones are believed to be placed here by local tribes.
          </p>
          <p className='tourist-places-text'>
            Between the Pagodas here lies a temple devoted to Lord Rama. One can indulge in the amazing natural beauty of the spot and the scenery of the Eastern Ghats, with the greenery growing within the rugged terrains of the hills, entwined with sights of the craggy cliffs.
          </p>
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Botanical Garden, Overview</h1>   
          <p className='tourist-places-text'>
            Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various species of plants must make it a point to visit the orchid garden and the green house in the Botanical garden.
          </p>
          <p className='tourist-places-text'>
            Yercaud is the place where the famous Kurinji flower blooms in plenty and the specialty of this flower is that it will bloom only once in twelve years. The National Orchidarium which is located 2 km from the Emerald Lake has a wide variety of orchids which includes 30 orchid species that are exclusively found here. Many endangered species of orchids are persevered in this orchidarium which is ranked the third largest of all the orchidariums in India.
          </p>
                    
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Yarcaud2}
            alt="Yarcaud2_Img"
            className="tourist-places-Yarcaud2-img"  
          />
          </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2}  className="text-right">
          <img
            src={Yarcaud3}
            alt="Yarcaud3_Img"
            className="tourist-places-Yarcaud3-img"  
          />
        </Col>
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Emerald Lake, Overview</h1>   
          <p className='tourist-places-text'>
            The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake. Surrounded by some wonderful cloud-peaked hills and a well persevered garden on its banks, this lake is a feast for the eyes.
          </p>
          <p className='tourist-places-text'>
            There is a floating fountain in the lake and boating facilities are available at a reasonable rate. Self-driven as well as rowing boats can be chosen according to your comfort and intersts. A nominal amount is collected as caution fee before issuing the boats and austere safety measures are followed by the authorities.
          </p>   
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Lady,s Seat, Overview</h1>   
          <p className='tourist-places-text'>
            Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam and Salem town. Besides, the place also houses a viewing tower, which is equipped with a telescope to enjoy the beautiful view. This viewing tower is open for visitors only during the daytime. Lady's Seat, Gent's Seat and Children's Seat, located to the south-west of Shevaroy Hill, are the names given to a group of rocks located on the Yercaud Hills.
          </p>
          <p className='tourist-places-text'>
            It is believed that an English lady used to spend her evenings at this place watching the beautiful view of this rock. For those interested in a closer view, there's a mounted telescope. Swing it to your extreme right to see the Mettur Dam on the Cauvery River. Great shots of the river can be had from this spot in the late afternoon when the sun's rays are reflected in its waters.
          </p>      
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Yarcaud4}
            alt="Yarcaud4_Img"
            className="tourist-places-Yarcaud4-img"  
          />
          </Col> 
      </Row>
    </div>
  )
}

export default Yarcaud