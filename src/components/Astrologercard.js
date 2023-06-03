import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

function Astrologercard() {
    return (
        <div className="astrologer-card">
            <div className="astrologer-image">
                <img src="https://www.forbesindia.com/media/images/2020/Aug/img_140851_3900-600.jpg" alt="" />
            </div>
            <div className="astrologer-details">
                <div className="card-upper-section">
                    <span>10+ years</span>
                    <div className="online">
                        <div className='online-status'></div>
                        <span>Online</span>
                    </div>
                </div>
                <div className='card-bottom-section'>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <span>4.5</span>
                    </div>
                    <h3>Astrologer Ramraj</h3>
                    <p>Expertise: Vedic Astrology, Numerology, Vastu, Prashna Kundali</p>
                    <span className='price'>10rs/min</span>
                </div>
            </div>
            <div className="hover-card">
                    <button className='chat'>chat</button>
                    <button className='call'>Call</button>
            </div>
        </div>
    )
}

export default Astrologercard