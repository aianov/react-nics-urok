import { baseInstance } from '../base'
import { GetPostsParams } from './types'

export const getPosts = async (params: GetPostsParams) => {
	return await baseInstance.get('/post', {
		params: params
	})
}