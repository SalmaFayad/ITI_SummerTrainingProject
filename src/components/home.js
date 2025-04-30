import React,{Component} from 'react';

import Banner from '../components/banner';
import ArtistsList from './ArtistsList';

const baseUrl="http://localhost:3005/artists";

class Home extends Component{

    constructor(props){
        super(props);

        this.state={
            artists:[]
        }
    }
    render(){
        return(
            <div>
                <Banner/>
                <ArtistsList allArtists={this.state.artists}></ArtistsList>
            </div>
        )
    } 

    componentDidMount(){
        fetch(baseUrl,{
            method:'GET'
        }).then(response=>response.json())
          .then(json=>{
              this.setState({
                  artists:json
              })
          })
    }

    
}

export default Home;