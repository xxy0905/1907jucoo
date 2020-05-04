import React, { Component } from 'react';
import  tittle  from  '../../assets/css/common/tittle.module.scss'
    class Tittle  extends Component {
        constructor(props) {
            super(props);
            this.state = {  }
        }
        render() { 
            return ( 
            <div className={tittle.top}>
                    <h3>{this.props.p}</h3>
                    <div>
                        <a href={this.props.href}>    
                            <span>{this.props.right}</span>
                        </a>
                        <i>&gt;</i>
                    </div>
              </div>
             );
        }
    }
export default Tittle ;