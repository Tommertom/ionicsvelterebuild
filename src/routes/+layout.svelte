<script lang="ts">
	import { page } from '$app/stores';
	import { setupIonicBase } from '$lib/ionic-svelte';
	import 'ionic-svelte/components/all';
	import '../theme/variables.css';

	setupIonicBase();

	// we are looking to solve https://github.com/Tommertom/svelte-ionic-app/issues/81
</script>

<ion-app>
	<div class="ion-page" id="main">
		<ion-tabs>
			<slot />

			<ion-tab-bar slot="bottom">
				<ion-tab-button href="/" selected={$page.url.pathname === '/'}> Home </ion-tab-button>

				<ion-tab-button
					href="/apples"
					selected={$page.url.pathname === '/apples' || $page.url.pathname.startsWith('/apples/')}
				>
					Apples
				</ion-tab-button>

				<ion-tab-button href="/oranges" selected={$page.url.pathname === '/oranges'}>
					Oranges
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</div>
</ion-app>
