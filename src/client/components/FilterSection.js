import React, { useState , useEffect, useRef } from 'react';

 const FilterSection = (props) => {
        let {filterName, filterValues, handleClick} = props;
        let [activeButton, setActiveButton] = useState('');
        const prevClicked = usePrevious(activeButton);

        const testClick = e => {
            if(e === prevClicked) {
                setActiveButton('');
                 handleClick('');
            }  else {
                setActiveButton(e);
                 handleClick(e.toLowerCase());
            }                       
        }
         

        return (
            <div className="mt-1 text-center">
                <h6 className="border-bottom  text-center pb-1">{filterName}</h6>
                <div className="row">
                    {filterValues && filterValues.map( value => {
                        let textValue = value.toString();
                        let classValue = textValue == activeButton ?
                        "btn-small w-75 light-green black-text p-0 text-center accent-4" :
                        "btn-small w-75 p-0  text-center black-text light-green accent-1"
                        return <div className="col-6 p-1"> 
                            <button key={textValue} className= { classValue } 
                            onClick= {() => testClick(textValue) }>
                             {value}</button>
                        </div>
                    })}
                </div>
            </div>
        );
};

const  usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return value;
  }

export default FilterSection;