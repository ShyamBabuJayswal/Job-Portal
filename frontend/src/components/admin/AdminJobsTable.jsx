import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Popover } from '@radix-ui/react-popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminJobsTable = () => {
  const { companies, searchCompanyByText } = useSelector(store => store.company);
  const { allAdminJobs,searchJobByText } = useSelector(store => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  
  useEffect(() => {
    const filteredCompany = companies.filter((company) => {
      
      if (!searchCompanyByText) {
        return true;
      }
      
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });

    
    setFilterJobs(filteredCompany);
  }, [companies, searchJobByText]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recently posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4}>You havenot Posted any Jobs yet</TableCell>
            </TableRow>
          ) : (
            filterJobs.map((jobs) => (
              <TableRow key={jobs.id}>
                
                <TableCell>{jobs.name}</TableCell>
                <TableCell>{jobs.createdAt.split("T")[0]}</TableCell>
                <TableCell className='text-right cursor-pointer'>
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className='w-32'>
                      <div onClick={()=> navigate(`/admin/companies/${jobs._id}`)    } className='flex items-center gap-2 w-fit cursor-pointer'>
                        <Edit2 className='w-4' />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable ;
