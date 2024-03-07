import { Paynow } from "../../../views";
const BookTrip = () => {
  return (
    <div class="content-wrapper container-xxl p-0">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-start mb-0">Checkout</h2>
              <div class="breadcrumb-wrapper">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">eCommerce</a>
                  </li>
                  <li class="breadcrumb-item active">Checkout</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <div class="bs-stepper checkout-tab-steps">
          <div class="bs-stepper-content">
            <div
              id="step-payment"
              class="content"
              role="tabpanel"
              aria-labelledby="step-payment-trigger"
            >
              <form
                id="checkout-payment"
                class="list-view product-checkout"
                onsubmit="return false;"
              >
                <div class="payment-type">
                  <div class="card">
                    <div class="card-header flex-column align-items-start">
                      <h4 class="card-title">Payment options</h4>
                      <p class="card-text text-muted mt-25">
                        Be sure to click on correct payment option
                      </p>
                    </div>
                    <div class="card-body">
                      <Paynow />
                    </div>
                  </div>
                </div>
                <div class="amount-payable checkout-options">
                  <div class="card">
                    <div class="card-header flex-column align-items-start">
                      <h4 class="card-title">Add New Address</h4>
                      <p class="card-text text-muted mt-25">
                        Be sure to check "Deliver to this address" when you have
                        finished
                      </p>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6 col-sm-12">
                          <div class="mb-2">
                            <label class="form-label" cfor="checkout-name">
                              Full Name:
                            </label>
                            <input
                              type="text"
                              id="checkout-name"
                              class="form-control"
                              name="fname"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="mb-2">
                            <label class="form-label" cfor="checkout-number">
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
                        <div class="col-md-6 col-sm-12">
                          <div class="mb-2">
                            <label
                              class="form-label"
                              cfor="checkout-apt-number"
                            >
                              Flat, House No:
                            </label>
                            <input
                              type="number"
                              id="checkout-apt-number"
                              class="form-control"
                              name="apt-number"
                              placeholder="9447 Glen Eagles Drive"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="mb-2">
                            <label class="form-label" cfor="checkout-landmark">
                              Landmark e.g. near apollo hospital:
                            </label>
                            <input
                              type="text"
                              id="checkout-landmark"
                              class="form-control"
                              name="landmark"
                              placeholder="Near Apollo Hospital"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="mb-2">
                            <label class="form-label" cfor="checkout-city">
                              Town/City:
                            </label>
                            <input
                              type="text"
                              id="checkout-city"
                              class="form-control"
                              name="city"
                              placeholder="Tokyo"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="mb-2">
                            <label class="form-label" cfor="checkout-pincode">
                              Pincode:
                            </label>
                            <input
                              type="number"
                              id="checkout-pincode"
                              class="form-control"
                              name="pincode"
                              placeholder="201301"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="mb-2">
                            <label class="form-label" cfor="checkout-state">
                              State:
                            </label>
                            <input
                              type="text"
                              id="checkout-state"
                              class="form-control"
                              name="state"
                              placeholder="California"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="mb-2">
                            <label class="form-label" cfor="add-type">
                              Address Type:
                            </label>
                            <select class="form-select" id="add-type">
                              <option>Home</option>
                              <option>Work</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12">
                          <button
                            type="button"
                            class="btn btn-primary btn-next delivery-address"
                          >
                            Save And Deliver Here
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Price Details</h4>
                    </div>
                    <div class="card-body">
                      <ul class="list-unstyled price-details">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookTrip;
