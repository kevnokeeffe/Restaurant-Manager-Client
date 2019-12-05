<template>
    <footer class="footer align-items-center align-content-center" id="custom-footer">
        <span class="Ft mr-4 align-items-baseline">&copy; 2019 Kevin O'Keeffe</span>
        <span class="Ft mr-4 align-items-center">Private</span>
        <span class="Ft align-items-end">Terms of Service</span>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
footer#custom-footer{
    height: 3rem;
    background-color: #373F46;
    font-size: 1rem;
    position: fixed;
    bottom: 0;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>