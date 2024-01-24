const FilterNavbar = () => {
  return (
    <>
      <div className="sidebar-detached sidebar-left">
        <div className="sidebar">
          <div className="sidebar-shop">
            <div className="row">
              <div className="col-sm-12">
                <h6 className="filter-heading d-none d-lg-block">Filters</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="multi-range-price">
                  <h6 className="filter-title mt-0">Multi Range</h6>
                  <ul className="list-unstyled price-range" id="price-range">
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceAll"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceAll">
                          All
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceRange1"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceRange1">
                          &lt;=$10
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceRange2"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceRange2">
                          $10 - $100
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceARange3"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceARange3">
                          $100 - $500
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceRange4"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceRange4">
                          &gt;= $500
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div id="product-categories">
                  <h6 className="filter-title">Categories</h6>
                  <ul className="list-unstyled categories-list">
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category1"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category1">
                          Appliances
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category2"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category2">
                          Audio
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category3"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category3">
                          Cameras & Camcorders
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category4"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category4">
                          Car Electronics & GPS
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category5"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category5">
                          Cell Phones
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category6"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category6">
                          Computers & Tablets
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category7"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category7">
                          Health, Fitness & Beauty
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category8"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category8">
                          Office & School Supplies
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category9"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category9">
                          TV & Home Theater
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="category10"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category10">
                          Video Games
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div id="clear-filters">
                  <button type="button" className="btn w-100 btn-primary">
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterNavbar;
