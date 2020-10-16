<script>
	import Header from '../components/Header.svelte';
	import Gallery from '../components/Gallery.svelte';
</script>

<main class="main">
	<Header />
	<div class="separator"></div>
	<Gallery />
</main>


<style>
	.main {
		width: 100%;
		min-height: 100%;
		background: linear-gradient(to right bottom, #F94493, #DE6B82, #D4002C ) fixed;

	}

	.separator {
		width: 90%;
		margin: 0 auto;
		margin-top: 10px;
		height: 3px;
		background: #fff;
	}

</style>