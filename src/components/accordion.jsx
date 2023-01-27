import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderItem from './orderitem';

const AccordionComponent = (props) => {
    return (
        <div className='accordion'>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <div className='d-flex justify-content-between align-items-center w-100 flex-wrap'>
                        <div>#Order</div>
                        <div>Статус: {props.item.status}</div>
                        <div>Сумма: {props.item.price}</div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <OrderItem item={props.item}/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default AccordionComponent;