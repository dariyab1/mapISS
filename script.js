let map = L.map('iss_loc').setView([0, 0], 1); // 0 lat and long, no zoom zoom =1;


   const marker = L.marker([0, 0]).addTo(map); // this makes the marker starting at 0,0


    //we need the attribution as stated on the leaflet page
    const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


    // not a valid URL, more of a format
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
 
    //now we add the tiles to our map
    tiles.addTo(map);

       
        const source="https://api.wheretheiss.at/v1/satellites/25544";


        async function getLoc(){
            const response=await fetch(source);
            const data = await response.json();
            const {latitude, longitude, velocity}= data;
            document.getElementById("lat").textContent = "latitude:"+latitude;
            document.getElementById("lon").innerText = "longitude:"+longitude;
            document.getElementById("vel").innerText = "velocity:" +velocity;
            L.marker([latitude, longitude]).addTo(map);
            marker.setLatLng([latitude, longitude]);
            map.setView([latitude, longitude],5);
        }
        // getLoc();

        setInterval(getLoc, 2000);