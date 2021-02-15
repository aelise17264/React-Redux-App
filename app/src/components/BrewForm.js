import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postBrew} from './actions';
import {v4 as uuid} from 'uuid'

const BrewForm = (props)=> {
const [visit, setNewVisit] = useState({
    id: uuid(),
    name: " ",
    brewery_type: " ",
    street: " ",
    city: " ",
    state: " ",
    postal_code: " ",
    country: " ",
    longitude: " ",
    latitude: " ",
    phone: " ",
    website_url: " ",
    updated_at: Date()
})

const handelChange = (event) => {
    setNewVisit({
        ...visit,
        [event.target.name]: event.target.value
    })
}

const onSubmit = (event) => {
    event.preventDefault();
    props.postBrew(visit)
    console.log(visit)
}

return(
    <div className='brew-form'>
        <form onSubmit={onSubmit}>
            <label>Name:<input
            placeholder='name'
            name='name'
            value={visit.name}
            onChange={handelChange}
            />  
</label>

         <label>Type of Brew:

             <input
            placeholder='type of brew'
            name='brewery_type'
            value={visit.brewery_type}
            onChange={handelChange}
            />
            </label>
            <label>Street Address:
             <input
            placeholder='street'
            name='street'
            value={visit.street}
            onChange={handelChange}
            />
            </label>
            <label>City:
             <input
            placeholder='city'
            name='city'
            value={visit.city}
            onChange={handelChange}
            />
            </label>
            <label>State:
             <input
            placeholder='state'
            name='state'
            value={visit.state}
            onChange={handelChange}
            />
            </label>
            <label>Zip Code:
             <input
            placeholder='zip code'
            name='postal_code'
            value={visit.postal_code}
            onChange={handelChange}
            />
            </label>
            <label className='coordinates'>Coordinates:
             <input
            placeholder='longitude coordinates'
            name='longitude'
            value={visit.longitude}
            onChange={handelChange}
            />
           ,
             <input
            placeholder='latitude coordinates'
            name='latitude'
            value={visit.latitude}
            onChange={handelChange}
            />
            </label>
            <label>Phone Number:
             <input
            placeholder='phone number'
            name='phone'
            value={visit.phone}
            onChange={handelChange}
            />
            </label>
            <label>Website:
             <input
            placeholder='website'
            name='website_url'
            value={visit.website_url}
            onChange={handelChange}
            />
            </label>
            <button type="submit">Add Your Favorite Brewery to Our List</button>

        </form>
    </div>
)

}

export default connect (null, {postBrew})(BrewForm)