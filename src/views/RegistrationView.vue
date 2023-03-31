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
      .email
        label Email Address
        input(placeholder="Type your email address")
      .name
        label Name
        input(placeholder="Type your name")
      .password
        label Password
        input(placeholder="Type your password")
      .role
        label User role
        select
          option
    button.confirm-sing-up.button1 Sign up
    p.link1 Already have an account?
      a(href="#") Log in
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@import "@/scss/core/_media";

.all-content {
  .sing-up {
    .button-padding {
      padding-left: 124px;
    }
    .title1 {
      @include media_tablet {
        margin-top: 116px;
      }
    }
    .link1 {
      @include media_mobile {
      }
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
