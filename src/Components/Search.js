import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import fileposition from './positions';

export class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            words:this.props.match.params.word,
        }
    }
    render(){
        return(
            <div>
                <Link to="/">Come_Back</Link>
                <ul>
                    {fileposition.filter((job)=>{
                        return (
                            job.title.includes(`${this.state.words}`) ||
                            job.type.includes(`${this.state.words}`) ||
                            job.location.includes(`${this.state.words}`) ||  
                            job.description.includes(`${this.state.words}`) ||  
                            job.company.includes(`${this.state.words}`)
                        )
                    }).map(job=>(
                        <li key={job.id}>
                            <a href={job.how_to_apply}>{job.title}</a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }

}
export default Search;