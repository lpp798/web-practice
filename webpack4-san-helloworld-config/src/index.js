import _ from "lodash";
import San from "san";
import './style.css';

const MySan = San.defineComponent({
    template: `
        <div class="hello">
            <p>Hello {{name}}!</p>
        </div>
    `,
    initData: function () {
        return {
            name: 'World'
        };
    }
});

var mySan = new MySan();
mySan.attach(document.body);