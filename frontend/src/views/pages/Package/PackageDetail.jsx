import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PackageService } from "../../../repositories";
import "../../../assets/css/pages/page-profile.css";
import "../../../assets/css/components.css";
import "../../../assets/css/components.min.css";
import Footer from "../../components/HomeComponent/Footer.jsx";
const PackageDetail = () => {
  const [packageDetail, setPackageDetail] = useState({});
  const { packageId } = useParams();

  useEffect(() => {
    // Fetch blog details  when the component mounts
    fetchPackageDetails();
  }, [packageId]);
  const fetchPackageDetails = () => {
    // Fetch blog details based on the id
    PackageService.find(packageId)
      .then((data) => {
        setPackageDetail(data);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
      });
  };
  return (
    <>
      <div className="content-wrapper container-xxl p-0">
        <div className="content-detached">
          <div className="content-body">
            <div id="user-profile">
              <div className="row">
                <div className="col-12">
                  <div className="card profile-header mb-2">
                    <img
                      className="card-img-top"
                      src={`/src/assets/uploads/packages/${
                        packageDetail.image || "default_package.jpg"
                      }`}
                      alt="Package Image"
                    />
                  </div>
                </div>
              </div>

              <section id="profile-info">
                <div className="row">
                  <div className="col-lg-8 col-12 order-1 order-lg-2">
                    <div className="card">
                      <div className="card-body">
                        <section class="basic-timeline">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="card">
                                <div class="card-header">
                                  <h1>How your trip will look like</h1>
                                </div>
                                <div class="card-body">
                                  <ul class="timeline">
                                    <li class="timeline-item">
                                      <span class="timeline-point timeline-point-indicator"></span>
                                      <div class="timeline-event">
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                          <h6>Day 1</h6>
                                          <span class="timeline-event-time">
                                            12 min ago
                                          </span>
                                        </div>
                                        <p>
                                          Invoices have been paid to the
                                          company.
                                        </p>
                                        <div class="d-flex flex-row align-items-center">
                                          <img
                                            class="me-1"
                                            src="../../../app-assets/images/icons/file-icons/pdf.png"
                                            alt="invoice"
                                            height="23"
                                          />
                                          <span>invoice.pdf</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="timeline-item">
                                      <span class="timeline-point timeline-point-secondary timeline-point-indicator"></span>
                                      <div class="timeline-event">
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                          <h6>Day 2</h6>
                                          <span class="timeline-event-time">
                                            45 min ago
                                          </span>
                                        </div>
                                        <p>
                                          Project meeting with john @10:15am.
                                        </p>
                                        <div class="d-flex flex-row align-items-center">
                                          <div class="avatar">
                                            <img
                                              src="../../../app-assets/images/avatars/12-small.png"
                                              alt="avatar"
                                              height="38"
                                              width="38"
                                            />
                                          </div>
                                          <div class="ms-50">
                                            <h6 class="mb-0">
                                              John Doe (Client)
                                            </h6>
                                            <span>CEO of Infibeam</span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="timeline-item">
                                      <span class="timeline-point timeline-point-success timeline-point-indicator"></span>
                                      <div class="timeline-event">
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                          <h6>Day 3</h6>
                                          <span class="timeline-event-time">
                                            2 hours ago
                                          </span>
                                        </div>
                                        <p class="mb-50">
                                          Click the button below to read
                                          financial reports
                                        </p>
                                        <button
                                          class="btn btn-outline-primary btn-sm"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapseExample"
                                          aria-expanded="true"
                                          aria-controls="collapseExample"
                                        >
                                          Show Report
                                        </button>
                                        <div
                                          class="collapse"
                                          id="collapseExample"
                                        >
                                          <ul class="list-group list-group-flush mt-1">
                                            <li class="list-group-item d-flex justify-content-between flex-wrap">
                                              <span>
                                                Last Year's Profit :{" "}
                                                <span class="fw-bold">
                                                  $20000
                                                </span>
                                              </span>
                                              <i
                                                data-feather="share-2"
                                                class="cursor-pointer font-medium-2"
                                              ></i>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between flex-wrap">
                                              <span>
                                                {" "}
                                                This Year's Profit :{" "}
                                                <span class="fw-bold">
                                                  $25000
                                                </span>
                                              </span>
                                              <i
                                                data-feather="share-2"
                                                class="cursor-pointer font-medium-2"
                                              ></i>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between flex-wrap">
                                              <span>
                                                {" "}
                                                Last Year's Commission :{" "}
                                                <span class="fw-bold">
                                                  $5000
                                                </span>
                                              </span>
                                              <i
                                                data-feather="share-2"
                                                class="cursor-pointer font-medium-2"
                                              ></i>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between flex-wrap">
                                              <span>
                                                {" "}
                                                This Year's Commission :{" "}
                                                <span class="fw-bold">
                                                  $7000
                                                </span>
                                              </span>
                                              <i
                                                data-feather="share-2"
                                                class="cursor-pointer font-medium-2"
                                              ></i>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between flex-wrap">
                                              <span>
                                                {" "}
                                                This Year's Total Balance :{" "}
                                                <span class="fw-bold">
                                                  $70000
                                                </span>
                                              </span>
                                              <i
                                                data-feather="share-2"
                                                class="cursor-pointer font-medium-2"
                                              ></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="timeline-item">
                                      <span class="timeline-point timeline-point-warning timeline-point-indicator"></span>
                                      <div class="timeline-event">
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                          <h6 class="mb-50">Day 4</h6>
                                          <span class="timeline-event-time">
                                            03:00 PM
                                          </span>
                                        </div>
                                        <p>
                                          Have to interview Katy Turner for the
                                          developer job.
                                        </p>
                                        <hr />
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                          <div class="d-flex flex-row align-items-center">
                                            <div class="avatar me-1">
                                              <img
                                                src="../../../app-assets/images/avatars/1-small.png"
                                                alt="Avatar"
                                                height="32"
                                                width="32"
                                              />
                                            </div>
                                            <span>
                                              <p class="mb-0">Katy Turner</p>
                                              <span class="text-muted">
                                                Javascript Developer
                                              </span>
                                            </span>
                                          </div>
                                          <div class="d-flex align-items-center cursor-pointer mt-sm-0 mt-50">
                                            <i
                                              data-feather="message-square"
                                              class="me-1"
                                            ></i>
                                            <i data-feather="phone-call"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="timeline-item">
                                      <span class="timeline-point timeline-point-danger timeline-point-indicator"></span>
                                      <div class="timeline-event">
                                        <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                          <h6>Day 5</h6>
                                          <span class="timeline-event-time">
                                            03:00PM
                                          </span>
                                        </div>
                                        <p>
                                          Develop an online store of electronic
                                          devices for the provided layout, as
                                          well as develop a mobile version of
                                          it. The must be compatible with any
                                          CMS.
                                        </p>
                                        <div class="d-flex justify-content-between flex-wrap flex-sm-row flex-column">
                                          <div>
                                            <p class="text-muted mb-50">
                                              Developers
                                            </p>
                                            <div class="d-flex align-items-center">
                                              <div class="avatar bg-light-primary avatar-sm me-50">
                                                <span class="avatar-content">
                                                  A
                                                </span>
                                              </div>
                                              <div class="avatar bg-light-success avatar-sm me-50">
                                                <span class="avatar-content">
                                                  B
                                                </span>
                                              </div>
                                              <div class="avatar bg-light-danger avatar-sm">
                                                <span class="avatar-content">
                                                  C
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="mt-sm-0 mt-1">
                                            <p class="text-muted mb-50">
                                              Deadline
                                            </p>
                                            <p class="mb-0">20 Dec 2077</p>
                                          </div>
                                          <div class="mt-sm-0 mt-1">
                                            <p class="text-muted mb-50">
                                              Budget
                                            </p>
                                            <p class="mb-0">$50000</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="timeline-item">
                                      <span class="timeline-point timeline-point-info timeline-point-indicator"></span>
                                      <div class="timeline-event">
                                        <div class="d-flex justify-content-between align-items-center mb-50">
                                          <h6>Designing UI</h6>
                                          <div>
                                            <span class="badge rounded-pill badge-light-primary">
                                              Design
                                            </span>
                                          </div>
                                        </div>
                                        <p>
                                          Our main goal is to design a new
                                          mobile application for our client. The
                                          customer wants a clean & flat design.
                                        </p>
                                        <div>
                                          <span class="text-muted">
                                            Participants
                                          </span>
                                          <div class="avatar-group mt-50">
                                            <div
                                              data-bs-toggle="tooltip"
                                              data-popup="tooltip-custom"
                                              data-bs-placement="bottom"
                                              title="Vinnie Mostowy"
                                              class="avatar pull-up"
                                            >
                                              <img
                                                src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                                alt="Avatar"
                                                height="30"
                                                width="30"
                                              />
                                            </div>
                                            <div
                                              data-bs-toggle="tooltip"
                                              data-popup="tooltip-custom"
                                              data-bs-placement="bottom"
                                              title="Elicia Rieske"
                                              class="avatar pull-up"
                                            >
                                              <img
                                                src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                                alt="Avatar"
                                                height="30"
                                                width="30"
                                              />
                                            </div>
                                            <div
                                              data-bs-toggle="tooltip"
                                              data-popup="tooltip-custom"
                                              data-bs-placement="bottom"
                                              title="Julee Rossignol"
                                              class="avatar pull-up"
                                            >
                                              <img
                                                src="../../../app-assets/images/portrait/small/avatar-s-10.jpg"
                                                alt="Avatar"
                                                height="30"
                                                width="30"
                                              />
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
                  </div>

                  <div className="col-lg-4 col-12 order-3">
                    <div class="amount-payable checkout-options">
                      <div class="card">
                        <div class="card-header">
                          <h5 class="card-title">Price Details</h5>
                        </div>
                        <div class="card-body">
                          <ul class="list-unstyled price-details">
                            <li class="price-detail">
                              <div
                                class="details-title"
                                style={{ paddingTop: "20px" }}
                              >
                                Number of People
                              </div>
                              <div class="detail-amt">
                                <div class="quantity">
                                  <button class="minus" aria-label="Decrease">
                                    &minus;
                                  </button>
                                  <input
                                    type="number"
                                    class="input-box"
                                    value="1"
                                    min="1"
                                    max="10"
                                    disabled
                                  />
                                  <button class="plus" aria-label="Increase">
                                    &#43;
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li class="price-detail">
                              <div class="details-title">Price of 3 items</div>
                              <div class="detail-amt">
                                <strong>$699.30</strong>
                              </div>
                            </li>
                            <li class="price-detail">
                              <div class="details-title">Delivery Charges</div>
                              <div class="detail-amt discount-amt text-success">
                                Free
                              </div>
                            </li>
                          </ul>
                          <hr />
                          <ul class="list-unstyled price-details">
                            <li class="price-detail">
                              <div class="details-title">Amount Payable</div>
                              <div class="detail-amt fw-bolder">$699.30</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header flex-column align-items-start">
                          <h5 class="card-title">
                            Please enter contact details
                          </h5>
                          <p class="card-text text-muted mt-25">
                            Enter your contact details to complete the payment
                            process.
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-6 col-sm-12">
                              <div class="mb-2">
                                <label class="form-label" for="checkout-name">
                                  Email:
                                </label>
                                <input
                                  type="text"
                                  id="checkout-name"
                                  class="form-control"
                                  name="email"
                                  placeholder="johndoe@gmail.com"
                                />
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <div class="mb-2">
                                <label
                                  class="form-label"
                                  cfor="checkout-number"
                                >
                                  Mobile Number:
                                </label>
                                <input
                                  type="number"
                                  id="checkout-number"
                                  class="form-control"
                                  name="mnumber"
                                  placeholder="0123456789"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header flex-column align-items-start">
                          <h5 class="card-title">Special Request</h5>
                          <p class="card-text text-muted mt-25">
                            Enter any special request you might have
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-12 col-sm-12">
                              <div class="mb-2">
                                <textarea
                                  id="checkout-name"
                                  class="form-control"
                                  name="specialRequest"
                                ></textarea>
                              </div>
                            </div>

                            <div class="col-12">
                              <button
                                type="button"
                                class="btn btn-primary btn-next delivery-address"
                              >
                                Proceed Payments
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetail;
