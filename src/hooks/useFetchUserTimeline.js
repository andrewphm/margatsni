import apiCalls from 'src/apiCalls';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function useFetchUserTimeline() {
  const user = useSelector((state) => state.user.currentUser);
  const [timeline, setTimeline] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTimelinePhotos = async () => {
      try {
        const { data: timelinePosts } = await apiCalls.fetchTimeline(
          user.username
        );
        setTimeline(() => timelinePosts);
      } catch (error) {
        console.log(error);
        setError(() => true);
      }
    };

    getTimelinePhotos();
  }, [user]);

  return { timeline, error };
}
