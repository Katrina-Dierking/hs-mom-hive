import React, {useState} from 'react'
import { useDispatch} from "react-redux";
import './posts.scss'

import { postAdded } from "./postsSlice";
// import { selectAllUsers } from "../user/userSlice";

const AddPostForm = () => {

     const dispatch = useDispatch();

     const [title, setTitle] = useState("");
     const [content, setContent] = useState("");
    //  const [userId, setUserId] = useState("");

    //  const users = useSelector(selectAllUsers);

     const onTitleChanged = (e) => setTitle(e.target.value);
     const onContentChanged = (e) => setContent(e.target.value);
    //  const onAuthorChanged = (e) => setUserId(e.target.value);

     const onSavePostClicked = () => {
       if (title && content) {
         dispatch(
            postAdded(title, content)
         )
         setTitle("");
         setContent("");
       }
     };

    //  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    //  const usersOptions = users.map((user) => (
    //    <option key={user.id} value={user.id}>
    //      {user.name}
    //    </option>
    //  ));


    return (
        <section className="postForm">
            <h3>Add a New Post</h3>
            <form>
                <label htmlFor="postTitle">Post Title:</label>

                <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
                />

                <label htmlFor="postContent">Content:</label>

                <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                />

                <button 
                    type="button" 
                    onClick={onSavePostClicked} 
                >
                    Save Post
                </button>

            </form>
        </section>
    );
}
        
        export default AddPostForm
        // <label htmlFor="postAuthor">Author:</label>
        // <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
        // <option value=""></option>
        // {usersOptions}
        // </select>