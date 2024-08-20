import axios, { AxiosInstance } from "axios"

function createInstance(): AxiosInstance {
	return axios.create({
		baseURL: 'http://localhost:5151/api',
		headers: {
			'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsemRsdXZycDAwMDAxMjBiY2gzNno1cmMiLCJpYXQiOjE3MjQxNzI0MDEsImV4cCI6MTcyNDE3NjAwMX0.LIMSSE-5em3ud6cIugFMO6fs6mk4v4L7M4js-M1oVUg`
		}
	})
}

export const baseInstance = createInstance()
