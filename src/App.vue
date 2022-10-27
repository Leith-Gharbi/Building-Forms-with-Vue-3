<template>
  <div>
    <h3>Payment</h3>
    <form novalidate>
      <div class="row">
        <div class="col-md-6">
          <div><strong>Shipping Information</strong></div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <label for="company">Company Name</label>
            <input
              type="text"
              id="company"
              class="form-control"
              placeholder="Company"
            />
          </div>
          <div class="form-group">
            <label for="address1">Address</label>
            <input
              type="text"
              id="address1"
              class="form-control"
              placeholder="Street Address"
            />
          </div>
          <div class="form-group">
            <label for="address1">Suite/Appartement</label>
            <input
              type="text"
              id="address2"
              class="form-control"
              placeholder=""
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="cityTown">cityTown</label>
              <input
                type="text"
                id="cityTown"
                class="form-control"
                placeholder="e.g. New York"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="stateProvince">State</label>
              <select id="stateProvince" class="form-control">
                <option>GA</option>
                <option>CA</option>
                <option>FL</option>
                <option>AL</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="postalCode">Zipcode</label>
              <input
                type="text"
                id="postalCode"
                class="form-control"
                placeholder="e.g. 10101"
              />
            </div>
            <div class="form-group">
              <input type="submit" value="Next" class="btn btn-success" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div><strong>Billing Information</strong></div>
        </div>
      </div>
    </form>
    <div>
      <pre>{{ payment }}</pre>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  // this is for composition api
  setup() {
    const payment = ref({});
    return {
      payment,
    };
  },
};
</script>