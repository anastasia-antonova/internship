<template lang="pug">
.all-content
  img.logo(src="@/assets/image/academyLogo.svg")

  .sing-up
    h2.title1 Log in
    button.button1.button-padding
      span Log in with Google
    .continue
      p.text2 Or continue with
    form.form-style1
      .form-group.email.input-margin(
        :class="{ invalid: v$.form.email.$dirty && v$.form.email.$invalid }"
      )
        label Email Address
        input(
          placeholder="Type your email address",
          v-model="state.form.email",
          @input="v$.form.email.$touch()"
        )
        span.text-helper(v-if="v$.form.email.required.$invalid") Поле не должно быть пустим
        span.text-helper(v-else-if="v$.form.email.email.$invalid") введите корректний емейл

      .form-group.password.input-margin-6(
        :class="{ invalid: v$.form.password.$dirty && v$.form.password.$invalid }"
      )
        label Password
        input(
          placeholder="Type your password",
          v-model="state.form.password",
          @input="v$.form.password.$touch()"
        )
        span.text-helper(v-if="v$.form.password.required.$invalid") Поле не должно быть пустим

      a.link2(href="#") Forgot your password?
    button.confirm-sing-up.button1(
      :class="{ disabled: isLoginDisabled }",
      type=submit,
      :disabled="isLoginDisabled"
    ) Log in
    p.link1 New user?
      a(href="#") Sign up
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { Login } from "@/types/interfaceLogin";

const state: Login = reactive({
  form: {
    email: "",
    password: "",
  },
});

const rules = {
  form: {
    email: { required, email },
    password: { required },
  },
};
const v$ = ref(useVuelidate(rules, state));

const isLoginDisabled = computed(() => {
  return v$.value.form.$invalid;
});
</script>

<style scoped lang="scss">
@import "@/scss/core/_media";

.all-content {
  .sing-up {
    @include media_mobile {
      padding-top: 76px;
    }

    .confirm-sing-up {
      @include media_tablet {
        margin-top: 74px;
      }
    }

    .button-padding {
      padding-left: 116px;
    }
    .link1 {
      @include media_mobile {
        color: var(--athens-gray);
        margin-bottom: 23px;
      }
    }
  }
}
</style>
