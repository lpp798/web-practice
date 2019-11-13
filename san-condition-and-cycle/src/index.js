import _ from 'lodash';
import San from 'san';
import './style.css';

var MyApp = San.defineComponent({
    template: `
    <div class="container">
        <button on-click="addInfo">添加</button>
        <table>
            <tr>
                <th>姓名</th>
                <th>审核状态</th>
                <th>操作</th>
            </tr>
            <tr s-for="p,index in list">
                <td>{{p.name}}</td>
                <template s-if="p.status === 1">
                    <td>合格</td>
                    <td><button on-click="delect(index)">删除</button></td>
                </template>
                <template s-elif="p.status === 2">
                    <td>不合格</td>
                    <td><button on-click="delect(index)">删除</button></td>
                </template>
                <template s-elif="p.status === 3">
                    <td>待审核</td>
                    <td><button on-click="check(p,index)">审核</button></td>
                </template>
            </tr>
        </table>
    </div>
    `,
    initData: function() {
        return{
            list: [{name:'张三',status: 1},{name:'李四',status: 2},{name:'王五',status: 3},{name:'赵六',status: 3},{name:'孙七',status: 3}]
        }
    },
    addInfo: function() {
        let Name = prompt("请输入姓名");
        if(Name){
            this.data.push('list',{name:Name,status:3});
        }else{
            return ;
        }
    },
    check: function(p,index){
        this.data.splice('list',[index,1,{name:p.name,status:1}]);
    },
    delect: function(index){
        this.data.splice('list',[index,1]);
    }
});

var myApp = new MyApp();
myApp.attach(document.body);
