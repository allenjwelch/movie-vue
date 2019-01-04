<template>
    <section class="footer">
        <p>Built in Vue.js by Allen Welch &copy;2018 </p>
    </section>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        user: String
    }
}
</script>

<style lang="scss">
.footer {
    height: 30px;
    width: 100%;
    background: #333;
    padding: 8px 0;
    box-sizing: border-box;

    p {
        margin: 0 20px;
        text-align: left;
        font: 400 italic 12px "arial";
        color: #fff;
    }
}
</style>


