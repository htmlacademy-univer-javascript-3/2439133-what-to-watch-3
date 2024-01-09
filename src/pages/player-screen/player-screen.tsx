import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../appDispatch';
import {useEffect} from 'react';
import {getFilmAction} from '../../store/api-actions';
import {useSelector} from 'react-redux';
import {State} from '../../store/reducer';
import {VideoPlayer} from '../../components/video-player';


function PlayerScreen(){
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilmAction(id ?? ''));
  },[id, dispatch]);

  const film = useSelector((state:State) => state.currentFilm);

  return(
    <div className="player">
      <VideoPlayer src={film?.videoLink} muted width={'100%'} height={'100%'} poster={film?.backgroundImage} autoplay/>

      <button type="button" className="player__exit">Exit</button>
    </div>
  );
}

export default PlayerScreen;
