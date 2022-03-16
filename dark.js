
            function changeMode(){
                var mybody = document.body;
                mybody.classList.toggle('mydark')
            }
            function closeDiv(){
                document.getElementById('coupon').style.visibility="hidden"
            }
            
            function test(){
                document.getElementById('coupon').style.visibility="visible"
            }
            
            
            // Geolocation and Weather
            let Geolocation=()=>{
              
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                    console.log("GeoLocation not supported.")
                }
            }
            
            let showPosition=(data)=>{
                let y = document.getElementById("weather");
                let z =  document.getElementById('icon')
                let lon=data.coords.longitude;
                let lat=data.coords.latitude;
                console.log(data);
                let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
               
                fetch(url)
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data);
                    data.list.map((item)=>{
                        console.log(item.temp.day)
                        y.innerText=`${item.temp.day}°C`;
                        z.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
                    })
                    
                })
            }
            Geolocation();
            
            