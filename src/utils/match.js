import { postModel } from "./../../DB/models/post.model.js"
// Function to find matching posts based on specific criteria
let matchingPosts=[];
export async function findMatchingPosts(post) {
  // Define your matching criteria based on the new post attributes
 
  const matchCriteria = {
    type: post.type === "Lost" ? "Found" : "Lost",
    height_relative_to_his_peers: post.height_relative_to_his_peers,
    skin_color: post.skin_color,
    hair_color: post.hair_color,
    hair_type: post.hair_type,
    eye_color: post.eye_color,
  };

  // Query the database to find matching posts
   matchingPosts = await postModel.find(matchCriteria);

  return matchingPosts;
}

 export async function findMatchingImages(post) {
 

  for(let i=0 ; i<matchingPosts.length ; i++)
  {

    if(matchingPosts[i].featureVector ==  post.featureVector)
    {

      return matchingPosts[i];


    }
    console.log(matchingPosts[i].featureVector ,  post.featureVector);

    return " Not Found";


  }

}


