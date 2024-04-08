// Promise sayesinde asenkron kod blokları ile çalışabiliyoruz.
// resolve veri çözüldü state
// reject veri çözülemedi hata döndü state (Client Status Code yada Server Status Code)
// reject olan promise hatasını catch ile takip ediyoruz
// resolve olan ise then ile dinliyoruz.
// Backend Kodu
const usersPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// veri dönebilir hata yok.
		return resolve([
			{ id: 1, name: 'Ali' },
			{ id: 2, name: 'Mustafa' },
			{ id: 3, name: 'Hakan' },
		]);
	}, 3000); // 3s
});

const userRolePromise = () => Promise.resolve(['Admin', 'Manager']);

// Promise takibi Client App de olur.

function Promises() {
	// component açılışında tetiklendi.

	// Not : Veri asenkron ise ve asekron verinin için başka b,ir asenkron veriyi çekmeye ihtiyaç duyarsak senkron bir şekilde işlem yapmak için iç içe nested formda promiseleri yazıyoruz.

	const loadUsers = () => {
		// paralelde çalışsın
		// userRolePromise.then((roles) => {
		// 	console.log('roles-async-paralel', roles);
		// });

		// paralelde 2. çalışan promise.
		usersPromise
			.then((response) => {
				console.log('response', response);

				// user atanmış roller
				userRolePromise()
					.then((roles) => {
						console.log('roles', roles);
					})
					.catch((error) => {
						alert(error);
					});
			})
			.catch((error) => {
				console.log('error', error);
			});
	};

	// ES7 ile birlikte sıralı işlemlerde iç içe kod blokları yazmak yerine async await keyword ile sıralı yazım şekli geldi.
	const loadUsersAsync = async () => {
		try {
			const users = await usersPromise; // 300 ms
			const userRoles = await userRolePromise(); // 0 ms

			console.log('users', users);
			console.log('userRoles', userRoles);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<>
			<button onClick={loadUsers}>Load Users</button>
			<button onClick={loadUsersAsync}>Load Users Async</button>
		</>
	);
}

export default Promises;
