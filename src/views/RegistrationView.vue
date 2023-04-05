<template lang="pug">
.all-content
  img.logo(src="@/assets/image/academyLogo.svg")

  .sing-up
    h2.title1 Sign up
    button.button1.button-padding
      span Sign up with Google
    .continue
      p.text2 Or continue with
    form.form-style1(@submit.prevent="")
      .email.input-margin
        label Email Address
        input(
          placeholder="Type your email address",
          v-model="state.email",
          @input="v$.email.$touch()",
          :class="{ invalid: (v$.email.$dirty && !v$.email.required) || (v$.email.$dirty && !v$.email.email) }"
        )
        span.text-helper(v-if="v$.email.$dirty && v$.email.$invalid") Поле не должно быть пустим
        span.text-helper(v-else-if="v$.email.$dirty && !v$.email.email") введите корректний емейл
      .name.input-margin
        label Name
        input(
          placeholder="Type your name",
          v-model="state.name",
          @input="v$.name.$touch()",
          :class="{ invalid: v$.name.$dirty && !v$.name.required }"
        )
      .password.input-margin
        label Password
        input(placeholder="Type your password")
      .role.input-margin
        label User role {{ state.role }}
        select(v-model="state.role")
          option(value="1") 1
          option(value="2") 2
          option(value="3") 3
          option(value="4") 4
    button.confirm-sing-up.button1 Sign up
    p.link1 Already have an account?
      a(href="#") Log in
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
const state = reactive({
  email: "",
  name: "",
  password: "",
  role: "",
});
const rules = {
  email: { required },
  name: { required },
  password: { required },
  role: { required },
};
const v$ = ref(useVuelidate(rules, state));
</script>

<style scoped lang="scss">
@import "@/scss/core/_media";

.all-content {
  .sing-up {
    .form-style1 {
      .email {
        .invalid {
          border: 1px solid red;
        }
        .text-helper {
          font-size: 13px;
          color: red;
        }
      }
      .name {
        input {
          .invalid {
            border: 1px solid red;
          }
        }
      }
      .role {
        position: relative;

        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          /* a custom arrow icon */
          background: url("@/assets/image/arraw.svg") no-repeat;
          background-position: right 10px center;
          background-size: 10px;
          padding-right: 30px;
          background-color: var(--athens-gray);
        }
      }
    }
    .link1 {
      margin-top: 16px;
    }
    .button-padding {
      padding-left: 124px;
    }
    .confirm-sing-up {
      @include media_mobile {
        margin-top: 41px;
        margin-bottom: inherit;
      }
    }
  }
}
</style>
