<template lang="pug">
.all-content
  img.logo(src="@/assets/image/academyLogo.svg")

  .sing-up
    h2.title1 Sign up
    button.button1.button-padding
      span Sign up with Google
    .continue
      p.text2 Or continue with
    form.form-style1
      .email.input-margin
        label Email Address
        input(placeholder="Type your email address")
      .name.input-margin
        label Name
        input(placeholder="Type your name")
      .password.input-margin
        label Password
        input(placeholder="Type your password")
      .role.input-margin
        label User role
        select
    button.confirm-sing-up.button1 Sign up
    p.link1 Already have an account?
      a(href="#") Log in
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@import "@/scss/core/_media";

.all-content {
  .sing-up {
    .form-style1 {
      .role {
        position: relative;
        &:after {
          content: "";
          width: 10px;
          height: 6px;
          top: 35px;
          left: 337px;
          position: absolute;
          background-image: url("@/assets/image/arraw.svg");
          background-repeat: no-repeat;
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
