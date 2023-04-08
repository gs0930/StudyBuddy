// import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'
// import {useState} from 'react';
import React, { useState, useEffect } from 'react';



const EditPost = ({data}) => {
    

    // const {id} = useParams();
    
    // const post = data.filter(item => item.id === id)[0];
    // const { title, author, description } = post;
    // // const [title, setTitle] = useState(post.title);
    // // const [author, setAuthor] = useState(post.author);
    // // const [description, setDescription] = useState(post.description);
    // const updatePost = async (event) => {
    //     event.preventDefault();
    
    //     await supabase
    //     .from('Posts')
    //     .update({ title: post.title, author: post.author,  description: post.description})
    //     .eq('id', id);
    
    //     window.location = "/";
    // }
    const { id } = useParams();
    const [post, setPost] = useState({});
  
    useEffect(() => {
      async function fetchPost() {
        const { data: post, error } = await supabase
          .from('Crewmates')
          .select('*')
          .eq('id', id)
          .single();
  
        if (error) {
          console.error('Error fetching post:', error);
        } else {
          setPost(post);
        }
      }
  
      fetchPost();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { name, major, grade } = event.target.elements;
    
        await supabase
          .from('Crewmates')
          .update({ name: name.value, major: major.value, grade: grade.value })
          .eq('id', id);
    
        window.location = '/';
      };

      const deletePost = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Crewmates')
        .delete()
        .eq('id', id); 
    
        window.location = "http://localhost:3001/";
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" name="description" id="description" value={post.description} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton">Delete</button>
            </form> */}
             <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" defaultValue={post.name} required />

        <label htmlFor="major">Major</label>
        <input type="text" id="major" name="major" defaultValue={post.major} required />

        <label htmlFor="grade">Choose a grade: </label>
                <select id="grade" name="grade" defaultValue={post.grade} required >
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select>
         

        <button type="submit">Update Post</button>
        <button className="deleteButton" onClick={deletePost}>Delete</button>

      </form>
        </div>
    )
}

export default EditPost