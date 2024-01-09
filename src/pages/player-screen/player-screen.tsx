import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getFilmAction} from '../../store/api-actions';
import {useSelector} from 'react-redux';
import {VideoPlayer} from '../../components/video-player/video-player';
import {Spinner} from '../../components/spinner/spinner';
import {State, useAppDispatch} from '../../types/state';


function PlayerScreen(){
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilmAction(id ?? ''));
  },[id, dispatch]);

  const film = useSelector((state:State) => state.currentFilm);

  if(film === undefined){
    return <Spinner/>;
  }

  return(
    <div className="player">
      <VideoPlayer src={film.videoLink} muted width={'100%'} height={'100%'} poster={film.backgroundImage} autoplay/>

      <button type="button" className="player__exit">Exit</button>
    </div>
  );
}

export default PlayerScreen;
