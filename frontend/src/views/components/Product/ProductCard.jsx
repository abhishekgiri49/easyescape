import productimage from "./../../../assets/images/eCommerce/1.png";
const ProductCard = () => {
  return (
    <>
      <div className="card ecommerce-card">
        <div className="item-img text-center">
          <a href="app-ecommerce-details.html">
            <img
              className="img-fluid card-img-top"
              src={productimage}
              alt="img-placeholder"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="item-wrapper">
            <div className="item-rating">
              <ul className="unstyled-list list-inline">
                <li className="ratings-list-item">
                  <i data-feather="star" className="filled-star"></i>
                </li>
                <li className="ratings-list-item">
                  <i data-feather="star" className="filled-star"></i>
                </li>
                <li className="ratings-list-item">
                  <i data-feather="star" className="filled-star"></i>
                </li>
                <li className="ratings-list-item">
                  <i data-feather="star" className="filled-star"></i>
                </li>
                <li className="ratings-list-item">
                  <i data-feather="star" className="unfilled-star"></i>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="item-price">$339.99</h6>
            </div>
          </div>
          <h6 className="item-name">
            <a className="text-body" href="app-ecommerce-details.html">
              Apple Watch Series 5
            </a>
            <span className="card-text item-company">
              By{" "}
              <a href="#" className="company-name">
                Apple
              </a>
            </span>
          </h6>
          <p className="card-text item-description">
            On Retina display that never sleeps, so it’s easy to see the time
            and other important information, without raising or tapping the
            display. New location features, from a built-in compass to current
            elevation, help users better navigate their day, while international
            emergency calling1 allows customers to call emergency services
            directly from Apple Watch in over 150 countries, even without iPhone
            nearby. Apple Watch Series 5 is available in a wider range of
            materials, including aluminium, stainless steel, ceramic and an
            all-new titanium.
          </p>
        </div>
        <div className="item-options text-center">
          <div className="item-wrapper">
            <div className="item-cost">
              <h4 className="item-price">$339.99</h4>
            </div>
          </div>
          <a href="#" className="btn btn-light btn-wishlist">
            <i data-feather="heart"></i>
            <span>Wishlist</span>
          </a>
          <a href="#" className="btn btn-primary btn-cart">
            <i data-feather="shopping-cart"></i>
            <span className="add-to-cart">Add to cart</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
