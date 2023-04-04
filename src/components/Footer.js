import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col className='text-left' sm='10'>
                        <p class="text-muted"><i class="fa fa-copyright"></i> 2023 SpinCrawler</p>
                    </Col>
                    <Col>
                        <a href="https://www.patreon.com" target="_blank" role="button" class="btn btn-block btn-secondary" data-toggle="tooltip" data-placement="top" data-html="true" title="Help us keep the lights on.">Donate</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer;