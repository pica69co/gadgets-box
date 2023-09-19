//json with name, url, desc, description, and optional image
export const storm = [
    { 
        name:'Active Storms',
        path:'active-storms',
        url:[
            { 
                url:'http://sirocco.accuweather.com/sat_mosaic_640x480_public/ei/isaemex.gif',
                desc:'Satellite Image of Tropical Storm',
            },
            {
                url:'http://derecho.math.uwm.edu/models/quicklook-gtwo.png',
                desc:'Currently Active Tropical Systems & Investigation Areas',
            }
        ],
        description:'',
        image:''
    },
    { 
        name:'Conditions in the Atlantic Ocean',
        path:'conditions-atlantic',
        url:[
            {
                url:'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-TAW-GEOCOLOR-900x540.gif',
                desc:'Satellite images of the Atlantic Ocean',
            },
            {
                url:'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-GEOCOLOR-625x375.gif',
                desc:'',
            },
            {
                url:'http://derecho.math.uwm.edu/models/quicklook-gtwo.png',
                desc:'',
            },
            {
                url:'http://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png',
                desc:'',
            },
            // {
            //     url:'http://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png',
            //     desc:'',
            // },
            // {
            //     url:'http://www.nhc.noaa.gov/xgtwo/two_atl_5d0.png',
            //     desc:'',
            // },
            // {
            //     url:'https://www.nhc.noaa.gov/storm_graphics/AT13/refresh/AL132022_5day_cone_no_line_and_wind+png/114708_5day_cone_no_line_and_wind.png',
            //     desc:'',
            // },
            // {
            //     url:'http://weather.cod.edu/data/satellite/global/atlantic/current/atlantic.14.jpg',
            //     desc:'',
            // },
            // {
            //     url:'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/14/900x540.jpg',
            //     desc:'',
            // },
            // {
            //     url:'http://tropic.ssec.wisc.edu/real-time/atlantic/images/irng8.GIF',
            //     desc:'',
            // },
            // {
            //     url:'http://tropic.ssec.wisc.edu/real-time/atlantic/images/xxirg8bbm.jpg',
            //     desc:'',
            // },
            // {
            //     url:'http://weather.cod.edu/data/satellite/regional/gulf/current/gulf.14.jpg',
            //     desc:'',
            // },
            // {
            //     url:'http://tropic.ssec.wisc.edu/real-time/europe/images/irnm7.GIF',
            //     desc: 'Satellite image of the East Atlantic and Africa (infrared image)',
            // },
            // {

            //     url:'http://weather.cod.edu/data/satellite/global/atlantic/current/atlantic.02.jpg',
            //     desc: 'Visible satellite image of the Atlantic',
            // },
            // {

            //     url:'http://tropic.ssec.wisc.edu/real-time/atlantic/images/xxwvg8bbm.jpg',
            //     desc:'Atlantic water vapor image',
            // },
            // {

            //     url:'http://sirocco.accuweather.com/sat_mosaic_640x480_public/ei/isaehatl.gif',
            //     desc:'Atlantic Ocean Satellite Animation',
            // },
            // {

            //     url:'http://tropic.ssec.wisc.edu/real-time/mtpw2/webAnims/tpw_nrl_colors/natl/mimictpw_natl_latest.gif',
            //     desc:'Total precipitable water in the Atlantic Ocean',
            // },
            // {

            //     url:'http://www.ssd.noaa.gov/PS/TROP/DATA/RT/SST/ATL/20.jpg',
            //     desc:'Sea surface temperature, NOAA analysis (SST/SST)',
            // },
            // {

            //     url:'http://tropic.ssec.wisc.edu/real-time/sal/g16split/g16split.jpg',
            //     desc:'Saharan dust in the Atlantic Ocean, CIMSS analysis',
            // },
            // {

            //     url:'http://tropic.ssec.wisc.edu/real-time/sal/splitE.jpg',
            //     desc:'Saharan dust in the Atlantic Ocean, CIMSS analysis',
            // },
            // {

            //     url:'http://www.ssd.noaa.gov/PS/TROP/TCFP/data/current/al_rCUMP_048.gif',
            //     desc:'Probability of cyclone formation during the next 48 hours (current conditions)',
            // },
            // {

            //     url:'http://www.nhc.noaa.gov/tafb_latest/danger_atl_latestBW.gif',
            //     desc:'Probability of cyclone formation during the next 48 hours (current conditions)',
            // },
        ],
        description:'',
        image:''

    },
    { 
        name:'Conditions in the Pacific Ocean',
        path:'conditions-pacific',
        url: [
            // {
            //     url:'http://derecho.math.uwm.edu/models/quicklook-gtwo.png',
            //     des:'Currently Active Tropical Systems & Investigation Areas',

            // },
            {

                url:'https://www.cpc.ncep.noaa.gov/products/precip/CWlink/ghaz/gth_full.png',
                des:'Global Tropics hazards Outlook',
            },
            {

                url:'http://www.nhc.noaa.gov/xgtwo/two_pac_0d0.png',
                des:'Active tropical systems and probability of cyclone formation during the next 48 hours in the Eastern Pacific',
            },
            {

                url:'http://www.nhc.noaa.gov/xgtwo/two_pac_2d0.png',
                des:'Two Day Graphical Weather Outlook / National Hurricane Center Miami, Florida',
            },
            // {
            // url:'http://www.nhc.noaa.gov/xgtwo/two_pac_5d0.png',
            // des:'Active tropical systems and probability of cyclone formation during the next 5 days in the Eastern Pacific',
            // },
            // {

            //     url:'http://images.intellicast.com/WxImages/CustomGraphic/tgepac1.gif',
            //     des:'Current status of active tropical cyclones in the Pacific and possible trajectory and predicted intensity, with alerts, watches, warnings and potential for tropical storm and hurricane winds (official information from the latest bulletin)',
            // },
            // {

            //     url:'http://tropic.ssec.wisc.edu/real-time/eastpac/images/xxirg9bbm.jpg',
            //     des:'',
            // },
            {

                url:'http://sirocco.accuweather.com/sat_mosaic_640x480_public/ei/isaehpac.gif',
                des:'East Pacific Satellite Animation',
            },
            {

                url:'http://www.ssd.noaa.gov/PS/TROP/gglcontent/epac.gif',
                des:'Pacific infrared satellite (animation)',
            },
            // {

            //     url:'http://www.ssd.noaa.gov/PS/TROP/TCFP/data/current/ep_cCUMP_048.gif',
            //     des:'Probability of cyclone formation by weather during the next 48 hours',
            // },
            // {

            //     url:'http://tropic.ssec.wisc.edu/real-time/mimic-tpw/epac/anim/latest72hrs.gif',
            //     des:'Total precipitable water in the Eastern Pacific',
            // },
            // {

            //     url:'http://tropic.ssec.wisc.edu/real-time/mtpw2/webAnims/tpw_nrl_colors/epac/mimictpw_epac_latest.gif',
            //     des:'',
            // },
            // {

            //     url:'http://www.ssd.noaa.gov/PS/TROP/DATA/RT/SST/PAC/20.jpg',
            //     des:'Sea surface temperatures, NOAA analysis (SST/SST)',
            // },
        ],
        description:'',
        image:''
    },
    { 
        name:'Interactive forecast models',
        path:'interactive-forecast-models',
        url: [
            {
            url:'https://embed.windy.com/embed2.html?lat=-4.245&lon=-83.584&zoom=4&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=true&detailLat=10.963889,&detailLon=-74.796387.&metricWind=km%2Fh&metricTemp=%C2%B0C',
            desc:'windyty + Weather Version for the Atlantic Ocean, the Pacific Ocean and the rest of the world.',
            }
        ],
        description:'',
        image:''
    },
    { 
        name:'Conditions in Central America',
        path: 'conditions-central-america',
        url: [
            {

                url:'http://sirocco.accuweather.com/sat_mosaic_640x480_public/ei/isaecam.gif',
                desc:'Infrared satellite of Central America (animation)',
            },
            {

                url2:'http://sirocco.accuweather.com/sat_mosaic_640x480_public/IR/isacam.gif',
                desc2:'Satellite image of Mexico and Central America',
            },
        ],
        description:'',
        image:''
    },
    // { 
    //     name:'satellite images',
    //     description:'',
    //     image:''
    // },
    { 
        name:'Conditions in the Caribbean Sea',
        path:'conditions-caribbean',
        url: [
            {

                url:'http://www.myfoxhurricane.com/custom/tropical/caribbean_mer_enh_ir_sat_1.jpg',
                desc:'satellite Image of the Caribbean Sea',
            },
            {

                url:'http://sirocco.accuweather.com/sat_mosaic_640x480_public/EI/isaecar.gif',
                desc:'satellite (Infrared) Image of the Caribbean Sea (animated)',
            },
            {

                url:'http://sirocco.accuweather.com/sat_mosaic_640x480_public/IR/isacar.gif',
                desc:'Satellite image of the Caribbean (animated)',
            },
            {

                url:'http://sirocco.accuweather.com/sat_mosaic_640x480_public/ei/isaecatl.gif',
                desc:'Infrared satellite of Venezuela, Colombia and the Caribbean (animation)',
            },
            {

                url:'http://www.nhc.noaa.gov/tafb_latest/CAR_latest.gif',
                desc:'Surface analysis of the Caribbean Sea',
            },
        ], 
        description:'',
        image:''
    },
    // { 
    //     name:'Conditions in Mexico',
    //     url:'',
    //     description:'',
    //     image:''
    // },
    { 
        name:'world maps',
        path:'world-maps',
        url: [
            {

                url:'http://www.ssd.noaa.gov/PS/TROP/TCFP/data/current/gl_rCUMP_048.gif',
                desc:'Probability of cyclone formation within 48 hours in the world',
            },
            {

                url:'http://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_update/gsstanim.gif',
                desc:'Sea surface temperatures and anomalies (animation)',
            },
            {

                url:'http://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_update/gsstanim.gif',
                desc:'Sea surface temperatures and anomalies (celsius) ',
            },
            {

                url:'http://tropic.ssec.wisc.edu/real-time/mimic-tpw/global/anim/latest72hrs.gif',
                desc:'Total precipitable water in the world',
            },
            
        ],
        description:'',
        image:''
    },
    { 
        name:'Satellite images for cyclone tracking',
        path:'satellite-images',
        url: [
            {
                url:'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-TAW-02-900x540.gif',
                desc:'Satellite images of the Atlantic Ocean',

            },
            {
                url:'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-TAW-02-900x540.gif',
                desc:'',

            },
            {
                
                url:'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-TAW-13-900x540.gif',
                desc:'',
            },
            // {

            //     url:'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CAR-GEOCOLOR-1000x1000.gif',
            //     desc:'',
            // },
            // {

            //     url:'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CAR-13-1000x1000.gif',
            //     desc:'',  
            // },
        ],
        description:'',
        image:''
    },
        
]