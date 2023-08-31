// 页面路径：store/index.js
import { createStore } from 'vuex'
const store = createStore({
	state:{//存放状态
		"username":"foo",
		"age":18,
		"tasks": [
			{
				title: "出门买菜",
				tag: "健身",
				recycleOption: "仅一次",
				deadline: "剩余：6天12小时",
				reward: 108,
				describe: "买青菜，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋",
				status: true,
			}
		]
	},
	getters: {
		getTasks: state => {
			return state.tasks
		},
		unfinishedTaskCount: state => {
		      return state.tasks.length;
		}
	},
	mutations: {
	  // your mutations here
		addTask(state, task) {
		    state.tasks.push(task);
		}
	},
})

export default store



