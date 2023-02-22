import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel 
        style={{width: '500px',
                margin: '25px auto ',
                backgroundColor: 'black'}}
    >
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Srcrf1h/silla1.jpg"
          alt="First slide"
          style={{width: '500px', height: '500px'}}
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/YDd3RPp/alfombras4.jpg"
          alt="Second slide"
          style={{width: '500px', height: '500px'}}

        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </CarouselItem>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/82hBxRy/puff2.jpg"
          alt="Third slide"
          style={{width: '500px', height: '500px'}}

        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;