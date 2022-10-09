import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption =[
        {id:1, name:'Free', price:0, features:[
            
                'Awesome Features',
                'Extra Features',
                'unnessary Features',
                'will never use Features',
                'Features'

            
        ]},
        {id:2, name:'Medium', price:9.99,features:[
            
            'Awesome Features',
            'Extra Features',
            'unnessary Features',
            'will never use Features',
            'Features'

        
    ]},
        {id:3, name:'Premium', price:19.99,features:[
            
            'Awesome Features',
            'Extra Features',
            'unnessary Features',
            'will never use Features',
            'Features'

        
    ]},
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of the Town</h3>
          <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOption.map(option => <PriceOption
                    key={option.id}
                    option={option}
                    ></PriceOption>)
                }
          </div>
        </div>
    );
};

export default Pricing;