import { Table } from './ui/table'
import React from 'react'
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

function AppliedJobTable() {
  return (
    <div>
        <Table>
            <TableCaption>
                A list of your applied jobs
            </TableCaption>
            <TableHeader>
                <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className='text-right' >Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
              {
    [1,2].map((item,index) => (
     <TableRow key = {index}>
       <TableCell>17-07-2024</TableCell>
       <TableCell>Frontend Developer</TableCell>  
       <TableCell>Google</TableCell> 
       <TableCell className='text-right ' ><Badge>Selected</Badge></TableCell> 
     </TableRow>
   
   
    ) )
              }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable