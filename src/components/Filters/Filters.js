import React from 'react';
import "./filters.scss"

function Filters({ updatePriceOrderAsc, updatePriceOrderDesc, updateCapacityOrderAsc, updateCapacityOrderDesc }) {

    function orderByAsc() {
        if (updatePriceOrderAsc) {
            updatePriceOrderAsc()
        }
    }

    function orderByDesc() {
        if (updatePriceOrderDesc) {
            updatePriceOrderDesc()
        }
    }

    function orderByAscCapacity() {
        if (updateCapacityOrderAsc) {
            updateCapacityOrderAsc()
        }
    }

    function orderByDescCapacity() {
        if (updateCapacityOrderDesc) {
            updateCapacityOrderDesc()
        }
    }

    return (
        <div className='displayItems'>
            <span className='sortBy'>Sort by: </span>
            <div className='buttonSort'>
                <button className='sortPrice' onClick={() => orderByAsc(updatePriceOrderAsc)}>Price Low-High</button>
                <button className='sortPrice' onClick={() => orderByDesc(updatePriceOrderDesc)}>Price High-Low</button>
                <button className='sortPrice' onClick={() => orderByAscCapacity(updatePriceOrderAsc)}>Less Capacity</button>
                <button className='sortPrice' onClick={() => orderByDesc(updatePriceOrderDesc)}>More Capacity</button>
            </div>
        </div>
    );
}

export default Filters;