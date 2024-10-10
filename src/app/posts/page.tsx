"use client"

// useSelector to fetch data
// useDispatch to execute actions
import { useSelector, useDispatch } from "react-redux"
import { addPost, deletePost } from "@/redux/slices/postSlice"
import styles from "./page.module.css"
import { useState } from "react"

export default function Posts() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    // fetch posts from state
    const posts = useSelector((state: any) => state.post);

    const handleRemove = (id: any) => {
        dispatch(deletePost(id));
        console.log(id)
        console.log(posts)
    }

    const handleAddPost = (e: any) => {
        e.preventDefault();
        // these are from the useState();
        if (!title || !description) return;

        const newPost = {
            id: Date.now(),
            title: title,
            description: description,
        }

        if (newPost) {
            dispatch(addPost(newPost));
            setTitle("");
            setDescription("");
        } else {
            throw new Error("Post not added, try again");
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleAddPost}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    className={styles.input}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button className={styles.button} onClick={() => console.log('button')}>Add New Post</button>
            </form>
            <h1 className={styles.heading}>Posts</h1>
            {posts ? (
                posts.map((post: any) => (
                    <div key={post.id} className={styles.post}>
                        <h3 className={styles.title}>{post.title}</h3>
                        <p className={styles.description}>{post.description}</p>
                        <button
                            className={styles.deleteButton}
                            onClick={() => handleRemove(post.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
}