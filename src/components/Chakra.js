import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import chakra from '../assets/chakra.png'

function Chakra() {
  return (
    <div className="chakra-container">
        <div className="testimonial-heading">
            <FontAwesomeIcon icon={faStar} />
            <h3>Many Problems one Solution</h3>
            <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="chakra-main-section">
            <div className="chakra-main-section-left">
                <div className="problem">
                    <div className='problem-img'>
                        <img src="https://user-images.githubusercontent.com/99132893/232818785-446f8508-c970-40bb-907b-d3b428e3ea8f.png" alt="" />
                    </div>
                    <div className="problem-title">
                        Lover Problem
                    </div>
                </div>
                <div className="problem">
                    <div className='problem-img'>
                        <img src="https://user-images.githubusercontent.com/99132893/232790447-dd15a99d-1cb0-4cf7-9812-d8126dd9025a.png" alt="" />
                    </div>
                    <div className="problem-title">
                        Marriage Problem
                    </div>
                </div>
                <div className="problem">
                    <div className='problem-img'>
                        <img src="https://user-images.githubusercontent.com/99132893/232791097-df6a0d59-8157-49c6-94ad-cfbfe117f41f.png" alt="" />
                    </div>
                    <div className="problem-title">
                        Business Problem
                    </div>
                </div>
            </div>
            <div className="chakra-main-section-center">
                <div className="chakra-main-section-center-img">
                    <img src={chakra} alt="" />
                </div>
                <div className="chakra-main-section-center-img2">
                    <img src="https://user-images.githubusercontent.com/99132893/232808909-7217f195-5c55-4907-a79c-9fd5c7fd1420.png" alt="" />
                </div>
            </div>
            <div className="chakra-main-section-right">
                <div className="problem">
                    <div className='problem-img'>
                        <img src="https://user-images.githubusercontent.com/99132893/232796561-84cd84f2-b688-46c2-8395-0257ef747a9d.png" alt="" />
                    </div>
                    <div className="problem-title">
                        Grah Problem
                    </div>
                </div>
                <div className="problem">
                    <div className='problem-img'>
                        <img src="https://user-images.githubusercontent.com/99132893/232794360-05bff8be-23fe-48b0-85c0-2a4ebf13cd16.png" alt="" />
                    </div>
                    <div className="problem-title">
                        Health Problem
                    </div>
                </div>
                <div className="problem">
                    <div className='problem-img'>
                        <img src="https://user-images.githubusercontent.com/99132893/232792675-fc9cf3fb-8b51-4c66-b8e1-d7774d08b8f4.png" alt="" />
                    </div>
                    <div className="problem-title">
                        Money Problem
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Chakra;