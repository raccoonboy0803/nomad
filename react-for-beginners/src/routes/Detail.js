import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>{detail?.title}</h1>
      <img src={detail?.large_cover_image} alt="detailImg" />
      <p>{detail?.description_full}</p>
    </div>
  );
}
export default Detail;
