0
<template>
	<div id="header">
		<div class="mark">
			<div class="title" v-fit>海淀区智慧水务大脑地理信息平台</div>
		</div>
		<div class="left-container">
			<div class="fit-container">
				<div class="item" v-fit>北京市</div>
				<div class="item" v-fit>
					<img class="rain" src="../../assets/images/rainstorm.png" alt="" srcset="" />
				</div>
				<div class="item" v-fit>大雨</div>
				<div class="item" v-fit>17-18℃</div>
			</div>
		</div>
		<div class="right-container">
			<div class="item" v-fit>{{ msg }}</div>
			<div class="item" v-fit>{{ week }}</div>
			<div class="item" v-fit>{{ time }}</div>
			<div class="item" v-fit>
				<img class="header-img" src="../../assets/images/header.jpg" alt="" />
			</div>
			<div class="item admin" v-fit>
				<div>admin</div>
				<div>管理员</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
const msg = dayjs().format('YYYY-MM-DD')
const week = weekTran()
const time = ref()
onMounted(() => {})

// 转换星期函数
function weekTran() {
	const week = dayjs().format('d')
	switch (week) {
		case '1':
			return '星期一'
			break
		case '2':
			return '星期二'
			break
		case '3':
			return '星期三'
			break
		case '4':
			return '星期四'
			break
		case '5':
			return '星期五'
			break
		case '6':
			return '星期六'
			break
		case '0':
			return '星期天'
			break
		default:
			break
	}
}

const timer = setInterval(() => {
	time.value = dayjs().format('HH:mm:ss')
}, 1000)
</script>
<style lang="less" scoped>
@import './header.less';
</style>
