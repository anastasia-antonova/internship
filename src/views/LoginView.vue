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
      .email.input-margin
        label Email Address
        input(placeholder="Type your email address")
      .password.input-margin-6
        label Password
        input(placeholder="Type your password")
      a.link2(href="#") Forgot your password?
    button.confirm-sing-up.button1 Log in
    p.link1 New user?
      a(href="#") Sign up
</template>

<script lang="ts" setup></script>

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
