<script>
	import axios from 'axios';

	const fetchImages = async () => {
		const { data } = await axios.get('https://react-image-upload-db.herokuapp.com/images');
		return data;
	}
</script>

<section class="gallery">
	{#await fetchImages() then images }
		{#each images as img}
		<div class="img" >
			<a href={img.imageUrl} download >
				<img src={img.imageUrl} alt={img.name}>
			</a>
		</div>
		{/each}
	{/await}
</section>

<style>
	.gallery {
		columns: 3;
		max-width: 1000px;
		width: 90%;
		margin: 0 auto;
		margin-top: 20px;
	}

	.img {
		position: relative;
		width: 100%;
		break-inside: avoid;
		margin-bottom: 10px;
	}

	.img::before {
		position: absolute;
		content: "Download";
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-size: 1.2rem;
		pointer-events: none;
		opacity: 0;
		transition: 300ms opacity; 
		background: rgba(0,0,0, .7);
	}

	.img:hover::before {
		opacity: 1;
	}
</style>