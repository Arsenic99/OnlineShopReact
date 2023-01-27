import '../assets/styles/filter.scss'
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Filter = (props) => {
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [sort, setSort] = useState('');
    return (
        <div className="filter">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={size}
                    onChange={(event)=>{setSize(event.target.value);}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Размер</em>
                    </MenuItem>
                    {props.size.map(item => <MenuItem key={item.id} value={item.sizeitem}>{item.sizeitem}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={color}
                    onChange={(event)=>{setColor(event.target.value);}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Цвет</em>
                    </MenuItem>
                    {props.color.map(item => <MenuItem key={item.id} value={item.coloritem}>{item.coloritem}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={price}
                    onChange={(event)=>{setPrice(event.target.value);}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Цена</em>
                    </MenuItem>
                    {props.price.map(item => <MenuItem key={item.id} value={item.priceitem}>{item.priceitem}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={sort}
                    onChange={(event)=>{setSort(event.target.value);}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Сортировать</em>
                    </MenuItem>
                    {props.sort.map(item => <MenuItem key={item.id} value={item.sortitem}>{item.sortitem}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

export default Filter;