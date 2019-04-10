import React from 'react';
import BioStyle from './Bio.module.css';
import foto from './foto.jpg';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

const bio = props => {

    return (
        <div className={[BioStyle.Bio, "centralizaTexto"].join(" ")}>
            <p>
                <h1>Biografia</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, 
                velit in suscipit accumsan, orci ante molestie arcu, a vehicula diam nisi 
                sed magna. Nulla ac augue turpis. Phasellus rutrum, libero a rhoncus 
                dignissim, enim odio suscipit ex, sed hendrerit nulla diam sed ex. 
                Mauris sed maximus quam. Vestibulum congue lacus ac erat egestas, quis 
                consectetur nisi tincidunt. Vestibulum volutpat faucibus orci at fermentum. 
                Sed pulvinar nulla ornare posuere pulvinar. Maecenas luctus est ac lacinia dapibus.
            </p>
            <Col md={3} className={BioStyle.centralizaImagem}>
                <Image 
                    src={foto} 
                    alt="Foto" 
                    className={BioStyle.minhaFoto} 
                    roundedCircle>
                </Image>
            </Col>
            

        </div>
    )
}

export default bio;