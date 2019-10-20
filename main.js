// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
    fetch: function() {
    var todos = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
        todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
    },
    save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}


const app = new Vue({
    el: '#app',
    data : {
        todos : [],

    },
    methods : {
        doAdd: function(event, value) {
            // refで名前を付けていた処理を取得
            var comment = this.$refs.comment

            // 入力が何もなければリターン
            if (!comment.value.length){
                return
            }

            // {新しいID, コメント, 作業状態}
            // というオブジェクトを現在の　todos リストへ追加
            // 初期値は「作業中=0」で作成
            this.todos.push({
                id: todoStorage.uid++,
                comment: comment.value,
                state: 0,
            })

            // 入力後はフォームを空にする
            comment.value = ''
        }
    },
})