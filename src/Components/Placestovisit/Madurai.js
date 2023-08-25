import React from 'react'
import Madurai1 from '../../Images/madurai1.jpeg'
import Madurai2 from '../../Images/madurai2.jpeg'
import Madurai3 from '../../Images/madurai3.jpeg'
import Madurai4 from '../../Images/madurai4.jpeg'
import '../../Styles/Placestovisit/Madurai.css'
import { Row,Col } from 'react-bootstrap'

const Madurai = () => {
  return (
    <div className='conatiner'> 
      <h1 className='text-center tourist-places-primary-heading'>Madurai</h1>
      <h2 className='text-center tourist-places-sub-heading'>Tourist Places Visit</h2>

      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2} className="text-right">
          <img
            src={Madurai1}
            alt="Madurai1_Img"
            className="tourist-places-img"  
          />
        </Col>
        <Col md={10} className="text-right"> 
          <h1 className='tourist-places-secondary-heading'>Vaigai Dam, Overview</h1>   
          <p className='tourist-places-text'>
            Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Theni District in the South Indian State of Tamil Nadu. Andipatti lies about 70 kilometres from Madurai and travellers on their way to Periyar Wildlife Sanctuary often visit this massive and wondrous dam. Over the years, the site has become a favourite picnic spot as it gets beautifully illuminated in the evenings especially on weekends, and one can spend hours admiring the splendid view. The soft and warm sunrises by the reservoir are worth experiencing too.
          </p>
          <p className='tourist-places-text'>
            On one side of the dam is a beautiful garden known as Little Brindavan maintained by the management for the visitors. Little Brindavan has a variety of exotic flowers and plants and is a preferred getaway for nature lovers living nearby. The play area made especially for children is a relief for parents as they watch their little ones have fun in the unpolluted air..
          </p>
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Meghamalai, Overview</h1>   
          <p className='tourist-places-text'>
            Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the Western Ghats in the state of Tamil Nadu. At an elevation of 1500 meters, this place is a perfect getaway to beat the heat and enjoy some peaceful time relaxing amidst nature. Nestled between the evergreen forest this place is filled with the fresh aroma of cardamom, cinnamon and pepper. The lush green tea plantations will give you an opportunity to sip fresh piping tea and enjoy a lazy stroll amidst nature replete with flora and fauna.
          </p>
          <p className='tourist-places-text'>
            The Meghamalai region of the Western Ghats is a paradise unexplored even by the people of Tamil Nadu. The local Tamil language also refers to it as Paccha Kumachi, which means 'Green Peaks'. Located at approximately 1,500 metres above sea level, this small mountain village is surrounded by tea and cardamom plantations.
          </p>
                    
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Madurai2}
            alt="Madurai2_Img"
            className="tourist-places-madurai2-img"  
          />
          </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2}  className="text-right">
          <img
            src={Madurai3}
            alt="Madurai3_Img"
            className="tourist-places-img"  
          />
        </Col>
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Samanar Hills, Overview</h1>   
          <p className='tourist-places-text'>
            Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock complex which was originally home to Tamil Jain monks. The hill caves are a popular place of tourism and have elaborate carvings and drawings of the monks, on the interior walls. The spot also has a beautiful lotus temple located in the premises.
          </p>
          <p className='tourist-places-text'>
            There is no better place to escape the heat than this picturesque getaway surrounded by nature. Meghamalai is one of the best places to visit in Tamilnadu if you are looking for a quiet and peaceful weekend away from the city. During your vacation in this hill station, you can explore the following samanar hills tourist places. The city stands out for the active nightlife of the people, making it the safest place to travel.Madurai which is one of the oldest temple city has lot more to offer than just spiritual things.
          </p>   
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Thirumalai Nayakar, Overview</h1>   
          <p className='tourist-places-text'>
            Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak. The palace depicts the perfect blend of Dravidian and Rajput styles. After Independence, this palace was declared as a national monument and till date continues to be one of the spectacular monuments of Southern India. The magnificent palace is located in the vicinity of the very famous Meenakshi Amman Temple. Depicting the Saracenic style of architecture, it was constructed during the rule of Nayak Dynasty and is widely considered as the most illustrious monument built by the Madurai Nayak Dynasty.he alluring palace (Nayak Mahal palace) is in the main city of Madurai, which is located 2 km away from the Meenakshi Amman temple.The Thirumalai Nayak Mahal was built by the Thirumalai Nayak king during the 16th century. The building that is still observable was the resident of the King Nayak and the throne of the King Nayak has been kept for display.
          </p>     
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Madurai4}
            alt="Madurai4_Img"
            className="tourist-places-madurai4-img"  
          />
          </Col> 
      </Row>
    </div>
  )
}

export default Madurai