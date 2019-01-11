<template>
    <section>
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email">
        <br>
        <label for="password">Password</label>
        <input v-model="password" type="password" name="password">
        <br>

        {{email}}
        {{password}}
    </section>
</template>

<script>

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>

<style lang="scss">
section {
  height: 100%;
}

.appLogo {
  margin: 50px auto 20px;
  height: 200px;
  width: 200px;

  @media (min-width: 550px) {
    height: 350px;
    width: 350px;
  }
}

p {
  width: 90%;
  margin: 10px auto;
}


</style>


