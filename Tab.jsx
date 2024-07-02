 import {TableContainer,Table,TableHead,TableRow,TableCell, TableBody} from '@mui/material'
 import React from 'react'
const Tab = () => {
      return (
   <div>
      <TableContainer>
         <Table>
             <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
          </TableHead>
            <TableBody>
               <TableRow>
                     <TableCell>Ben</TableCell>
                     <TableCell>21</TableCell>
                     <TableCell>Calicut</TableCell>
               </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
 export default Tab

