import React from 'react'
import Kumbakonam1 from '../../Images/kumbakonam1.jpeg'
import Kumbakonam2 from '../../Images/kumbakonam2.jpeg'
import Kumbakonam3 from '../../Images/kumbakonam3(2).jpeg'
import Kumbakonam4 from '../../Images/kumbakonam4.jpeg'
import '../../Styles/Placestovisit/Kumbakonam.css'
import { Row,Col } from 'react-bootstrap'

const Kumbakonam = () => {
  return (
    <div className='conatiner'> 
      <h1 className='text-center tourist-places-primary-heading'>Kumbakonam</h1>
      <h2 className='text-center tourist-places-sub-heading'>Tourist Places Visit</h2>

      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2} className="text-right">
          <img
            src={Kumbakonam1}
            alt="Kumbakonam1_Img"
            className="tourist-places-Kumbakonam1-img"  
          />
        </Col>
        <Col md={10} className="text-right"> 
          <h1 className='tourist-places-secondary-heading'>Sarangapani Temple, Overview</h1>   
          <p className='tourist-places-text'>
            Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is located in the town of Kumbakonam in the South-Indian state of Tamil Nadu. The beautiful temple is located on the banks of River Kaveri and is frequented by devotees of Lord Vishnu from all over the world. Along with being a sacred place of worship, the temple is a work of art in itself, with several tiers of intricately carved and colourfully decorated mythological sculptures and images. The grandeur of the temple is breathtaking. It has the tallest tower in the town. As one explores the Sarangapani Temple, they are bound to feel a certain vibe as hundreds of devotees transmit energies through their prayers and the experience is surreal. Sarangapani is the deity who is an avatar of Lord Vishnu. The temple is considered to be one of the 108 holy temples dedicated to Lord Vishnu in India. It is also regarded as one of the five sacred temples
          </p>
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Nageswaran Temple, Overview</h1>   
          <p className='tourist-places-text'>
            Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola architecture, it is an important Shaivite temple The temple is a marvelous example of the Chola's architectural prowess as the constructed the temple in a way so that it will only let in sunlight during the month of March-April.
          </p>
          <p className='tourist-places-text'>
            There are many inscriptions associated with the temple indicating contributions from Cholas, Thanjavur Nayaks and Thanjavur Maratha kingdom. The oldest parts of the present masonry structure were built during the Chola dynasty in the 9th century, while later expansions, including the towering gopuram gatehouses, are attributed to later periods, up to the Thanjavur Nayaks during the 16th century. The temple complex is one of the largest in the state and it houses three gateway towers known as gopurams.
          </p>
                    
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Kumbakonam2}
            alt="Kumbakonam2_Img"
            className="tourist-places-img"  
          />
          </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={2}  className="text-right">
          <img
            src={Kumbakonam3}
            alt="Kumbakonam3_Img"
            className="tourist-places-Kumbakonam3-img"  
          />
        </Col>
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Adi Kumbeshwara Temple, Overview</h1>   
          <p className='tourist-places-text'>
            Believed to have been constructed in the 7th century A.D by the Cholas, Adi Kumbeshwara Temple is one of the grandest and the oldest Shiva temple in the town. The temple has a magnificent architecture with the trademark style of the Cholas. It is dedicated to Lord Shiva and houses a unique Shiva lingam.
          </p>
          <p className='tourist-places-text'>
            The temple complex covers an area of 30,181 sq ft (2,803.9 m2) and houses four gateway towers known as gopurams. The tallest is the eastern tower, with 11 stories and a height of 128 feet (39 m) The temple has numerous shrines, with those of Kumbeswarar and Mangalambigai Amman being the most prominent. The temple complex houses many halls; the most notable is the sixteen-pillared hall built during the Vijayanagara period that has all the 27 stars and 12 zodiacs sculpted in a single stone.
          </p>   
        </Col> 
      </Row>
      <Row className="align-items-center tourist-places-marginbottom">
        <Col md={10}> 
          <h1 className='tourist-places-secondary-heading'>Airavatesvara Temple, Overview</h1>   
          <p className='tourist-places-text'>
            Believed to have been constructed in the 7th century A.D by the Cholas, Adi Kumbeshwara Temple is one of the grandest and the oldest Shiva temple in the town. The temple has a magnificent architecture with the trademark style of the Cholas. It is dedicated to Lord Shiva and houses a unique Shiva lingam.
          </p>
          <p className='tourist-places-text'>
            Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered Hindu temple and a UNESCO world heritage site. Part of the popular trio known as the Great Living Chola Temple along with Brihadeeswara Temple at Thanjavur and the Gangaikondacholisvaram Temple at Gangaikonda Cholapuram, Airavatesvara Temple was built by the Chola King Rajaraja Chola II in the 12th century CE. Presided by the Hindu God Lord Shiva, the temple is amongst the eighteen medieval era Hindu temples in the Kumbakonam area. The shrine displays the Vaishnavism and Shaktism legs of Hinduism, and the traditional Nayanars- the Bhakti saints of Shaivism. Constructed in the chariot structure and built in stone, the temple has smaller shrines dedicated to several Vedic and Puranic deities including Indra, Agni, Varuna, Vayu, Brahma, Surya, Vishnu, Saptamtrikas, Durga, Saraswati, Sri devi (Lakshmi), Ganga, Yamuna, Subrahmanya, Ganesha, Kama, Rati and others.
          </p>      
        </Col>
        <Col md={2}  className="text-right">
          <img
            src={Kumbakonam4}
            alt="Kumbakonam4_Img"
            className="tourist-places-img"  
          />
          </Col> 
      </Row>
    </div>
  )
}

export default Kumbakonam