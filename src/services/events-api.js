import tokenService from "../utils/tokenService"
const BASE_URL = '/api/events';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function getMyEvents() {
    return fetch(`${BASE_URL}/myevents`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer 
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}


export function create(evt) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json',
        // Add this header - don't forget the space after Bearer 
        'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(evt)
    }).then(res => res.json());
}

export function update(evt) {
    return fetch(`${BASE_URL}/${evt._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer 
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(evt)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer 
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}