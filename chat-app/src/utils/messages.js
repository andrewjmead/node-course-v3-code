const generateMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage
}