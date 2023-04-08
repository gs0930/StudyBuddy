import React from 'react';
import './CreatePost.css'
import { supabase } from '../client'
import { useState } from 'react';

// event
const CreatePost = () => {

    const [post, setPost] = useState({ name: '', major: '', grade: '' });
    const handleSubmit = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crewmates')
            .insert(post)
            .select();
        //posts.title, author: posts.author, description: posts.description 
        window.location = "/";
        // const {name, value}=event.target;
        // setpost{(prevPost)=>{}}
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPost((prevPost) => ({ ...prevPost, [name]: value }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleInputChange} /><br />
                <br />

                <label for="major">Major</label><br />
                <input type="text" id="major" name="major" value={post.major} onChange={handleInputChange} /><br />
                <br />

                <label htmlFor="grade">Choose a grade: </label>
                <select id="grade" name="grade" value={post.grade} onChange={handleInputChange}>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost