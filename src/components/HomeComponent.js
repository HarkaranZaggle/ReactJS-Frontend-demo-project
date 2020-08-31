import React from 'react';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,} from 'reactstrap';
    import { baseUrl } from '../shared/baseUrl';
    const CardImgFixHeight = {
        height: '20rem',
        minHeight: '20rem',
        maxHeight: '20rem'
    }
    const cardImgFix15 = {
        height: '20rem',
        minHeight: '20rem',
        maxHeight: '20rem'
    }
    
    function RenderCard({item, isLoading, errMess}) {
        console.log(item)
        if (isLoading) {
            return(
                    <Loading />
            );
        }
        else if (errMess) {
            return(
                    <h4>{errMess}</h4>
            );
        }
        else 
            return(item?
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg style={CardImgFixHeight} src={baseUrl + item.image} alt={item.name} />
                    <CardBody style={cardImgFix15}>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
            :null);
    
    }

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md 3">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
                </div>
                <div className="col-12 col-md 3">
                <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md 3">
                <RenderCard item={props.leader} isLoading={props.leaderLoading} errMess={props.leaderErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;