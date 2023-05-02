import { MicroCMSQueries, createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.SECRET_SERVICE_DOMAIN,  
  apiKey: import.meta.env.SECRET_API_KEY,
});

export const getBlogs = async (queries:MicroCMSQueries) => {
  return await client.get({endpoint:'blogs',queries});
}

export const getBlogDetail = async (blogId:string,queries?:MicroCMSQueries) =>{
  return await client.get({endpoint:'blogs',queries})
}