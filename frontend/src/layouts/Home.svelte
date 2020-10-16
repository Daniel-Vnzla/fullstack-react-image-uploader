<main class="main">
	<header class="header">
		<button class="upload-btn">Upload</button>
		<h1 class="title">Mob</h1>
	</header>
	<div class="separator"></div>
	<section class="gallery">

	</section>
</main>


<style>
	.main {
		width: 100%;
		height: 100%;
		background: linear-gradient(to right bottom, #F94493, #DE6B82, #D4002C );
	}

	.header {
		display: flex;
		max-width: 90%;
		justify-content: flex-end;
		align-items: flex-end;
		height: 80px;
	}

	.title {
		font-size: 3rem;
		line-height: 2.8rem;
		color: #fff;
	}

	.upload-btn {
		background: linear-gradient(to left, #5F40C8, #CB50CF, #8E1F8E);
		border: none;
		color: #fff;
		padding: 9px 40px;
		margin-right: 20px;
		border-radius: 6px;
		font-weight: bold;
		cursor: pointer;
	}

	.separator {
		width: 90%;
		margin: 0 auto;
		margin-top: 10px;
		height: 3px;
		background: #fff;
	}

</style>