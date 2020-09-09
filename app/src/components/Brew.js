import React from 'react';

function Brew({drink}){
return (
<div claassName='card'>
<h3>{drink.name}</h3>
<p>Address: {drink.street} {drink.city}, {drink.state} {drink.postal_code}</p>
<p>Type of Brew: {drink.brewery_type}</p>
<p>Call: {drink.phone}</p>
<p>Website: {drink.website_url}</p>
<p>Geocache: {drink.longitude}, {drink.latitude}</p>
</div>
)

}
export default Brew;