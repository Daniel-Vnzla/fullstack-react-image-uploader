<script>
	import Imagen from '../icons/Imagen.svelte';


	const dragover = (e) => {
		e.target.style.opacity = .8;
	}
</script>

<div 
	class="drag-and-drop"
	on:dragover={dragover}
	>
	<div class="image-preview">
		<img src="" alt="">
	</div>
	<div class="figcap">
		<div class="icon">
			<Imagen />
		</div>
		<p>Drag / Click to upload image</p>
	</div>
	<input type="file"  />
</div>

<style>
	.drag-and-drop {
		position: relative;

		width: 600px;
		height: 400px;
	}

	.figcap {
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		color: #fff;
		z-index: 10;
		pointer-events: none;
	}

	.icon {
		width: 120px;
		height: 120px;
	}

	input[type="file"] {
		outline: none;
		position: relative;
		width: 100%;
		height: 100%;
		color: #fff;
		border-radius: 7px;
		border: none;
		box-shadow: 2px 1px 3px 1px rgba(0,0,0, .6);
		transition: opacity 300ms ease;
	}

	input[type="file"]::before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: #E44E5A;
		pointer-events: none;
	}

	input[type="file"]:hover {
		opacity: .8;
	}

</style>