<script>
	export let post;
</script>

<div class="overflow-hidden rounded-lg shadow-lg relative">
	<a href="https://wa.me/6228391934?text=Hello%20Admin" class="group block mb-10">
		<img
			src={post.image}
			alt={post.title}
			class="aspect-square w-full rounded object-contain hover:opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
			loading="lazy "
			decoding="async "
		/>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
				{post.title}
			</h3>

			<p class="mt-1 text-sm text-gray-700">$.{post.price}</p>
		</div>
	</a>
	<!-- buat button beli dengan tema indigo w full -->
	<a
		href={`https://wa.me/6282283919347?text=Hello%20Admin%20 saya mau beli ${post.title}`}
		type="button"
		class=" absolute bottom-3 right-0 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
	>
		Beli
	</a>
</div>
