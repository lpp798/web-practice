import _ from 'lodash';
import San from 'san';
import './style.css';

var MyApp = San.defineComponent({
    template: `
    <div>
    <div class="{{flag? 'nochange':'change'}}"  on-click="change">class:click</div>
    <div style="background: {{color}};width:100px;height:100px;margin-top:20px;">style:noclick</div>
    </div>
    `,
    initData: function(){
        return {
            flag: true,
            color: 'green'
        }
    },
    change: function() {
        let tem = this.data.get('flag');
        this.data.set('flag',!tem);
        console.log(this.data.get('flag'));
    }
});

var myApp = new MyApp();
myApp.attach(document.body);