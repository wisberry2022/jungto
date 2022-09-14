import './Book.scss';
import { Link } from 'react-router-dom';

const BookIntroduce = ({ bookData }) => {

  return (
    <div className="container">
      <div className="book_box">
        {bookData.map((el, idx) => {
          return (
            <div key={idx} className="book_intro">
              <Link to="">
                <figure className={`bg_set itm0${idx + 1}`}></figure>
                <strong>{el.title}</strong>
                <span>{el.year}</span>
              </Link>
            </div>
          )
        })}
      </div>
      <Link to="" className="btn"><span>법륜스님 저서 더 보기</span> <i className="xi-angle-right"></i></Link>
    </div>
  )
}

const Book = () => {
  const bookInfo = [
    { title: '나는 괜찮은 사람입니다', year: '2020' },
    { title: '지금 이대로 좋다', year: '2019' },
    { title: '스님, 왜 통일을 해야 하나요', year: '2018' },
    { title: '야단법석2', year: '2017' },
    { title: '법륜스님의 행복', year: '2016' },
    { title: '야단법석', year: '2015' },
    { title: '지금 여기, 깨어있기', year: '2014' },
    { title: '인생수업', year: '2013' },
  ];

  return (
    <section className="book">
      <h2 className="sub_title">법륜스님 저서</h2>
      <BookIntroduce bookData={bookInfo} />
    </section>
  )
}

export default Book;