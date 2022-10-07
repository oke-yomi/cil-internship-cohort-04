const alltodos = document.querySelector(".get-todos");
const display = document.querySelector(".display");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

let li = "";

const url =
	"https://jsonplaceholder.typicode.com/todos";

// GET
// alltodos.addEventListener("click", () => {
// 	getAllTodos();
// });

const getAllTodos = async () => {
	try {
		const res = await fetch(`${url}`);
		const data = await res.json();

		let todos = data.splice(185);
		console.log(todos);

		todos.forEach((todo) => {
			let isCompleted =
				todo.completed == "true" ? "checked" : "";

			li += `<li>
              <input type="checkbox" name="${todo.id}" id="${todo.id}" ${isCompleted} />

              ${todo.title}
            </li>`;
		});
	} catch (err) {
		console.log(err);
	}

	display.innerHTML = li;
};
getAllTodos();

// POST
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = input.value;

	postTodo(data);
});

const postTodo = async (data) => {
	try {
		if (data === undefined || !data) {
			alert("You need to input a todo task");
			return;
		}
		const res = await fetch(`${url}`, {
			method: "POST",
			body: JSON.stringify({
				userId: 1,
				title: data,
				completed: false,
			}),
			headers: {
				"Content-type":
					"application/json; charset=UTF-8",
			},
		});

		const newtodo = await res.json();

		li += `<li>
            <input type="checkbox" name="${newtodo.id}" id="${newtodo.id}" />

            ${newtodo.title}
          </li>`;
	} catch (err) {
		console.log(err);
	}

	display.innerHTML = li;
};


// PUT
// axios
// 	.put(`${URL}/2`, {
// 		title: "hello",
// 		completed: true,
// 	})
// 	.then((res) => console.log(res.data))
// 	.catch((err) => console.log(err));
