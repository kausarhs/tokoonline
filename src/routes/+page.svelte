<script>
	// import CallToAction from '../components/CallToAction.svelte';
	import ProductCard from '../components/ProductCard.svelte';
	export let data;

	const { posts } = data;
	let cari = '';
	let dataFilter = [];
	let alert = '';

	const filterData = () => {
		dataFilter = posts.filter((post) => post.title.toLowerCase().includes(cari.toLowerCase()));

		if (dataFilter.length == 0) {
			alert = 'Data tidak ditemukan';
		}
	};
	const hadnleInput = () => {
		if (cari.length == 0) {
			dataFilter = [];
			alert = '';
		}
	};
</script>

<!-- <CallToAction {cari} {filterData} /> -->
<!-- Call To Action -->

<section class="bg-gray-50">
	<div class="p-8 md:p-12 lg:px-16 lg:py-24">
		<div class="mx-auto max-w-lg text-center">
			<h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit
			</h2>

			<p class="hidden text-gray-500 sm:mt-4 sm:block">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
				repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
				tempora nisi?
			</p>
		</div>

		<div class="mx-auto mt-8 max-w-xl">
			<form action="#" class="sm:flex sm:gap-4">
				<div class="sm:flex-1">
					<label for="email" class="sr-only">Cari</label>

					<input
						bind:value={cari}
						on:input={hadnleInput}
						type="search"
						placeholder="Cari Produk..."
						class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-400"
					/>
				</div>

				<button
					on:click={filterData}
					type="submit"
					class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
				>
					<span class="text-sm font-medium"> Cari.. </span>

					<svg
						class="size-5 rtl:rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</button>
			</form>
		</div>
	</div>
</section>
<!-- End Call To Action -->
{#if !alert}
	<div
		class=" justify-between grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12 max-w-6xl mx-auto px-4 py-12"
	>
		{#each dataFilter.length > 0 ? dataFilter : posts as post}
			<ProductCard {post} />
		{/each}
	</div>
{:else}
	<div class="px-64 container">
		<div
			role="alert"
			class="flex items-center justify-between text-center rounded border-s-4 border-red-500 bg-red-50 p-4"
		>
			<div class="flex items-center gap-2 text-red-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-5 w-5"
				>
					<path
						fill-rule="evenodd"
						d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
						clip-rule="evenodd"
					/>
				</svg>

				<strong class="block font-medium"> Data Tidak Ditemukan </strong>
			</div>
		</div>
	</div>
{/if}
