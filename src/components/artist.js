import React,{Component} from 'react'

import Header from './header'
import AlbumList from './albumList'

const baseUrl="http://localhost:3005/artists"

class Artist extends Component{

    constructor(props){
        super(props);

        this.state={
            artist:[]
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                <div className="avatar">
                <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                </div>
                <div className="bio">
                <h3>{this.state.artist.name}</h3>
                <div className="bio-text">{this.state.artist.bio}</div>
                </div>
                <AlbumList album={this.state.artist.albums}/>
                </div>
            </div>
        )
    }  

    componentDidMount(){
        fetch(`${baseUrl}/${this.props.match.params.artistid}`,{
            method:'GET'
        }).then(response=>response.json())
          .then(data=>{
                this.setState({
                    artist:data
                })
            })

    }

  
}

export default Artist;