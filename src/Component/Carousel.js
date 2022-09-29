import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel className="carousel_wrapper p-3">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-psd/fashion-banner-template_23-2148509060.jpg?w=900&t=st=1664305528~exp=1664306128~hmac=c919fe0fdc200c3e510e8ca6844780072d84f9c4b429db352dfea424d4e18b14"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/free-psd/fashion-sale-social-media-banner-social-media-template_237398-226.jpg?w=900&t=st=1664305606~exp=1664306206~hmac=0e748867d6b846fa7e62e343c3ca415116c85fcf5087923fc8bf46237acbd748"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-138.jpg?w=740&t=st=1664305726~exp=1664306326~hmac=dffbac2554fdab2b9d705f50052eb036128bd9dda0d9d085a3ac25738809c55f"
          alt="First slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;