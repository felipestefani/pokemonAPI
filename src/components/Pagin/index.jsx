import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const Pagin = (props) => {
  const {count, limit, handleEvent} = props

  return (
    <Stack spacing={2}>
      <Pagination count={Math.ceil(count/limit)}  onChange={(e, value)=>handleEvent(value)} variant="outlined" shape="rounded" />
    </Stack>
  );
}

export default Pagin