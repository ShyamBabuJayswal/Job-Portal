import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
    },
];

const FilterCard = () => {
    const [selectedValues, setSelectedValues] = useState({
        location: '',
        industry: '',
        salary: '',
    });

    const dispatch = useDispatch();

    const changeHandler = (filterType, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [filterType]: value,
        }));
    };

    useEffect(() => {
        // Dispatching all selected filters as an object
        console.log("Dispatching selected filters:", selectedValues);
        dispatch(setSearchedQuery(selectedValues));
    }, [selectedValues, dispatch]);

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            {filterData.map((data, index) => (
                <div key={`filterType-${index}`}>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    <RadioGroup value={selectedValues[data.filterType.toLowerCase()]} onValueChange={(value) => changeHandler(data.filterType.toLowerCase(), value)}>
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`;
                            return (
                                <div className='flex items-center space-x-2 my-2' key={itemId}>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            );
                        })}
                    </RadioGroup>
                </div>
            ))}
        </div>
    );
};

export default FilterCard;
