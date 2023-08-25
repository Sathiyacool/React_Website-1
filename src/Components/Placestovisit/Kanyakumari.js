import React from 'react'
import Kanyakumari1 from '../../Images/kanyakumari1.jpeg'
import Kanyakumari2 from '../../Images/kanyakumari2.jpeg'
import Kanyakumari3 from '../../Images/kanyakumari3.jpeg'
import Kanyakumari4 from '../../Images/kanyakumari4.jpeg'
import '../../Styles/Placestovisit/Kanyakumari.css'
import { Row,Col } from 'react-bootstrap'

const Kanyakumari = () => {
  return (
    <div className='conatiner'> 
      <h1 className='text-center tourist-places-primary-heading'>Kanyakumari</h1>
      <h2 className='text-center tourist-places-sub-heading'>Tourist Places Visit</h2>

      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2} className="text-right">
          <img
            src={Kanyakumari1}
            alt="Kanyakumari1_Img"
            className="tourist-places-Kanyakumari1-img"  
          />
        </Col>
        <Col md={10} className="text-right"> 
          <h1 className='tourist-places-secondary-heading'>Kanyakumari Beach, Overview</h1>   
          <p className='tourist-places-text'>
            Located in the southernmost part of India, Kanyakumari beach with its beautiful hue-changing beaches, the confluence of three water bodies: Bay of Bengal, Indian Ocean, and the Arabian Sea. Miraculously, here you can see that the water of three seas does not mix, you can distinguish between the turquoise blue, deep blue, and sea green waters of the three seas, though the colors keep changing with the season and the day's weather.
          </p>
          <p className='tourist-places-text'>
            The beach is not conducive to swim or surf as the water as the sea is rough and the beach is rocky.To enjoy the best view, you can visit the Triveni Sangam point and climb up the famous lighthouse watchtower to entirely take in its beauty. 
          </p>
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Vivekananda Memorial, Overview</h1>   
          <p className='tourist-places-text'>
            The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. It has the picturesque Indian Ocean in its backdrop. It is situated on one of the two adjacent rocks projecting out of the Lakshadweep Sea and comprises of the 'Shripada Mandapam' and the 'Vivekananda Mandapam'. Vivekananda Rock Memorial is located at about 500 meters east of the mainland of Vavathurai in Kanyakumari and can be accessed by regular ferries.
          </p>
          <p className='tourist-places-text'>
            This statue was built in the year 1970 on the island situated in Vavathurai, built on the site where Vivekananda attained enlightenment. The Shripada Mandapam has a study hall and a museum, where you can explore Vivekananda's life and work in depth.
          </p>
                    
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Kanyakumari2}
            alt="Kanyakumari2_Img"
            className="tourist-places-Kanyakumari2-img"  
          />
          </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2}  className="text-right">
          <img
            src={Kanyakumari3}
            alt="Kanyakumari3_Img"
            className="tourist-places-img"  
          />
        </Col>
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Thiruvalluvar Status, Overview</h1>   
          <p className='tourist-places-text'>
            Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself on a small island near Kanyakumari. Thiruvalluvar was the author of a legendary work in the world of Literature, Tirukkural, the classic Tamil text. In his devotion, the work for the statue started in 1990 and continued till 1999, during the year in which the figure finally got completed.
          </p>
          <p className='tourist-places-text'>
            This monument stands tall at a mighty height of 133 feet and is perched upon a 38-foot pedestal. The pedestal's height represents the 38 chapters of virtue in Thirukkural. Full of symbolism and cultural significance, this destination is awe-inspiring, and a must-visit. V. Ganapati Sthapati sculpted the statue, and it was unveiled on January 1, 2000. Surrounded by the waters, the statue is settled at an ideal location, and a short ferry ride can quickly help you reach the masterpiece.
          </p>   
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Thirparappu Falls, Overview</h1>   
          <p className='tourist-places-text'>
            Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu Falls make up for an enchanting sight. This waterfall is a manmade one and falls from a height of 50 feet. The water collects in a quaint pool below which is an ideal place to frolick around, especially for children. The falls are surrounded by thick green foliage and indigenous fauna, which make it a nature lover's paradise.
          </p>
          <p className='tourist-places-text'>
           These falls are a unique combination of streams that flow together to form a magnificent waterfall. The containment below is no less than a top tier waterpark and is perfectly safe too. The entrance of this destination has a small temple dedicated to Lord Shiva and is highly revered by the locals.
          </p>      
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Kanyakumari4}
            alt="Kanyakumari4_Img"
            className="tourist-places-Kanyakumari4-img"  
          />
          </Col> 
      </Row>
    </div>
  )
}

export default Kanyakumari