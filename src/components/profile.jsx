import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import '../assets/styles/profile.scss'
import AccordionComponent from './accordion';
import PersonalInfo from './personalinfo';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Profile = (props) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate()
    useEffect(()=>{
        if(!props.isAuth) {return navigate('/login');}
    })
    return (
        <div className='profile'>
            <div className="container">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                            <Tab label="История заказов" {...a11yProps(0)} />
                            <Tab label="Личные данные" {...a11yProps(1)} />
                            <Tab label="Выйти" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        {props.order.map((item)=><AccordionComponent key={item.id} item={item}/>)}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <PersonalInfo/>
                    </TabPanel>
                </Box>
            </div>
        </div>
    );
}

export default Profile;