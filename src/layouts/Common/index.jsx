import React from 'react'
import Loading from '../../components/Loading'
import Header from './Header'

const CommonLayout = props => {
    return (
        <div className='flex flex-col'>
            <Header />
            <props.page />
            {/* <footer>Footer</footer> */}
            {/* <Loading /> */}
        </div>
    )
}

export default CommonLayout