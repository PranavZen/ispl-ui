import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SqareButton from "../../components/common/cta/SqareButton";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";

function StateCityZoneModal({ closeModal }) {
  const [formData, setFormData] = useState({
    state_name: "",
    cities_states_id: "",
    zone_name: "",
  });

  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [zones, setZones] = useState([]);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("apiToken");
    setAuthToken(token);
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await axios.get("https://my.ispl-t10.com/api/state");
      let states = response.data.data.states || [];

      const uniqueStates = Array.from(
        new Set(states.map((state) => state.state_name))
      ).map((state_name) => {
        return states.find((state) => state.state_name === state_name);
      });

      setStates(uniqueStates);
    } catch (error) {
      console.error("Error fetching states:", error);
      toast.error("Failed to fetch states. Please try again later.");
    }
  };

  const fetchCitiesByState = async (stateName) => {
    try {
      const response = await axios.get(
        `https://my.ispl-t10.com/api/get_city_base_on_state?state_name=${stateName}`
      );
      setCities(response.data.cities || []);
    } catch (error) {
      console.error(`Error fetching cities for ${stateName}:`, error);
      toast.error(
        `Failed to fetch cities for ${stateName}. Please try again later.`
      );
    }
  };

  const fetchZonesByCity = async (cityId) => {
    try {
      const response = await axios.get(
        `https://my.ispl-t10.com/api/get_zone_base_on_city?cities_states_id=${cityId}`
      );
      const zones = response.data.zone || [];
      setZones(zones);
      if (zones.length > 0) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          zone_name: zones[0].zone_name,
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          zone_name: "",
        }));
      }
    } catch (error) {
      console.error(`Error fetching zones for city ID ${cityId}:`, error);
      toast.error(
        `Failed to fetch zones for city ID ${cityId}. Please try again later.`
      );
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "state_name") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        cities_states_id: "",
        zone_name: "",
      }));
      await fetchCitiesByState(value);
    } else if (name === "cities_states_id") {
      await fetchZonesByCity(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/update_city_state",
        {
          state_name: formData.state_name,
          cities_states_id: formData.cities_states_id,
          zone_name: formData.zone_name,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      toast.success("Data updated successfully!");
      closeModal();
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Failed to update data. Please try again later.");
    }
  };

  return (
    <div
      class="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg"></div>
      <div className="modal-content">
      <SectionTitle titleText="Update City" />
        <form
          className="form p-t-20"
          id="state_city_zone_form"
          onSubmit={handleSubmit}
        >
          <div className="row mb-4">
            <div className="col-md-8 mb-4">
              <label htmlFor="state_name" className="form-label ">
                State
              </label>
              <select
                required
                id="state_name"
                className="form-control"
                name="state_name"
                value={formData.state_name}
                onChange={handleChange}
              >
                <option value="">Select a state</option>
                {states.map((state, index) => (
                  <option key={index} value={state.state_name}>
                    {state.state_name}
                  </option>
                ))}
              </select>
              {errors.state_name && (
                <div className="error">{errors.state_name}</div>
              )}
            </div>
            <div className="col-md-8 mb-4">
              <label
                htmlFor="cities_states_id"
                className="form-label "
              >
                City
              </label>
              <select
                required
                id="cities_states_id"
                className="form-control"
                name="cities_states_id"
                value={formData.cities_states_id}
                onChange={handleChange}
              >
                <option value="">Select a city</option>
                {cities.map((city, index) => (
                  <option key={index} value={city.city_id}>
                    {city.city_name}
                  </option>
                ))}
              </select>
              {errors.cities_states_id && (
                <div className="error">{errors.cities_states_id}</div>
              )}
            </div>
            <div className="col-md-8 mb-4">
              <label htmlFor="zone_name" className="form-label ">
                Zone
              </label>
              <input
                id="zone_name"
                type="text"
                className="form-control"
                name="zone_name"
                value={formData.zone_name}
                disabled
              />
              {errors.zone_name && (
                <div className="error">{errors.zone_name}</div>
              )}
            </div>
            <SqareButton
              classNameText="sqrBtn"
              btnName="Update Now"
              svgFill="#caf75a"
              textColor="#caf75a"
              bordercolor="#caf75a"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default StateCityZoneModal;
