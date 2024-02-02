var temp,maxtemp,mintemp,desc,hum,main,day,night; //gobal variables
var x=["clear sky","few clouds","Scattered Cloud","tornado","shower rain","mist","thunderstorm","rain","snow","Haze","broken clouds","drizzle"]; //weather
var y=["images/s.png","images/c3.png","images/cloud1.png","images/to.png","images/f.webp","images/c6.webp","images/c2.png",
	"images/c4.webp","images/bc1.webp","images/cl5.png"];
var z=["images/mm.webp","images/m2.png","images/cloud1.png","images/to.png","images/f.webp","images/c6.webp","images/w9.webp",
	"images/w8.webp","images/bc1.webp","images/cl5.png","images/w10.jpg"];
function Weather(input) {
var city=input;
//alert(city);
var im=document.querySelector('#icon')//.src='images/m2.png';
var myurl="http://api.openweathermap.org/data/2.5/weather?";
var key="c9f24a1fbaab5cbf871801f6fb608f7d";
var url=myurl+"appid="+key+"&units=metric&q="+city;
//alert(url)
fetch(url)
.then(function(response){
	console.log(response);
	return response.json();
})
.then(function(data){
	console.log(data);
	temp=data.main.temp;
	document.querySelector('#deg').innerHTML=Math.round(temp)+"&deg;c";
	mintemp=data.main.temp_min;
	document.querySelector('#min').innerHTML=Math.round(mintemp)+"&deg;c";
	maxtemp=data.main.temp_max;
	document.querySelector('#max').innerHTML="| "+Math.round(maxtemp)+"&deg;c";
	wind=data.wind.speed;
	document.querySelector('#wind').innerHTML=Math.round(wind)+" mph";
	hum=data.main.humidity;
	document.querySelector('#humidity').innerHTML=hum+" %";
	desc=data.weather[0].description;
	document.querySelector('#discr').innerHTML=desc;
	//condition
	var dn=data.dt;
	//alert(dn)
	day=data.sys.sunrise;
	night=data.sys.sunset;
	//alert(day+''+night);
	if (dn>=night) {
		switch(desc){
	case x[0]:
		im.src=z[0];
		break;
	case x[1]:
		im.src=z[1];
		break;
	case x[2]:
		im.src=z[2];
		break;
	case x[3]:
		im.src=z[3];
		break;
	case x[4]:
		im.src=z[4];
		break;
	case x[5]:
		im.src=z[5];
		break;
	case x[6]:
		im.src=z[6];
		break;
	case x[7]:
		im.src=z[7];
		break;
	case x[8]:
		im.src=z[8];
		break;
	case x[9]:
		im.src=z[9];
		break;
	case x[10]:
		im.src=z[2];
		break;
	case x[0]:
		im.src=z[5];
		break;
	}}
	else if(dn>=day){
			switch(desc){
	case x[0]:
		im.src=y[0];
		break;
	case x[1]:
		im.src=y[1];
		break;
	case x[2]:
		im.src=y[2];
		break;
	case x[3]:
		im.src=y[3];
		break;
	case x[4]:
		im.src=y[4];
		break;
	case x[5]:
		im.src=y[5];
		break;
	case x[6]:
		im.src=y[6];
		break;
	case x[7]:
		im.src=y[7];
		break;
	case x[8]:
		im.src=y[8];
		break;
	case x[9]:
		im.src=y[9];
		break;
	case x[10]:
		im.src=y[2];
		break;
	case x[0]:
		im.src=y[5];
		break;
	}

	}
})
.catch(err=>console.log(err));
}
function con(detector){
	if (detector=="fahrenheat") {
		var far=(temp*9/5)+32;
		document.querySelector('#deg').innerHTML=Math.round(far)+"&deg;f";
		var farmin=(mintemp*9/5)+32;
		document.querySelector('#min').innerHTML=Math.round(farmin)+"&deg;f";
		var farmax=(maxtemp*9/5)+32;
		document.querySelector('#max').innerHTML="| "+Math.round(farmax)+"&deg;f";
	}
	else{
		document.querySelector('#deg').innerHTML=Math.round(temp)+"&deg;c";
		document.querySelector('#min').innerHTML=Math.round(mintemp)+"&deg;c";
		document.querySelector('#max').innerHTML="| "+Math.round(maxtemp)+"&deg;c";
	}
}
function Get(){
	window.location.href ="https://openweathermap.org/api";
}