import React from 'react';

function Brew({drink}){
return (
<div className='cardMaker'>
<h2><span>🍺</span>{drink.name}</h2>
<p>Address: {drink.street} {drink.city},</p>
<p> {drink.state} {drink.postal_code}</p>
<p>Type of Brew: {drink.brewery_type}</p>
<p>Call: {drink.phone}</p>
<a href={drink.website_url}> {drink.website_url}</a>
<p>Geocaching: {drink.longitude}, {drink.latitude}</p>
</div>
)

}
export default Brew;