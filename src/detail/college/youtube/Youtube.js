import './Youtube.scss';
import YouTube from 'react-youtube';

const YTP = ({ link }) => {
  const _onReady = (event) => {
    event.target.pauseVideo();
  }
  const opts = {
    height: '250',
    width: '400',
    playerVars: {
      autoplay: 0,
      controls: 0,
      fs: 1,
    }
  }
  return <YouTube videoId={link} opts={opts} onReady={_onReady} />
}

const Youtube = () => {
  const linkList = ['SPeYyFFwc04', 'UW9nKpfnbqw', 'XgugkSzzFn8', 'hqCQpvloYko'];

  return (
    <section className="youtube">
      <div className="container">
        <div className="semi_title">
          <h4>정토불교대학 미리 보실래요?</h4>
        </div>
        <ul className="player_list">
          {linkList.map(it => {
            return (
              <li key={linkList.indexOf(it)}>
                <YTP link={it} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Youtube;