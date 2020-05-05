 import React, { Component } from 'react';
 import './Searchbycountry.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSearch } from '@fortawesome/free-solid-svg-icons';
 import axios from 'axios';
 class Searchbycountry extends Component {
     state={
         data:[],
         flag1:false,
         flag2 : false

     }
     async componentDidMount()
     {
         axios.get('https://api.covid19api.com/summary')
         .then(reaponse =>{
             this.setState({data :reaponse.data,flag1:true});
         })
         .catch(err =>{
             alert("please, refresh page!! and try to use country's full name for searching data....");
         })
     }
     render() {
         return (
             <React.Fragment>
                 <div className="srch">
                     <div>
                         <h1>COVID-19 LIVE UPDATES OF THE WORLD</h1>
                         <h4></h4>
                     </div>

                <div className="search-box">
                    <input className="search-txt" type="text" placeholder="Search by country" />
                    <a className="search-btn" href="#">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </a>
                </div>
                </div>
             </React.Fragment>
         );
     }
 }
 
 export default Searchbycountry;