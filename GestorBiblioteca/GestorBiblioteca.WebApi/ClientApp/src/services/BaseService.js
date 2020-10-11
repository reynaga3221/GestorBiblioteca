const axios = require('axios');


// Defaults
axios.defaults.baseURL = '/api';

export default class BaseService {

    Get(endpoint, params) {
        if (params) {
            return axios.get(endpoint, { params: params });
        }

        return axios.get(endpoint);
    }

    GetResource(endpoint, resourceId) {
        return axios.get(endpoint + '/' + encodeURIComponent(resourceId));
    }


    Post(endpoint, item) {
        return axios.post(endpoint, item);
    }
    
    Put(endpoint, item) {
        return axios.put(endpoint, item);
    }

    Delete(endpoint, resourceId) {
        return axios.delete(endpoint + '/' + resourceId);
    }

    GetBlob(endpoint) {
        return axios({
            url: endpoint,
            method: 'GET',
            responseType: 'blob'
        });
    }

    //GetBlob(endpoint, params) {
    //    return axios({
    //        url: endpoint,
    //        params: params,
    //        method: 'GET',
    //        responseType: 'blob'
    //    });
    //}

    PostBlob(endpoint, file) {
        var formData = new FormData();
        formData.append("file", file);
        return axios.post(endpoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}