export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
            <h3>A Little about me</h3>
              <p>Hi, I am Parth Donga, a 24 years old Student living in Kitchener, Ontario. I am pursuing web design and development course at conestoga college, Canada. I am also a full-stack developer, in other words, pretty good at searching stackoverflow. I have done Computer engineering from GEC-Modasa at Gujarat, India. When I am not studying, I play guitar. I live and breathe product management every day, with a mask on.</p>
              <h3>I build value by design.</h3>
              <div className="list-style">
                <div className="col-xs-12">
                  <ul>
                  <li >I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.</li>
                  <li>
                  I have worked with small, agile teams on skunkworks projects and larger development teams with product lifecycles spanning my college years.
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
