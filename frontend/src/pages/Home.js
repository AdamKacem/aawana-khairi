import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  const [file, setFile] = useState();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);

  const uploadImage = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:3000/upload", formData)
      .then((res) => console.log(res));
  };

  return (
    <div>
      Home
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={uploadImage}>Upload</button>

        {workouts &&
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};
export default Home;
