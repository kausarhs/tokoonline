<script>
	import Annoncement from '../components/Annoncement.svelte';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Annoncement />
<Navbar />
<slot />
<Footer />

<style>
	body {
		font-family: 'Inter', sans-serif;
		background-color: #75787b;
	}
</style>
