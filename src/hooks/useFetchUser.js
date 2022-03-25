import apiCalls from 'src/apiCalls';

import { useState, useEffect } from 'react';

export default function useFetchUser(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiCalls.fetchUser(username);

      setUserData(() => data);
    };

    fetchUser();
  }, [username]);

  return { userData };
}
