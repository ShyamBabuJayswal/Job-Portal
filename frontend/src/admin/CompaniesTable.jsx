import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Popover } from '@radix-ui/react-popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import React from 'react'

const CompaniesTable = () => {
  return (
    <div>
        <Table>
           <TableCaption>A list of your recent registered company</TableCaption>
           <TableHeader>
            <TableRow>
                <TableHead>
                  Logo
                </TableHead>
                <TableHead>
                     Name
                    </TableHead>
                    <TableHead>
                      Date
                    </TableHead>
          <TableHead className='text-right'>
                      Action
                    </TableHead>
            </TableRow>
           </TableHeader>
           <TableBody>
            <TableCell>
            <Avatar>
                <AvatarImage src='https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png'>

                </AvatarImage>
            </Avatar>
            </TableCell>
            <TableCell>
            Company Name
            </TableCell>
            <TableCell>
                13-08-2024
            </TableCell>
            <TableCell>
                13-08-2024
            </TableCell>
            <TableCell className='text-right cursor-pointer'>
               <Popover>
               <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                <PopoverContent className='w-32'>
                  <div className='flex items-center gap-2 w-fit cursor-pointer'>
                    <Edit2 className='w-4'/>
                    <span>Edit</span>
                  </div>
                </PopoverContent>
               </Popover>
            </TableCell>
           </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable;