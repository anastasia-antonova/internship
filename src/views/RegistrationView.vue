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
      .form-group.email.input-margin(
        :class="{ invalid: v$.email.$dirty && v$.email.$invalid }"
      )
        label Email Address
        input(
          placeholder="Type your email address",
          v-model="state.email",
          @input="v$.email.$touch()"
        )
        span.text-helper(v-if="v$.email.required.$invalid") Поле не должно быть пустим
        span.text-helper(v-else-if="v$.email.email.$invalid") введите корректний емейл
      .form-group.name.input-margin(
        :class="{ invalid: v$.name.$dirty && v$.name.$invalid }"
      )
        label Name
        input(
          placeholder="Type your name",
          v-model="state.name",
          @input="v$.name.$touch()"
        )
        span.text-helper(v-if="v$.name.required.$invalid") Поле не должно быть пустим
        span.text-helper(v-else-if="v$.name.nameRegex.$invalid") not number
      .form-group.password.input-margin(
        :class="{ invalid: v$.password.$dirty && v$.password.$invalid }"
      )
        label Password
        input(
          placeholder="Type your password",
          v-model="state.password",
          @input="v$.password.$touch()"
        )
        span.text-helper(v-if="v$.password.required.$invalid") Поле не должно быть пустим
        span.text-helper(v-else-if="v$.password.passwordRegex.$invalid") регех
      .form-group.role.input-margin(
        :class="{ invalid: v$.role.$dirty && v$.role.$invalid }"
      )
        label User role {{ state.role }}
        select(v-model="state.role", @input="v$.role.$touch()")
          option(:value="Role.Admin") Admin
          option(:value="Role.Guest") Guest

        span.text-helper(v-if="v$.email.required.$invalid") Поле не должно быть пустим
    button.confirm-sing-up.button1(@click.prevent="checkForm()") Sign up
    p.link1 Already have an account?
      a(href="#") Log in
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { Registration } from "@/types/interfaceRegistration";
import { Role } from "@/constants/role";

const state: Registration = reactive({
  email: "",
  name: "",
  password: "",
  role: "",
});

const passwordRegex = (value: string) => {
  const regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  return value.match(regex);
};

const nameRegex = (value: string) => {
  const regex = /^[^0-9]*$/;
  return value.match(regex);
};

const rules = {
  email: { required, email },
  name: { required, nameRegex },
  password: { required, passwordRegex },
  role: { required },
};
const v$ = ref(useVuelidate(rules, state));

const checkForm = () => {
  v$.value.$touch();
};
</script>

<style scoped lang="scss">
@import "@/scss/core/_media";

.all-content {
  .sing-up {
    .form-style1 {
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
