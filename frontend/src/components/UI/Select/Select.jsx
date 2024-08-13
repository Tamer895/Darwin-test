import React, {useState} from 'react'
import "./styles/style.css";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import styled from '@emotion/styled';


export default function SelectComponent({children, ...props}) {

  const items = props.items;


  return (

    <FormControl>
    <Select
          // sx={{borderColor: "#4f46e5"}
         
          value={props.value}
          onChange={props.onChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}

          sx={{
            height: '3rem', // h-12 (12 * 4px = 48px)
            padding: '0 1rem', // px-4
            backgroundColor: '#fff', // bg-white
            fontSize: '0.875rem', // text-sm
            border: '2px solid rgb(202, 213, 226)',
            outline: 'none', // outline-none
            boxSizing: "border-box", // box-sizing
            borderRadius: '0.375rem', // rounded-md
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none', // focus:border-primary-def
            },
            '.MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
            '& .MuiSelect-root': {
              '&::placeholder': {
                color: '#9e9e9e', // placeholder:text-black-50
              },
            },
          }}
        >
        {items.map((elem, index) => (
 
          <MenuItem className='border-none' key={index} value={elem.value}>{elem.label}</MenuItem>
        ))}
    </Select>
    </FormControl>
  )
}


