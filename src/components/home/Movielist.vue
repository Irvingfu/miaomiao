<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in showmovie" :key="item.id">
					<router-link to="/home/moviedetail">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>{{item.act}}</p>
						</div>
					</router-link>
				</li>
        </ul>	
    </div>
</template>

<script>
export default {
	name:'movielist',
	props:['showmovie']
}
</script>

<style scoped>
    img{
        width: 42px;
        height: 42px;
    }
</style>