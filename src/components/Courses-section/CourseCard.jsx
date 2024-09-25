const CourseCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, lesson, duration, tim, image } = props.item;

  return (
    <div className="single_course_item">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdYAWQN7ZmhiDUitDIINTlfr4-SIARpyjnh-nQPcIvwnXhyDw/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="ri-arrow-right-up-line float-end arrow"></i>
      </a>

      <div className="course_details">
        <h3 className="course_title mb-4">{title}</h3>

        <img
          src={image}
          style={{
            width: 100,
            height: 100,
          }}
        />

        <div>
          <br />
          <p className="lesson d-flex align-items-center gap-1 mb-0">
            {lesson}
          </p>
          <br />
          <h5 className="lesson d-flex align-items-center gap-1 mb-0">
            Duration: {duration}
          </h5>
          <p className="lesson d-flex align-items-center gap-1 mb-0">{tim}</p>

          <br />

          <p className="d-flex align-items-center gap-2">
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYAWQN7ZmhiDUitDIINTlfr4-SIARpyjnh-nQPcIvwnXhyDw/viewform?usp=sf_link">
              {" "}
              <button className="btn-sign_in">APPLY</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
