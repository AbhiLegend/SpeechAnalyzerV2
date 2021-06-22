import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { SENTIMENT_API } from './constants/urls';
import { EMOTNTRAIT_API } from './constants/urls';
import { DISAMBIGUTY_API } from './constants/urls';
import { PROPSENT_API } from './constants/urls';
import { PII_API } from './constants/urls';
import { WRITE_API } from './constants/urls';
import { REL_API } from './constants/urls';
import { Button } from '@material-ui/core';
import 'react-json-pretty/themes/monikai.css';
import Card from '@material-ui/core/Card';

import JSONPretty from 'react-json-pretty';
import { getRemainingRequest } from 'loader-utils';

const SpeechRecog = ({token}) => {
    const [data, setData ] = useState('');
    const [data1, setData1 ] = useState(false);
    const [data2, setData2 ] = useState(false);
    const [data3, setData3 ] = useState(false);
    const toggleData1 = () => { setData1(p => !p) }
    const toggleData2 = () => { setData2(p => !p) }
    const toggleData3 = () => { setData3(p => !p) }
    
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const getSenti = (text) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(
            {
                document: {
                    text
                }
            }
        )
    };
    fetch(SENTIMENT_API, requestOptions)
        .then(response => response.json())
        .then(data => setData(data.data));
  }

  const getAnalysis = (text) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(
            {
                document: {
                    text
                }
            }
        )
    };
    fetch(EMOTNTRAIT_API, requestOptions)
        .then(response => response.json())
        .then(data => setData(JSON.stringify(data.data)));
  }

  const getDis = (text) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(
            {
                document: {
                    text
                }
            }
        )
    };
    fetch(DISAMBIGUTY_API, requestOptions)
        .then(response => response.json())
        .then(data => setData(JSON.stringify(data.data)));
  }

  const getPropSe = (text) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(
            {
                document: {
                    text
                }
            }
        )
        
    };
    fetch(PROPSENT_API, requestOptions)
        .then(response => response.json())
        .then(data => setData(JSON.stringify(data.data)));


        
  }

  const getPii = (text) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(
            {
                document: {
                    text
                }
            }
        )
    };
    fetch(PII_API, requestOptions)
        .then(response => response.json())
        .then(data => setData(JSON.stringify(data.data)));
  }

  const getWri = (text) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },

        body: JSON.stringify(
            {
                document: {
                    text
                }
            }
        )
        
       
    };
    fetch(WRITE_API, requestOptions)
        .then(response => response.json())
        .then(data => setData(JSON.stringify(data.data)));
  }

  const getRel = (text) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(
            {
                document: {
                    text
                }
            }
        )
    };
    fetch(REL_API, requestOptions)
        .then(response => response.json())
        .then(data => setData(JSON.stringify(data.data)));
  }
 

  return (
      
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <Button variant="contained" color="secondary" onClick={SpeechRecognition.startListening}>Start</Button>
      <Button variant="contained" color="secondary" onClick={SpeechRecognition.stopListening}>Stop</Button>
      <Button  variant="contained" color="secondary" onClick={resetTranscript}>Reset</Button>
      <p>{transcript}</p>
      <Button  variant="contained" color="secondary" onClick={() => getAnalysis(transcript)}>
          behaviourtraits
      </Button>
     
      
      <Button variant="contained" color="secondary" onClick={() => {getDis(transcript);toggleData3()}}>
          Disambiguity
      </Button>
      {data3 &&<div> <p>{JSON.stringify(data.knowledge)}</p></div>}
      <Button variant="contained" color="secondary" onClick={() =>{getSenti(transcript);toggleData1()}}>
          FullSentiment
          </Button>
          {data1 &&<div> <p>{JSON.stringify(data.sentiment)}</p></div>}
      <Button variant="contained" color="secondary" onClick={() => getPii(transcript)}>
          PII
      </Button>
      <Button variant="contained" color="secondary" onClick={() => getWri(transcript)}>
         WRITEPRINT
      </Button> <Button variant="contained" color="secondary" onClick={() => {getRel(transcript);toggleData2()}}>
         RELATIONS
         
      </Button>
      {data2 &&<div> <p>{JSON.stringify(data.relations)}</p></div>}
      {/* <JSONPretty data={data.data.sentiment}></JSONPretty> */}

      {/* <JSONPretty data={data.sentiment}></JSONPretty> */}
      
       <JSONPretty data={data}></JSONPretty>
      
     
    </div>
  
  );
};
export default SpeechRecog;
