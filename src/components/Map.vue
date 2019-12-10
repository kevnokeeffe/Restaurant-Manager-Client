<template>
    <GmapMap :center="{ lat: 10, lng: 10 }">
        <GmapMarker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                @click="center = m.position"
        />
    </GmapMap>
</template>

<script>
    export default {
        name: "Map"
    }
</script>

<style scoped>

</style>