<script lang="ts">
	const refresh = () => {
		console.log('refresh');
		window.location.reload();
	};

	let thisModal: HTMLIonModalElement;
	let thisModal2: HTMLIonModalElement;

	const cancel = () => {
		console.log('cancel');
		thisModal.dismiss();
	};

	const confirm = () => {
		console.log('confirm');
		thisModal.dismiss();
	};

	const cancel2 = () => {
		console.log('cancel');
		thisModal2.dismiss();
	};

	const confirm2 = () => {
		console.log('confirm');
		thisModal2.dismiss();
	};
</script>

<div class="ion-page">
	<ion-header>
		<ion-toolbar color="primary">
			<ion-title>Medicine Companion</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<h1>home</h1>

		<ion-chip role="button" on:click={refresh}>Refresh</ion-chip>

		<ion-modal trigger="open-modal" bind:this={thisModal}>
			<ion-header>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-button on:click={cancel}>Cancel</ion-button>
					</ion-buttons>
					<ion-title>Welcome</ion-title>
					<ion-buttons slot="end">
						<ion-button on:click={confirm} strong="true">Confirm</ion-button>
					</ion-buttons>
				</ion-toolbar>
			</ion-header>
			<ion-content class="ion-padding">
				<ion-item>
					<ion-input
						label="Enter your name"
						label-placement="stacked"
						type="text"
						placeholder="Your name"
					></ion-input>
				</ion-item>
			</ion-content>
			<ion-footer>
				<ion-toolbar>
					<ion-title> Footer </ion-title>
				</ion-toolbar>
			</ion-footer>
			<ion-button id="open-modal2" expand="block">Open</ion-button>
		</ion-modal>
		<ion-button id="open-modal" expand="block">Open</ion-button>

		<ion-modal trigger="open-modal2" bind:this={thisModal2}>
			<ion-header>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-button on:click={cancel2}>Cancel</ion-button>
					</ion-buttons>
					<ion-title>Welcome 2</ion-title>
					<ion-buttons slot="end">
						<ion-button on:click={confirm2} strong="true">Confirm</ion-button>
					</ion-buttons>
				</ion-toolbar>
			</ion-header>
			<ion-content class="ion-padding">
				<ion-item>
					<ion-input
						label="Enter your name"
						label-placement="stacked"
						type="text"
						placeholder="Your name"
					></ion-input>
				</ion-item>
			</ion-content>
			<ion-footer>
				<ion-toolbar>
					<ion-title> Footer </ion-title>
				</ion-toolbar>
			</ion-footer>
		</ion-modal>
	</ion-content>
</div>
