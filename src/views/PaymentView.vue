<template>
  <div>
    <h3>Payment</h3>
    <Error :message="error" />
    <form novalidate @submit.prevent="onSave">
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
              v-model="payment.shipping.fullName"
            />
          </div>
          <div class="form-group">
            <label for="company">Company Name</label>
            <input
              type="text"
              id="company"
              class="form-control"
              placeholder="Company"
              v-model="payment.shipping.company"
            />
          </div>
          <AddressView :address="payment.address" />

          <div class="form-group">
            <input type="submit" value="Next" class="btn btn-success" />
          </div>
        </div>
        <div class="col-md-6">
          <div><strong>Billing Information</strong></div>
          <div class="form-check">
            <input
              type="checkbox"
              id="sameAsShipping"
              class="form-check-input"
              v-model="payment.billing.sameAsShipping"
            />
            <label for="sameAsShipping" class="form-check-label"
              >Same As Shipping?</label
            >
          </div>

          <AddressView
            :address="payment.billing"
            :isDisabled="payment.billing.sameAsShipping"
          ></AddressView>

          <div class="form-group">
            <input type="submit" value="Next" class="btn btn-success" />
          </div>

          <div><strong>Credit Card</strong></div>
          <div class="form-group">
            <label for="ccNumber">Credit Card Number</label>
            <input
              class="form-control"
              type="text"
              v-model="payment.creditcard.number"
              id="ccNumber"
            />
          </div>
          <div class="form-group">
            <label for="ccNumber">Name on Card</label>
            <input
              class="form-control"
              type="text"
              v-model="payment.creditcard.nameOnCard"
              id="ccNumber"
            />
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="expirationMonth">Expiration Month</label>
                <select
                  id="expirationMonth"
                  v-model="payment.creditcard.expirationMonth"
                  class="form-control"
                >
                  <option v-for="m in months" :key="m.number">
                    {{ m.name }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="expirationMonth">Expiration Year</label>
                <select
                  id="expirationMonth"
                  v-model="payment.creditcard.expirationYear"
                  class="form-control"
                >
                  <option v-for="y in years" :key="y">
                    {{ y }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="cvv">CVV Code</label>
                <input
                  v-model="payment.creditcard.cvv"
                  class="form-control"
                  id="cvv"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div>
      <pre>{{ payment }}</pre>
    </div>
  </div>
</template>
  <script>
import { ref, computed, watch } from "vue";
import states from "@/lookup/states";
import months from "@/lookup/months";
import formatters from "@/formatters";
import Error from "@/components/Error.vue";
import AddressView from "./AddressView";
export default {
  components: {
    Error,
    AddressView,
  },
  // this is for composition api
  setup() {
    const payment = ref({
      shipping: {
        fullName: "Shawn",
        postalCode: "12345",
      },
      billing: {
        sameAsShipping: false,
      },
      creditcard: {},
    });

    const error = ref("");

    function onSave() {
      error.value = "We can't save yet, we don't have an API";
    }
    const years = Array.from({ length: 10 }, (_, i) => i + 2020);
    const Zipcode = computed({
      get: () => payment.value.postalCode,
      set: (val) => {
        if (val && typeof val === "string") {
          if (val.length <= 5 || val.indexOf("-") > -1) {
            payment.value.postalCode = val;
          } else {
            payment.value.postalCode = `${val.substring(0, 5)}-${val.substring(
              5
            )}`;
          }
        }
      },
    });

    watch(
      // what to watch
      () => payment.value.billing.sameAsShipping,
      // What to do
      () => {
        if (payment.value.billing.sameAsShipping) {
          payment.value.billing.address1 = "";
          payment.value.billing.address2 = "";
          payment.value.billing.cityTown = "";
          payment.value.billing.stateProvince = "";
          payment.value.billing.postalCode = "";
        }
      }
    );

    return {
      payment,
      error,
      states,
      months,
      onSave,
      years,
      ...formatters,
    };
  },
};
</script>