import React from 'react'

const Index = ()=>{
    return(
        <>
            <h1>Hello world</h1>
        </>
    )
}

Index.getInitialProps = async(req)=>{
    const d = {bid:req.query.id}
    return{d}
}

export default Index