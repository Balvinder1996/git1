import React, { useEffect, useState } from 'react';
import img from '../Assets/Rosapic.jpg';
class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            Data:[
               2,23,24,55,56
         ],
         status:true
        };
        console.log(this.state.Data)
        
    }
   componentDidMount()
   {
      let a=[ 23,24,55,56] ;
      let b=[ 24,55,56];
      let c=[55,56];
      let d=[56]
      setTimeout(() => {
          this.setState(
              {
                  Data:a
              }
          );
      }, 15000);
      setTimeout(() => {
          this.setState(
              {
                  Data:b
              }
          );
      }, 30000);
      setTimeout(() => {
        this.setState(
            {
                Data:c
            }
        );
    }, 45000);
    setTimeout(() => {
        this.setState(
            {
                Data:d
            }
        );
    }, 60000);
    
    setTimeout(() => {
        this.setState({
            Data:[],
            status:false
        })
    }, 70000)
      
   }
     
    render()
    {
        return(
            <>
            {
                this.state.status ?
                <>
         <section className="container-fluid" id="main">
            <div className="row h-25">
                <div className="col-lg-5 bg-danger" id="image">
                    
                </div>
                <div className="col-lg-7 d-flex align-items-center flex-column justify-content-center" id="text">
                    
                        <h1 className="h1">Welcome to Rose's Cafe</h1>
                        <p className="display-4 ">Welcome here</p>
                   
                </div>
            </div>
            <div className="row h-25" id="submain">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1 className="animate__animated animate__heartBeat animate__infinite animate__slow">{this.state.Data[0]}</h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                     <h1>{this.state.Data[1]}</h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1>{this.state.Data[2]}</h1>
                </div>
            </div>
            <div className="row h-25 " id="submain">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1>{this.state.Data[3]}</h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1>{this.state.Data[4]}</h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
            </div>
            <div className="row h-25" id="submain">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
            </div>
        </section>
                </>
                :
            <section id="falsestate">
                
            </section>
            }
            </>
        )
    }
}
export default Home