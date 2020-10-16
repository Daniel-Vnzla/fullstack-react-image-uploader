<script>
	import Imagen from '../icons/Imagen.svelte';

	import { files } from '../stores.js';

	let showDragAndDrop = false;

	const dragOver = (e) => {
		showDragAndDrop = true;
	}
	const drop = () => {
		showDragAndDrop = false;
	} 

	$: console.log($files[0])
</script>

<svelte:window on:dragover={dragOver} on:drop={drop} />

<div 
	class:showDragAndDrop
	class="drag-and-drop"
	>
	<div class="figcap">
		<div class="icon">
			<Imagen />
		</div>
		<p>Drag / Click to upload image</p>
	</div>
	<input type="file" bind:files={$files}  />
</div>

<style>
	.drag-and-drop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		opacity: 0;
		visibility: hidden;
		transition: 300ms opacity ease;
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
		opacity: 1;
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

	.showDragAndDrop {
		visibility: visible;
		opacity: .7;
	}


</style>