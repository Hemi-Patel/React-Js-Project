import { Carousel, Container } from "react-bootstrap";

const Banner = () => {
    return (
        <>
            <Container className="p-0 mt-5">
                <Carousel fade interval={1000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/images/banner1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/images/banner2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/images/banner.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
};

export default Banner;
