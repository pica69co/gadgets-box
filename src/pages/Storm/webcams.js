const { REACT_APP_WINDY_WEBCAM_URL, REACT_APP_WINDY_API_KEY } = process.env;
//const coordinates{lat:-75.959?7.896, long:-74.751,6}
//request for webcams from windy.com


const FetchWebcams = async () => {
    try {
        //console.log('key', REACT_APP_WINDY_API_KEY);
        const api_url = REACT_APP_WINDY_WEBCAM_URL
      //console.log('api',api_url);

        const response = await fetch(api_url,
            { 
            method: 'GET',
            headers: {
            "x-windy-api-key":REACT_APP_WINDY_API_KEY 
            }
        });
        const data = await response.json();
        console.log(data)
            return data;
        } catch (error) {
            console.log(error.message);
        }
        
    };
    console.log(FetchWebcams())
export default FetchWebcams;