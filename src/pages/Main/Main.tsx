import dayjs from 'dayjs'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { postsApiStore } from '../../store/api/posts-store/posts-store'
import s from './index.module.scss'

export const MainPage = observer(() => {
	const { getPostsAction, postsList } = postsApiStore

	useEffect(() => { getPostsAction() }, [])

	return (
		<div className={s.main}>
			<div className={s.posts}>
				{postsList?.map((post: any) => {
					console.log(post)
					return (
						<div
							className={s.post}
							key={post.id}
						>
							<span>Автор: {post.author.name}</span>
							<span>Заголовок поста: {post.title}</span>
							<span>Пост создан: {dayjs(post.createdAt).format('DD.MM.YYYY - HH:mm')}</span>
							<div className={s.hashtags}>
								{post.hashtags.map((hashtag: string, index: number) => (
									<span key={index}>#{hashtag}</span>
								))}
							</div>
						</div>
					)
				})}
			</div>

			<Outlet />

		</div>
	)
})