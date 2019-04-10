import React from 'react';
import BioStyle from './Bio.module.css';
import foto from './foto.jpg';

const bio = props => {

    return (
        <div className={BioStyle.Bio}>
            <h1>Biografia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, 
                velit in suscipit accumsan, orci ante molestie arcu, a vehicula diam nisi 
                sed magna. Nulla ac augue turpis. Phasellus rutrum, libero a rhoncus 
                dignissim, enim odio suscipit ex, sed hendrerit nulla diam sed ex. 
                Mauris sed maximus quam. Vestibulum congue lacus ac erat egestas, quis 
                consectetur nisi tincidunt. Vestibulum volutpat faucibus orci at fermentum. 
                Sed pulvinar nulla ornare posuere pulvinar. Maecenas luctus est ac lacinia dapibus.</p>
            <img src={foto} alt="Foto"></img>

        </div>
    )
}

export default bio;