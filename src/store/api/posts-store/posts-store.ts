
import { makeAutoObservable } from "mobx"
import { getPosts } from '../../../shared/api/post/api'
import { GetPostsParams } from '../../../shared/api/post/types'

class PostsApiStore {
	constructor() { makeAutoObservable(this) }

	postsList: any[] = []

	getPostsAction = async () => {
		try {
			const params: GetPostsParams = {
				tags: ['all'],
				from: 'trend'
			}
			const res = await getPosts(params)
			if (res?.data) {
				this.postsList = res?.data?.posts
			}
		} catch (err) { console.log(err) }
	}

}

export const postsApiStore = new PostsApiStore()