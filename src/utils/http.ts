/* eslint-disable no-mixed-spaces-and-tabs */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import router from '../router/index'
import { message } from 'ant-design-vue'
console.log(process.env.VUE_APP_BASE_API, 'baseapi')
const defaultOptions: AxiosRequestConfig = {
    baseURL: process.env.VUE_APP_BASE_API,
    withCredentials: true

}

class Http {
    protected readonly instance: AxiosInstance

    constructor(options?: AxiosRequestConfig) {
    	this.instance = axios.create({ ...defaultOptions, ...options })
    	this.initializeRequestInterceptor()
    	this.initializeResponseInterceptor()
    }

    private initializeRequestInterceptor() {
    	this.instance.interceptors.request.use(
    	    this.handleRequest,
    		this.handleError
    	)
    }

    private initializeResponseInterceptor() {
    	this.instance.interceptors.response.use(
    		this.handleResponse,
    		this.handleError
    	)
    }

    private handleRequest(requestConfig: AxiosRequestConfig) {
    	return requestConfig
    }

    private handleResponse(response: AxiosResponse) {
    	const { data } = response
    	const { ec, em } = data

    	if (ec === 200) {
    		return Promise.resolve(data)
    	} else if (ec === -103 || ec === -106) {
    		router.push({ path: '/login' })
    		message.warning('请先登录')
    		return Promise.resolve(data)
    	} else {
            message.error(em)
    		return Promise.reject(new Error(em))
    	}
    }

    private handleError(error: Error) {
    	return Promise.reject(error)
    }

    request<T=any>(config: AxiosRequestConfig): Promise<T> {
    	return new Promise((resolve, reject) => {
    		this.instance
    			.request<T, AxiosResponse>(config)
    			.then((res: AxiosResponse<any>) => {
                    const { data } = res
    				resolve((data as unknown) as Promise<T>)
    			})
    			.catch((error: Error) => {
    				reject(error)
    			})
    	})
    }
}

const http = new Http()

export default http
