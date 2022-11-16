import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./Chips.css"

function Chips() {
  return (
    <div className="chips">
    <Stack direction="row" spacing={1}>
        
        <Chip label="All" />
        <Chip label="Meditation" variant="outlined" />
        <Chip label="Breathing" variant="outlined" />
        <Chip label="Yoga" variant="outlined" />
        <Chip label="Lifestyle" variant="outlined" />
        <Chip label="ASMR" variant="outlined" />
        <Chip label="Wisdom" variant="outlined" />
    </Stack>
    </div>
)}

export default Chips