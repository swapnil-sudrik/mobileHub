import Carousel from 'react-bootstrap/Carousel';
import offer1 from '../images/offer1.jpg'
import offer2 from '../images/offer2.jpg'
import offer3 from '../images/offer3.jpg'
import offer4 from '../images/offer4.jpg'
import offer5 from '../images/offer5.jpg'
import offer6 from '../images/offer6.jpg'
import offer7 from '../images/offer7.jpg'
import offer8 from '../images/offer8.jpg'
import offer9 from '../images/offer9.jpg'
const ProductsScroller = () => {
  return (
    <div className='c-items mt-3 p-3' style={{ backgroundColor: '#fff' }}>
      
      <Carousel data-bs-theme="dark" >
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer1}
            alt="First slide"


          />
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer2}
            alt="First slide"


          />
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer3}
            alt="First slide"


          />
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer4}
            alt="First slide"


          />
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer5}
            alt="First slide"


          />
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer6}
            alt="First slide"


          />
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer7}
            alt="First slide"


          />
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer8}
            alt="First slide"


          />
        </Carousel.Item>
        <Carousel.Item style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            className="align-item-center offer-img"
            src={offer9}
            alt="First slide"


          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProductsScroller;