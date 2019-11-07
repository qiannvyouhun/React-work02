import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch(`https://cnodejs.org/api/v1/topics?tab=dev&page=${this.props.match.params.id}`,{method:'GET'})
            .then( res => res.json())
            .then((res) => {
                this.setState({
                    data:res.data
                })
                console.log(this.state.data);
            })      
    }
    render(){
        return (
            <div className='topic_list'>
                {
                    this.state.data.map((item,index) => 
                        <div className='cell'>
                            <a className="user_avatar pull-left"><img style={{'height':'30px','width':'30px'}} src={item.author.avatar_url}></img></a>
                            <span className='reply_count pull-left' style={{'margin-top': '5px'}}>
                                <span className='count_of_replies'>{item.reply_count}</span>
                                 /
                                <span className='count_visits'>{item.visit_count}</span>
                            </span>
                            <a className="user_avatar pull-right">
                                <img style={{'height':'20px','width':'20px'}} src={item.author.avatar_url}></img>
                                &nbsp;&nbsp;&nbsp;
                                <span style={{'fontSize':'10px'}}>1 小时前</span>
                                </a>
                            <div style={{'marginLeft':'110px','margin-top': '5px'}}>
                                <a style={{'color':'#333'}}>{item.title}</a>
                            </div>
                        </div>
                    )
                }
                <div className="pagination">
                    <ul>   
                        <li><Link to={`/home/dev/1`}>1</Link></li>
                        <li><Link to={`/home/dev/2`}>2</Link></li>
                        <li><Link to={`/home/dev/3`}>3</Link></li>
                        <li><Link to={`/home/dev/4`}>4</Link></li>
                        <li><Link to={`/home/dev/5`}>5</Link></li>
                        <li><Link to={`/home/dev/6`}>6</Link></li>
                        <li><Link to={`/home/dev/7`}>7</Link></li>
                        <li><Link to={`/home/dev/8`}>8</Link></li>
                        <li><Link to={`/home/dev/9`}>9</Link></li>
                        <li><Link to={`/home/dev/10`}>10</Link></li>                
                    </ul>
                </div>  
            </div>
        )
    }
}