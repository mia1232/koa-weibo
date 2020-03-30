function _formatUserPicture(obj) {
    if(obj.pciture ===  null ) {
        obj.picture = 'xxx'
    }
    return obj
}


function formatUser(list) {
    if(list == null) {
        return;
    }

    if(list instanceof Array) {
        return list.map(_formatUserPicture);
    }

    return _formatUserPicture(list);    
}

module.exports = {
    formatUser
}