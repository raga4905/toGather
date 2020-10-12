const BASE_URL = '/api/events';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(evt) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(evt)
    }).then(res => res.json());
}

export function update(evt) {
    return fetch(`${BASE_URL}/${evt._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(evt)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}