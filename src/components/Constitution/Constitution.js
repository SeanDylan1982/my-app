import * as React from 'react';
import Box from '@mui/material/Box';

export default function Constritution() {
  return (
    <Box
      sx={{
        width: 1000,
        height: 1200,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <object data="../../../public/docs/Northmead Constitution and Bye-Laws 2019 .pdf" aria-label="constitution and bye-laws" type="application/pdf" width="100%" height="100%"></object>
    </Box>
  );
}
