import { Link } from "react-router-dom";
import { FaArrowRight, FaPlane, FaCar, FaTrain, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../../../assets/css/index.css";
import FlightImage from "../../../../assets/images/flight_footer2.png"; // Import your flight photo
const PackageInfoCard = ({ index, packageData }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <section className="basic-timeline">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h1>How your trip will look like</h1>
                  </div>
                  <div className="card-body">
                    <ul className="timeline">
                    <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">


                          <div class="card card-developer-meetup">


                            <div class="card-body">

                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">1</h3>
                                </div>
                                <div class="my-auto">

                                  <p class="card-text mb-0">Arrival in Goa - Dabolim Airport</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar bg-light-primary rounded me-1">
                                    <div class="avatar-content">
                                      <i data-feather="calendar" class="avatar-icon font-medium-3"></i>
                                    </div>
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Sat, May 25, 2020</h6>
                                    <small>10:AM to 6:PM</small>
                                  </div>
                                  <span className="timeline-event-time d-flex px-5">

                                    <FaCar
                                      className="fa-icon-styling"
                                    />
                                    <FaArrowRight
                                      className="fa-icon-styling"
                                    />
                                    <FaPlane
                                      className="fa-icon-styling"
                                    />
                                  </span>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">


                          <div class="card card-developer-meetup">


                            <div class="card-body">

                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">2</h3>
                                </div>
                                <div class="my-auto">

                                  <p class="card-text mb-0">Agonda Beach</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar bg-light-primary rounded me-1">
                                    <div class="avatar-content">
                                      <i data-feather="calendar" class="avatar-icon font-medium-3"></i>
                                    </div>
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Sat, May 25, 2020</h6>
                                    <small>10:AM to 6:PM</small>
                                  </div>
                                  <span className="timeline-event-time d-flex px-5">

                                    <FaCar
                                      className="fa-icon-styling"
                                    />
                                    <FaArrowRight
                                      className="fa-icon-styling"
                                    />
                                    <FaPlane
                                      className="fa-icon-styling"
                                    />
                                  </span>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">


                          <div class="card card-developer-meetup">


                            <div class="card-body">

                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">3</h3>
                                </div>
                                <div class="my-auto align-items-center
                                ">

                                  <p class="card-text mb-0">Dudhsagar Falls</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar bg-light-primary rounded me-1">
                                    <div class="avatar-content">
                                      <i data-feather="calendar" class="avatar-icon font-medium-3"></i>
                                    </div>
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Sat, May 25, 2020</h6>
                                    <small>10:AM to 6:PM</small>
                                  </div>
                                  <span className="timeline-event-time d-flex px-5">

                                    <FaCar
                                      className="fa-icon-styling"
                                    />
                                    <FaArrowRight
                                      className="fa-icon-styling"
                                    />
                                    <FaPlane
                                      className="fa-icon-styling"
                                    />
                                  </span>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">


                          <div class="card card-developer-meetup">


                            <div class="card-body">

                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">4</h3>
                                </div>
                                <div class="my-auto">

                                  <p class="card-text mb-0">Cavelossim Beach</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar bg-light-primary rounded me-1">
                                    <div class="avatar-content">
                                      <i data-feather="calendar" class="avatar-icon font-medium-3"></i>
                                    </div>
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Sat, May 25, 2020</h6>
                                    <small>10:AM to 6:PM</small>
                                  </div>
                                  <span className="timeline-event-time d-flex px-5">

                                    <FaCar
                                      className="fa-icon-styling"
                                    />
                                    <FaArrowRight
                                      className="fa-icon-styling"
                                    />
                                    <FaPlane
                                      className="fa-icon-styling"
                                    />
                                  </span>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">


                          <div class="card card-developer-meetup">


                            <div class="card-body">

                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">5</h3>
                                </div>
                                <div class="my-auto">

                                  <p class="card-text mb-0">Arriving at Indira Gandhi International airport</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar bg-light-primary rounded me-1">
                                    <div class="avatar-content">
                                      <i data-feather="calendar" class="avatar-icon font-medium-3"></i>
                                    </div>
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Sat, May 25, 2020</h6>
                                    <small>10:AM to 6:PM</small>
                                  </div>
                                  <span className="timeline-event-time d-flex px-5">

                                    <FaCar
                                      className="fa-icon-styling"
                                    />
                                    <FaArrowRight
                                      className="fa-icon-styling"
                                    />
                                    <FaPlane
                                      className="fa-icon-styling"
                                    />
                                  </span>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default PackageInfoCard;
