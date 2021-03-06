const Event = require('../../models/event');

module.exports = {
    index,
    userIndex,
    show,
    create,
    delete: deleteOne,
    update
};

async function index(req, res) {
    const events = await Event.find({}).populate('user').exec(function (err, events) {
        res.status(200).json(events);
    });

}

async function userIndex(req, res) {
    console.log("Hello World", req.user)
    const events = await Event.find({ user: req.user._id });
    console.log("Halloween", events)
    res.status(200).json(events);
}

async function show(req, res) {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
}

async function create(req, res) {
    req.body.user = req.user._id
    console.log('HELLO!!', req.body)
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function deleteOne(req, res) {
    const deletedEvent = await Event.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedEvent);
}



async function update(req, res) {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedEvent);
}

