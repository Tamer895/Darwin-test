import React, {useState} from 'react'
import TextInput from '../TextInput/TextInput'
import Button from "@UI/Buttons/Button/Button"
import Chip from '@mui/material/Chip';

export default function ChipsInput(props) {
  const [value, setValue] = useState("");
  
  const add = (val) => {
    if (value != "") {
        props.onChange((prev) => [...prev, val])
        setValue("")
    }
  }

  return (
    <div className='w-full'>
        <div className="flex-center-between">
            <TextInput value={value} onChange={(e)=>setValue(e.target.value)} style={{width: "100%"}} placeholder={props.placeholder} />
            <Button onClick={() => add(value)} type="button" style={{marginLeft: "5px"}}>+</Button>
        </div>

        <div className="flex flex-wrap items-center justify-start pt-3">
            {props.items.map((elem, index) => (
                <Chip 
                    key={index}
                    sx={{
                        backgroundColor: 'white', // Replace with your custom color
                        color: '#4F46E5', // Replace with your desired text color
                        border: "1px solid #4F46E5",
                        marginRight: "5px",
                        marginBottom: "5px",
                    }}
                    variant="outlined" 
                    label={elem}
                    size="medium" 
                />
            ))}
        </div>
    </div>
  )
}
