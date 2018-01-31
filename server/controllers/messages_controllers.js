let messages = [];
let id = 0;


const create = (req, res, next) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).json(messages);
};

const read = (req, res, next) => {
    res.status(200).json(messages);
};

const update = (req, res, next) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages [messageIndex];

    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };
    rest.status(200).json(messages);
};

const destroy = (req, res, next) => {
    const deleteId = req.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).json(messages);
};

module.exports = { 
    read: read,
    create:  create,
    update: update,
    destroy: destroy
};