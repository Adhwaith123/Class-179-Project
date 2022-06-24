let corrdinates ={}
$(document).ready(function(){
    getCoordinates()
})
function getCoordinates(){
    let searchParamteres=new URLSearchParams(window.location.search)
    if (searchParamteres.has("source")&&searchParamteres.has("destination")){
        let source=searchParamteres.get("source")
        let destination=searchParamteres.get("destination")
        coordinates.source_lat=source.split(";")[0]
        coordinates.source_lon=source.split(";")[1]
        coordinates.destination_lat=source.split(";")[0]
        coordinates.destination_lon=source.split(";")[1]

    }
    else{
        alert("Coordinates Not Selected")
        window.history.back()
    }
}