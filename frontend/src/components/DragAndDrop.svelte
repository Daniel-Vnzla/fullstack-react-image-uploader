<script>
	
</script>

<div>
	<input type="file"  />
</div>

<style>
	input[type="file"] {
		position: relative;
		width: 600px;
		height: 400px;
		color: #fff;
		overflow: hidden;
		border-radius: 7px;
		border: none;
		box-shadow: 2px 1px 3px 1px rgba(0,0,0, .6);
		transition: 300ms transform ease-in-out;
	}

	input[type="file"]::before {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		color: #fff;
		content: "Drag / Click to upload image";
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: #E44E5A;
		pointer-events: none;
	}

	input[type="file"]:hover {
		transform: scale(1.01);
	}


</style>