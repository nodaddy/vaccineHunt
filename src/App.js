import React, { Component } from 'react'; 
import Axios from 'axios';
import RICIBs from 'react-individual-character-input-boxes';
import notify from './assets/pristine-609.ogg';
import oops from './assets/oops.ogg';
import * as ant from '@ant-design/icons';
import { Spin } from 'antd';
import ReactWhatsapp from 'react-whatsapp';

const rewariData1 = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=202&date=15-05-2021';
const rewariData2 = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=202&date=20-05-2021';
const rewariData3 = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=202&date=25-05-2021';

const mHData1 = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=202&date=15-05-2021';
const mHData2 = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=202&date=20-05-2021';
const mHData3 = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=202&date=25-05-2021';

class App extends Component {

    state = {
        hitAlarm: false,
        ytmusic: 'https://www.youtube.com/embed/j9V78UbdzWI',
        searching: true
    }

    componentDidMount(){ 
        // setTimeout(()=>{
        //     document.getElementById('notify2').play();
        // }, 5000);
        setInterval(()=>{
            //1
            Axios.get(rewariData1).then((res)=>{
                console.log(res.data);
                res.data.centers.map((center, Ci)=>{
                    center.sessions.map((session, Si)=>{
                        if(session.available_capacity > 0){
                            this.setState({hitAlarm: true});
                            document.getElementById('yep').appendChild(document.createElement('br'));
                            document.getElementById('yep').appendChild(document.createTextNode(`Vaccine available for ${session.min_age_limit}+ at ${center.address} on ${session.date}`)); 
                            setInterval(()=>{document.getElementById('notify0').play();}, 7000);
                            //alert(`Vaccine available for ${session.min_age_limit}+ at ${center.address} on ${session.date}`);

                        }
                    })
                })
            }).catch((err)=>{
                console.log(err);

                setInterval(()=>{document.getElementById('oops').play();}, 7000);
                //alert(err);

            })

            //2
            Axios.get(rewariData2).then((res)=>{
                console.log(res.data);
                res.data.centers.map((center, Ci)=>{
                    center.sessions.map((session, Si)=>{
                        if(session.available_capacity > 0){
                            this.setState({hitAlarm: true});
                            document.getElementById('yep').appendChild(document.createElement('br'));
                            document.getElementById('yep').appendChild(document.createTextNode(`Vaccine available for ${session.min_age_limit}+ at ${center.address} on ${session.date}`)); 
                            
                            setInterval(()=>{document.getElementById('notify1').play();}, 7000);
                            //alert(`Vaccine available for ${session.min_age_limit}+ at ${center.address} on ${session.date}`);

                         }
                    })
                })
            }).catch((err)=>{
                console.log(err);

                setInterval(()=>{document.getElementById('oops').play();}, 7000);
                //alert(err);
            })

            //3
            Axios.get(rewariData3).then((res)=>{
                console.log(res.data);
                res.data.centers.map((center, Ci)=>{
                    center.sessions.map((session, Si)=>{
                        if(session.available_capacity > 0){
                            this.setState({hitAlarm: true});
                            document.getElementById('yep').appendChild(document.createElement('br'));
                            document.getElementById('yep').appendChild(document.createTextNode(`Vaccine available for ${session.min_age_limit}+ at ${center.address} on ${session.date}`));
                            setInterval(()=>{document.getElementById('notify2').play();}, 7000); 
                            //alert(`Vaccine available for ${session.min_age_limit}+ at ${center.address} on ${session.date}`);
                            
                        }
                    })
                })
            }).catch((err)=>{
                console.log(err);
                setInterval(()=>{document.getElementById('oops').play();}, 7000);
                //alert(err);

            })
            
        }, 150000)
        
    }

    render() {
        return (
            <div style={{padding:'30px', backgroundColor:'black', color:'blue', height:'150vh'}} align="center"> 
            As soon as you open/refresh the webpage, never forget to click anywhere on on the screen atleast once
           <h3 style={{zIndex:'9999',margin:'auto',textAlign:'center', right:'10px', padding:'20px', borderRadius:'10px',backgroundColor:'white', color:'blue'}}> 
           <span style={{color:'blue'}}>Looking for vaccines in Rewari
           <span style={{marginLeft:'13px', marginRight:'13px'}}><ant.LoadingOutlined></ant.LoadingOutlined> </span>
           </span>You'll be notified
           </h3>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>   
                
                {/* <RICIBs
          amount={5}
          autoFocus
          handleOutputString={this.handleOutput}
          inputProps={[
            { className: "first-box" },
            { style: { "color": "orange" } },
            { placeholder: "_" }
          ]}
          inputRegExp={/^[0-9]$/}
        /> */}
        {/* <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" /> */}
        If vaccine found : 
                <br/>
                <br/>
         <audio style={{width:'30%',}}  controls id="notify0">
                    <source src={oops} type="audio/ogg"/> 
                    Your browser does not support the audio element.
                </audio>  
                <audio style={{width:'30%'}} controls id="notify1">
                    <source src={oops} type="audio/ogg"/> 
                    Your browser does not support the audio element.
                </audio>  

                <audio style={{width:'30%'}} controls id="notify2">
                    <source src={oops} type="audio/ogg"/> 
                    Your browser does not support the audio element.
                </audio> 
                <br/> 
                <br/> 
                <br/> 
                If Disconnected : 
                <br/>
                <br/>
                <audio style={{width:'30%'}} controls id="oops">
                    <source src={notify} type="audio/ogg"/> 
                    Your browser does not support the audio element.
                </audio> 
                <br/><br/>
                <div id="yep">
                <h4 style={{color:'white'}}><Spin style={{marginRight:'15px'}}/> Vaccines availablity will be shown here </h4> 
                <br/>
                </div>
                
 
            </div>
            

        );
    }
}

export default App;