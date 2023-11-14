import React from 'react';

export class Product extends React.Component{

    render(){
        const myStyle = {
            height:'100px',
            width:'100px',
        };
        const myStyle1 = {
            height:'30px',
            width:'30px',
        };

        return(
            <div className="item">
                <div className="image">
                <img
                style={myStyle}
                src="images/products/image-aqua.png" />
                </div>
                <div className="middle aligned content">
                    <div className="description">
                        <a>Forth Knight</a>
                        <p>Authentic renaissance actors, delivered in just two weeks</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img 
                            style={myStyle1}
                            className="ui avatar image"
                            src="images/avatars/daniel.jpg"
                            />
                    </div>
                </div>
            </div>
        );
    }
}

