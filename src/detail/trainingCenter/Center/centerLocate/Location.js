/* global kakao */
import './Location.scss';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Map = ({ address, place }) => {
  useEffect(() => {
    let container = document.getElementById('map');
    let option = {
      center: new kakao.maps.LatLng(35.85133, 127.71),
      level: 3,
    }

    let map = new kakao.maps.Map(container, option);

    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, (result, status) => {
      if (status === 'OK') {
        const locate_coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        const marker = new kakao.maps.Marker({
          map: map,
          position: locate_coords,
        })

        const infoWindow = new kakao.maps.InfoWindow({
          content: `<strong style = font-size:1.5rem;display:block;width:150px;text-align:center;padding:6px 0;>${place}</strong>`
        });

        infoWindow.open(map, marker);
        map.setCenter(locate_coords);
      }
    })

    console.log('loading kakakomap');
  }, [address, place])

  return (
    <figure id="map"></figure>
  )
}
const LocateBox = ({ locateInfo, title }) => {
  return (
    <div className="locate_box">
      <div className="left">
        <Map address={locateInfo[1].contents} place={title} />
      </div>
      <div className="right">
        <ul className="locate_info">
          {locateInfo.map(it => {
            return (
              <li key={it.id}>
                <strong>{it.title}</strong>
                <span>{it.contents}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const Location = () => {
  const data = useSelector(state => state.train);
  const params = useParams();
  const locationData = data[params.id - 1];
  return (
    <section className="location">
      <div className="container">
        {console.log(locationData)}
        <div className="title_box">
          <h3>오시는 길</h3>
        </div>
        <h4>{locationData.title}</h4>
        <LocateBox locateInfo={locationData.locate_info} title={locationData.title} />
      </div>
    </section>
  )
}

export default Location;