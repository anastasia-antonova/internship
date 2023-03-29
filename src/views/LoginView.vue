<template lang="pug">
.all-content
  .sing-up
    h2 Sing up
    button.button1 Sign up with Google
    .continue
      p Or continue with
    form.form-style1
      .email
        label Email Address
        input
      .name
        label Name
        input
      .password
        label Password
        input
      .role
        label User role
        select
    button.confirm-sing-up.button1 Sign up
    a(href="#") Already have an account? Log in
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.all-content {
  display: flex;
  justify-content: center;
  min-width: 1440px;
  min-height: 1024px;
  background-image: url("@/assets/image/RegistrationBG.png");
  background-size: contain;
  background-repeat: no-repeat;

  .sing-up {
    min-width: 350px;
    h2 {
      font-family: Inter;
      font-style: normal;
      font-size: 46px;
      line-height: 56px;
      font-weight: 600;
      text-align: center;
      color: var(--bright-gray);
    }
    a {
      display: flex;
      justify-content: center;
      color: var(--trout);
    }

    .continue {
      p {
        text-align: center;
        color: var(--trout);
      }
    }
    .button1 {
      min-width: 350px;
      min-height: 46px;
      background-color: var(--bright-gray);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: var(--athens-gray);
    }
  }
}
</style>
