import { RadioGroup } from '@radix-ui/react-radio-group';
import React from 'react';
import { RadioGroupItem } from './ui/radio-group'; // Ensure this is correctly implemented
import { Label } from '@radix-ui/react-label';

const filterData = [
  {
    filterType: 'Location',
    array: ['Delhi NCR', 'Hyderabad', 'Pune', 'Mumbai']
  },
  {
    filterType: 'Industry',
    array: ['Frontend Developer', 'Backend Developer', 'FullStack Developer']
  },
  {
    filterType: 'Salary',
    array: ['8-40K', '40-1lakh', '1lakh-5lakh']
  },
];

function FilterCard() {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {filterData.map((data, dataIndex) => (
          <div key={dataIndex}>
            <h1 className='font-bold text-lg'>{data.filterType}</h1>
            {data.array.map((item, itemIndex) => (
              <div key={itemIndex} className='flex items-center space-x-2'>
                <RadioGroupItem value={item} id={`radio-${dataIndex}-${itemIndex}`} />
                <Label htmlFor={`radio-${dataIndex}-${itemIndex}`}>{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
