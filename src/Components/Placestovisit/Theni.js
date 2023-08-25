import React from 'react'
import Theni1 from '../../Images/theni1.jpeg'
import Theni2 from '../../Images/theni2.jpeg'
import Theni3 from '../../Images/theni3.jpeg'
import Theni4 from '../../Images/theni4.jpeg'
import '../../Styles/Placestovisit/Theni.css'
import { Row,Col } from 'react-bootstrap'

const Theni = () => {
  return (
    <div className='conatiner'> 
      <h1 className='text-center tourist-places-primary-heading'>Theni</h1>
      <h2 className='text-center tourist-places-sub-heading'>Tourist Places Visit</h2>

      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2} className="text-right">
          <img
            src={Theni1}
            alt="Theni1_Img"
            className="tourist-places-Theni1-img"  
          />
        </Col>
        <Col md={10} className="text-right"> 
          <h1 className='tourist-places-secondary-heading'>Chinna Suruli Falls, Overview</h1>   
          <p className='tourist-places-text'>
            Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni. It cascades all the way down from Meghamalai to form a pool of cool, sparkling water at the foothills of the mountain. Located around 54 kilometres away from the main centre, near the Kombaithozhu village, Chinna Suruli Falls is a lovely and serene destination to visit in and around Theni. It can be included in your itinerary of local sightseeing if you are visiting Theni and its nearby attractions
          </p>
          <p className='tourist-places-text'>
            Chinna Suruli Falls is one of the beautiful waterfalls near Madurai and the top visiting places in Megamalai range. It is also known as Cloudland Falls as it originates in the Megamalai Hills. In the local language, Chinna means small or younger, so in a sense, it is called the younger Suruli.
          </p>
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Kumbakkarai Falls, Overview</h1>   
          <p className='tourist-places-text'>
            Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that is situated at the foothills of the Kodaikanal hills. The water cascades down in two layers- at the first stage, the water collects at the rock boulders and recesses. And in the second stage, it falls down the layer of rocks. These recesses are named after wild animals like tiger, snake, elephant, cheetah etc.
          </p>
          <p className='tourist-places-text'>
            Besides boasting of immense scenic beauty and the melodious tinkering of the gushing waters, the place also offers utter peace and tranquility. Also unlike most other waterfalls, Kumbakkarai Falls also offer shallow waters where tourists are welcomed to swim or to take a dip. The popular tourist spot is the most crowded during the rainy season when the water level is high and the neighboring areas glows with greenery.
          </p>
                    
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Theni2}
            alt="Theni2_Img"
            className="tourist-places-Theni2-img"  
          />
          </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2}  className="text-right">
          <img
            src={Theni3}
            alt="Theni3_Img"
            className="tourist-places-Theni3-img"  
          />
        </Col>
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Meghamalai, Overview</h1>   
          <p className='tourist-places-text'>
            Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise that you read about in books, complete with exhilarating trek routes, breathtaking scenes and an excellent opportunity to take a break from your everyday life in the lap of nature.
          </p>
          <p className='tourist-places-text'>
            The Highwavys Mountain, locally called the Meghamalai, is an undulating terrain of peaks belonging to the Varushanad Range of Western Ghats, in Theni district of Tamil Nadu. Located at an elevation of 1,500 metres above the sea level, Meghamalai is covered in the trademark green of Sahyadri, thus earning the name 'Pacha Kumachi' in Tamil, meaning 'Green Peaks'. Green peaks of Meghamalai Source Up until recently, the Meghamalai Hills were restricted to private estates of tea and coffee plantations.
          </p>   
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Suruli Falls, Overview</h1>   
          <p className='tourist-places-text'>
            Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of Theni as well. It is a perfect destination to get up close and personal with the nature and cool off in its pristine waters.
          </p>
          <p className='tourist-places-text'>
            At a distance of 123 kms from Madurai, 22 Kms from Thekkady (via Gudalur & Karuna Muthevan Patti), 10 Kms from Kambam (via Suruli Patti) & 548 Kms from Chennai, Suruli Falls are situated amidst rich flora fauna and serve as a perfect picnic spot. The falls serve as the venue of Summer Festival, organized every year by the Tamil Nadu Tourism Department. The Kailasanathar Temple Cave is also an added attraction of the place. There are also other 18 caves in and around the Suruli Falls. The Kailasanatha temple and Suruli Velappar temple are also nearby the falls. The falls are reachable by road from Kambam and Gudalur towns.
          </p>      
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Theni4}
            alt="Theni4_Img"
            className="tourist-places-Theni4-img"  
          />
          </Col> 
      </Row>
    </div>
  )
}

export default Theni