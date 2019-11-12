import _ from 'lodash';
import San from 'san';
import './style.css';

//这里的template中根元素只能有一个
var MyApp = San.defineComponent({
    template: `
    <div class="container">
        <input value="{= name =}" placeholder="姓名（string）"/>
        <input value="{= age =}" placeholder="年龄（number）"/>
        <input value="{= des =}" placeholder="简介（string）"/>
        <div class="display">
            <p>姓名：{{name}}</p>
            <p>年龄：{{age}}</p>
            <p>简介：{{des}}</p>
        </div>
    </div>
    `,
    initData: function() {
        return {
            name: '',
            age: null,
            des: ''
        }
    }
});

var myApp = new MyApp();
myApp.attach(document.body);