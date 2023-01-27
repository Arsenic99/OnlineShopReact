import { useEffect, useState } from "react";
import { Carousel } from 'react-carousel-minimal';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Palto from '../assets/images/Palto.png'
import '../assets/styles/catalogitem.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from "react-router-dom";

const data = [
    {
        image: Palto,
        caption: "Пальто"
    },
    {
        image: Palto,
        caption: "Пальто"
    },
    {
        image: Palto,
        caption: "Пальто"
    },
];

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}

const Catalogitem = (props) => {
    const { id } = useParams();
    useEffect(() => {
        props.getItem(id);
    }, [])
    const [size, setSize] = useState('');
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-between catalogitem">
                    <div className="catalogitem__img">
                        <Carousel
                            data={data}
                            time={2000}
                            width="850px"
                            height="500px"
                            captionStyle={captionStyle}
                            radius="10px"
                            slideNumber={false}
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="bottom"
                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="contain"
                            thumbnails={true}
                            thumbnailWidth="100px"
                            style={{
                                textAlign: "center",
                                maxWidth: "850px",
                                maxHeight: "500px",
                                margin: "40px auto",
                            }}
                        />
                    </div>
                    <div className="catalogitem__text">
                        <div className="catalogitem__text-name">
                            {props.item.name}
                        </div>
                        <div className="catalogitem__text-price">
                            {props.item.price}
                        </div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                value={size}
                                onChange={event => setSize(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value=""><em>Выберите размер</em></MenuItem>
                                <MenuItem value={'S'}>S</MenuItem>
                                <MenuItem value={'M'}>M</MenuItem>
                                <MenuItem value={'L'}>L</MenuItem>
                            </Select>
                        </FormControl>
                        <div className="d-flex justify-content-between catalogitem__text-choose">
                            <button className="catalogitem__text-cart" disabled={size ? false : true} style={{cursor: size ? 'pointer' : 'not-allowed'}} onClick={()=>{props.setToCard(id, size)}}>В корзину</button>
                            <div className="catalogitem__text-favourite" onClick={()=>{props.addToFavourite(id)}}>В избранное</div>
                        </div>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography>Обмеры и описание</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                                <Typography>Состав и уход</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalogitem;