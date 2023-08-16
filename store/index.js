// 页面路径：store/index.js
import { createStore } from 'vuex'
const store = createStore({
	state:{//存放状态
		"username":"foo",
		"age":18,
		"tasks": [
			{
				endTime: "剩余：6天12小时",
				title: "出门买菜",
				discribe: "买青菜，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋",
				rewards: 108,
				status: true,
			},
		]
	},
	mutations: {
	  // your mutations here
		addTask(state, task) {
		    state.tasks.push(task);
		}
	},
	getters: {
		getTasks() {
			return state.tasks
		}
	},
})

export default store



