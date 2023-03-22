<script>
	export let form;
	// let username = '';
	// let password = '';
	// let message = '';
	// const handleSubmit = async () => {
	// 	message = '';
	// 	const response = await fetch('/auth', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			username,
	// 			password
	// 		})
	// 	});
	// 	const data = await response.json();
	// 	message = data.message;
	// };
</script>

<form on:submit|preventDefault={handleSubmit} method="post">
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="username" />
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Login</button>
</form>
