<template>
  <Error :message="errorMessage" />

  <PaymentView @onError="reportError" />
</template>
<script>
import PaymentView from "@/views/PaymentView";
import Error from "@/components/Error";
import { ref } from "vue";
export default {
  components: {
    PaymentView,
    Error,
  },
  setup() {
    const errorMessage = ref("");

    function reportError(msg) {
      errorMessage.value = msg;
    }
    return {
      errorMessage,
      reportError,
    };
  },
};
</script>