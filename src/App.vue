<template>
  <Error :message="errorMessage" />
  <PaymentView />
</template>
<script>
import PaymentView from "@/views/PaymentView";
import Error from "@/components/Error";
import state from "./state/index";
export default {
  components: {
    PaymentView,
    Error,
  },
  setup() {
    return {
      errorMessage: state.errorMessage,
    };
  },
};
</script>