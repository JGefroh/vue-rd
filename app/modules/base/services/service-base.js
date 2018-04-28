import axios from 'axios/dist/axios'

//Provides standard communication protocol for API requests, including common tasks and parsing.
class ServiceBase {
  constructor(resourceName, resourceNamePlural) {
    this.config = {
      baseUrl: REPLACE_WITH_API_BASE_URL,
      resourceName: resourceName,
      resourceNamePlural: resourceNamePlural
    }
  }

  baseUrl() {
    return this.config.baseUrl + '/' + this.config.resourceNamePlural;
  }

  collectionUrl() {
    return this.baseUrl();
  }

  memberUrl(id) {
    return `${this.baseUrl()}/${id ? encodeURIComponent(id) : ''}`
  }

  create(data, params) {
    return axios.request({
      url: this.collectionUrl(),
      method: 'post',
      params: params,
      data: data,
      responseType: 'json'
    }).then(this.getDataPayload);
  }

  destroy(id, params) {
    return axios.request({
      url: this.memberUrl(id),
      method: 'delete',
      params: params,
      responseType: 'json'
    }).then(this.getDataPayload);
  }

  index(params) {
    return axios.request({
      url: this.collectionUrl(),
      method: 'get',
      params: params,
      responseType: 'json'
    }).then(this.getDataPayload);
  }

  show(id, params) {
    return axios.request({
      url: this.memberUrl(id),
      method: 'get',
      params: params,
      responseType: 'json'
    }).then(this.getDataPayload);
  }

  update(id, data, params) {
    return axios.request({
      url: this.memberUrl(id),
      method: 'put',
      params: params,
      data: data,
      responseType: 'json'
    }).then(this.getDataPayload);
  }

  getDataPayload(response) {
    return response.data;
  }

}

ServiceBase.queryCount = 0;

export default ServiceBase;
