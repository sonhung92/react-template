import React from 'react';
import axiosClient from 'api/axios';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const getTodoAPI = async (_, id) => {
  const res = await axiosClient(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.data;
};

export function usePost(id = 1) {
  return useQuery(['post', id], getTodoAPI, {
    refetchOnWindowFocus: false,
    initialData: {},
    initialStale: true,
    onSuccess: () => {},
  });
}

const Other = () => {
  const post = usePost();
  return <pre>{JSON.stringify(post?.data)}</pre>;
};

const ReactQuery = () => {
  const [id, setId] = React.useState(1);
  const post = usePost(id);

  return (
    <div>
      <h1>ReactQuery</h1>
      {JSON.stringify(post?.data)}
      <Other />
      <button type="button" onClick={() => setId(id + 1)}>
        change id
      </button>
      <ReactQueryDevtools />
    </div>
  );
};

export default ReactQuery;
