import productimage from "./../../../assets/images/eCommerce/kashmir.jpg";
const PackageCard = () => {
  return (
    <>
      <div class="card">
        <img class="card-img-top" src={productimage} alt="Card image cap" />
        <div class="card-body">
          <p class="card-title">
            Magnificent Kashmir Holiday -With H{" "}
            <span class="selected">6N/7D</span>
          </p>
          <p class="card-text single-line-list">
            <span>1N Srinagar Houseboat</span>
            <span>1N Gulmarg</span>
            <span>2N Pahalgam</span>
            <span>2N Srinagar</span>
          </p>
        </div>
        <ul class="two-column-list">
          <li>Round Trip</li>
          <li>Flights</li>
          <li>Intercity Car Transfers</li>
          <li>3 Star Hotels</li>
          <li>Airport Transfers</li>
          <li>Airport Pickup & Drop</li>
          <li>11 Activities</li>
          <li>Selected Meals</li>
          <li>Indian Lunch</li>
          <li>Night Tour</li>
        </ul>
        <div class="card-body">
          {/* <div class="price">
            <div class="discount-info">save upto 30% off</div>
            <div class="original-price">$213</div>
          </div> */}
          <div class="includeWrapper">
            <div class="includeItemCard">
              <div class="rightSec">
                <p>
                  <span class="priceStyle">CAD 200</span>
                  <span> /Person</span>
                </p>
                <p>
                  <span>Total Price</span>
                  <span>CAD 320</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PackageCard;
