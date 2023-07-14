

const AboutContent = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-4'>
          <div className='card mt-4 border-0'>
            <img
              src='../assets/Coconut-Oil_1L_advitise.jpg'
              className='card-img-top'
              alt='Card'
              style={{ objectFit: "contain", height: "370px" }}
            />
          </div>
        </div>
        <div className='col-12 col-md-7 mt-5'>
          <div>
            <h5 className='about-heading green fw-bold'>About</h5>
            <p className='about-paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis aliquet nunc, in dictum lectus. Nullam feugiat est auctor
              nisi dictum placerat. Curabitur eget erat eu arcu lobortis
              scelerisque vel id dui. Duis a ullamcorper massa, vitae
              pellentesque lorem. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae; Nullam efficitur
              tristique est, vitae scelerisque mauris convallis nec. Sed porta
              efficitur erat vel viverra. Nullam non risus nec felis efficitur
              commodo. Duis in dolor vel ligula suscipit laoreet. Sed sagittis
              odio eu nibh hendrerit, ut aliquam elit lobortis. Duis ac ex
              nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
