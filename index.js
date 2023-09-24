import propertyForSaleArr from '/properties/propertyForSaleArr'
import placeholderPropertyObj from '/properties/placeholderPropertyObj'

function getPropertyHtml(arr = placeholderPropertyObj) {
    return arr.map(({propertyLocation, priceGBP, roomsM2, comment, image}) => { 
        const surface = roomsM2.reduce((total, currentRoomM2)=>
            total + currentRoomM2, 0)
        return `<section class="card">
            <img src="/images/${image}">
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>${priceGBP}</h3>
                <p>${comment}</p>
                <h3>${surface} m2</h3>
            </div>
        </section> `}
    ).join("")
}

document.getElementById('container').innerHTML = getPropertyHtml()