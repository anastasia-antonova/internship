<template lang="pug">
.all-content
  img.logo(src="@/assets/image/academyLogo.svg")

  .sing-up
    h2.title1 Log in
    button.button1
      span Log in with Google
    .continue
      p.text2 Or continue with
    form.form-style1
      .email
        label Email Address
        input
      .password
        label Password
        input
    button.confirm-sing-up.button1 Sign up
    p.link1 New user?
      a(href="#") Sign up
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.logo {
  position: absolute;
  left: 52px;
  top: 30px;
}
.all-content {
  display: flex;
  justify-content: center;
  min-width: 1440px;
  min-height: 1024px;
  background-image: url("@/assets/image/RegistrationBG.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  .sing-up {
    min-width: 350px;

    button {
      &:last-child {
        margin-bottom: 16px;
        margin-top: 74px;
      }
      span {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: var(--athens-gray);
        position: relative;

        &:before {
          content: "";
          width: 16px;
          height: 16px;
          background-image: url("@/assets/image/google1.svg");
          background-size: contain;
          background-repeat: no-repeat;
          position: absolute;
          left: -21px;
        }
      }
    }

    p {
      font-family: "Inter";
      font-style: normal;
      display: flex;
      justify-content: center;
      color: var(--trout);
      line-height: 20px;
      font-weight: 400;
    }
    .link1 {
      font-size: 13px;

      a {
        color: var(--trout);
        margin-left: 7px;
        font-weight: 500;
      }
    }

    .continue {
      .text2 {
        font-size: 14px;
        position: relative;
        margin-top: 30px;

        &:before {
          content: "";
          width: 112px;
          height: 2px;
          background-image: url("@/assets/image/divider.svg");
          background-size: auto;
          background-repeat: no-repeat;
          top: 9px;
          left: 1px;
          position: absolute;
        }

        &:after {
          content: "";
          width: 112px;
          height: 2px;
          background-image: url("@/assets/image/divider.svg");
          background-size: auto;
          background-repeat: no-repeat;
          top: 9px;
          right: 1px;
          position: absolute;
        }
      }
    }
  }
}
</style>
