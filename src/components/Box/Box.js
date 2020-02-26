import React from 'react';
import Box from '@material-ui/core/Box';
import SimpleCard from '../Cards/Cards.js'

export default function JustifyContent() {
    return (
        <div style={{ width: '30', }}>
            {/* <Box display="flex" justifyContent="flex-start" m={1} p={1} bgcolor="background.paper">
        <Box p={1} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 1
        </Box>
      </Box>
    //   <Box display="flex" justifyContent="flex-end" m={1} p={1} bgcolor="background.paper">
    //     <Box p={1} bgcolor="grey.300">
    //       Item 1
    //     </Box>
    //     <Box p={1} bgcolor="grey.300">
    //       Item 1
    //     </Box>
    //     <Box p={1} bgcolor="grey.300">
    //       Item 1
    //     </Box>
      </Box> */}

            
                <Box display="flex" justifyContent="center" m={1} p={1}  style={{marginRight:"10rem", marginTop:"2rem", }}>
                    {/* <Box p={1} >
                        <SimpleCard />
                    </Box> */}
                    <Box p={1} >
                        <SimpleCard />
                    </Box>
                    <Box p={1} >
                        <SimpleCard />
                    </Box>
                    <Box p={1} >
                        <SimpleCard />
                    </Box>
                </Box>
                
    </div>
            );
}