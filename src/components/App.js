import video from "../data/video.js";


function App() {
  console.log("Here's your data:", video);

  return (
    <div>
    <div className="App">
      <iframe
        width="919"
        height="525"
        src= {video.embedUrl}
        frameborder="0"
        allowfullscreen
      />
      <h1>{video.title}</h1>
      <p>{video.views} views | {video.createdAt}</p>
      <button type='button'> 👍 </button>  <button type='button'> 👎 </button> 
      <div>
      <button type='button'> Hide Comments </button>
      <h2> {video.comments.length} Comments</h2>
      
      <h3> {video.comments.map((user) => user.user)} </h3>
      <p> {video.comments.map((number) => number.comment)} </p>
      </div>
    </div>
       
        
    </div>
  );
}

export default App;
