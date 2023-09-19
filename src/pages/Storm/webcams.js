const { REACT_APP_WINDY_WEBCAM_URL, REACT_APP_WINDY_API_KEY } = process.env;
//const coordinates{lat:-75.959?7.896, long:-74.751,6}
//request for webcams from windy.com


export const FetchWebcams = async () => {
    try {
        const api_url = REACT_APP_WINDY_WEBCAM_URL
        const response = await fetch(api_url,
            { 
            method: 'GET',
            headers: {
            "x-windy-api-key":REACT_APP_WINDY_API_KEY 
            }
        });
        const data = await response.json();
        //console.log(data)
            return data;
        } catch (error) {
            console.log(error.message);
        }
        
    };

export const FetchWebcamsById = async (webcamId) => {
    try {
        const api_url = REACT_APP_WINDY_WEBCAM_URL + "/" + webcamId + "?lang=en&include=images"
        console.log(api_url);
        const response = await fetch(api_url,
            { 
            method: 'GET',
            headers: {
            "x-windy-api-key":REACT_APP_WINDY_API_KEY 
            }
        });
        const data = await response.json();
        //console.log(data)
            return data;
        } catch (error) {
            console.log(error.message);
        }
    };    
