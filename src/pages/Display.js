import { useEffect, useState } from 'react';
import { supabase } from '../client';
import { useParams } from 'react-router-dom';

const DisplayPosts = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

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

  return (
    <div>
      <h1 style={{ color: 'blue' }}>Information</h1>
      <div>
        <h2 style={{ color: 'white' }}>{post.name}</h2>
        <h3 style={{ color: 'white' }}>{post.major}</h3>
        <h3 style={{ color: 'white' }}>Author: {post.grade}</h3>
      </div>
    </div>
  );
};

export default DisplayPosts;
