module.exports = {
    displayname : 'Fritbot Funbox',
    description : 'Collection of other awesome modules.',

    children : [
        require('fb-opt-facts'),
        require('fb-opt-google'),
        require('fb-opt-quotes'),
        require('fb-opt-stocks'),
        require('fb-opt-weather')
    ]
};