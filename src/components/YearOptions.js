import React from 'react'

export default function YearOptions({year, onChange}) {
    return (
        <select value={year} onChange={onChange} className='select'>
            <option value={2021}>2021-22</option>
            <option value={2020}>2020-21</option>
            <option value={2019}>2019-20</option>
            <option value={2018}>2018-19</option>
            <option value={2017}>2017-18</option>
            <option value={2016}>2016-17</option>
            <option value={2015}>2015-16</option>
            <option value={2014}>2014-15</option>
        </select>
    )
}
