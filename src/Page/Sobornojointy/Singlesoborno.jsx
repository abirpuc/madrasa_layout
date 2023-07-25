import React from 'react';

const Singlesoborno = (props) => {
    return (
        <div>
            <div className="container__first content__container">
                <div className="content_left">
                    <h3>{props.title_1}</h3>
                    <img src={props.img_1} alt="" />
                </div>
                <div className="content_right">
                    {/* <h3>{props.title_2}</h3> */}
                    <p>{props.content_1}</p>
                </div>
            </div>
            <div className="container__second content__container">
                <div className="content_left">
                    <h3>{props.title_3}</h3>
                    <p>{props.content_2}</p>
                </div>
                <div className="content_right">
                    <img src={props.img_2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Singlesoborno;