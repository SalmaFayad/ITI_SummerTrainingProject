import React from 'react'

const AlbumList=(props)=>{

    const listItems=({album})=>{
        if(album){
            return album.map((artist,ids)=>{
                return(
                    <img key={ids} alt="" src={`/images/albums/${artist.cover}.jpg`}/>
                )
            })
        }
    }

    return(
        <div className="albums_list">
            {listItems(props)}
        </div>
    )
}

export default AlbumList;