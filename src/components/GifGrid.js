import React from 'react'
import { useFectchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
export const GifGrid = ( {category}) => {
    
    const {data:images, loading} = useFectchGifs( category );
   

    // getGifs();

    return (
        <>
        <h3 className="animate__animated animate__fadeIn"> {category} </h3>
        {loading && <p className="card animate__animated animate__flash">Loading</p>}
        <div className="card-grid">
            
                {
                    images.map( (img) => (
                        <GifGridItem {...img} key={img.id}/>
                    ))
                }
                
            
        </div>
        </>
    )
}
