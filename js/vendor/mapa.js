function iniciarMap(){
    var coord = {lat:-34.5866736 ,lng: -58.3938155};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16  ,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}