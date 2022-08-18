<template>
	<div id="cesiumContainer">
		<Header></Header>
		<LeftContainer></LeftContainer>
		<Center></Center>
		<Right></Right>
	</div>
</template>

<script setup>
// import MViewer from '@/components/cesium/MViewer'
import { onMounted } from 'vue'
import Header from '../header/Header.vue'
import LeftContainer from '../leftcontailer/left.vue'
import Center from '../centerContainer/center.vue'
import Right from '../rightContainer/rightContainer.vue'
onMounted(() => {})
</script>

<style scoped></style>
