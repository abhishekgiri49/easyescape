const SearchBar = () => {
  return (
    <div className="searchcontainer">
      <img
        alt="plane"
        class="plane"
        src="https://i.ibb.co/52bG3RC/landingpage-assets-0005-plane.png"
      ></img>

      <div className="right">
        <form className="reservation">
          <fieldset>
            <div className="left2">
              <label>Beginning </label>
              <div>
                <input
                  type="text"
                  id="cities"
                  name="cities"
                  size="20"
                  value=""
                  placeholder="Toronto"
                  required
                />
              </div>
              <label>CHECK-IN DATE</label>
              <input
                type="date"
                id="start"
                name="trip"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />

              <label>ADULTS</label>
              <input list="adults" id="adults-number" name="adults-number" />
              <datalist id="adults">
                <option value="1 adult" />
                <option value="2 adults" />
                <option value="3 adults" />
                <option value="+3 adults" />
              </datalist>
            </div>

            <div className="right2">
              <label>DESTINATION</label>
              <div>
                <input
                  type="text"
                  id="cities"
                  name="cities"
                  size="20"
                  value=""
                  placeholder="Paris, France"
                  required
                />
              </div>
              <label>CHECK-OUT DATE</label>
              <input
                type="date"
                id="end"
                name="trip"
                value="2019-07-29"
                min="2019-01-01"
                max="2019-12-31"
              />
              <label>CHILDREN</label>
              <input
                list="children"
                id="children-number"
                name="children-number"
              />
              <datalist id="children">
                <option value="No children" />
                <option value="1" />
                <option value="2" />
                <option value="3" />
              </datalist>
            </div>

            <div className="button">
              <input type="button" className="btn" value="START SEARCH" />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
