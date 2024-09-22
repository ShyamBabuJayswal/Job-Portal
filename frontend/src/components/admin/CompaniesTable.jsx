import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Popover } from '@radix-ui/react-popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(store => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);

  // useEffect for filtering companies based on searchCompanyByText
  useEffect(() => {
    const filteredCompany = companies.filter((company) => {
      // If there's no search text, return all companies
      if (!searchCompanyByText) {
        return true;
      }
      // Filter companies based on the search text (case-insensitive)
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });

    // Update the filtered companies state
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recently registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4}>You havenot registered any company yet</TableCell>
            </TableRow>
          ) : (
            filterCompany.map((company) => (
              <TableRow key={company.id}>
                <TableCell className='w-8'>
                  <Avatar>
                    <AvatarImage src={company.logo || 'https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png'} />
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell className='text-right cursor-pointer'>
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className='w-32'>
                      <div className='flex items-center gap-2 w-fit cursor-pointer'>
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

export default CompaniesTable;
