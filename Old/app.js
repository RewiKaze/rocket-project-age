Vue.config.productionTip = false;

Vue.component("age-input", {
    props: ["value"],
    template: `<input @keypress="isNumber($event)" v-model="interface" @input="updateValueApp" min="1" max="100" class='enter-1'>`,
    computed: {
        interface: {
            get() {
                return this.value;
            },
            set(val) {
                app.numAge = parseInt(val);
            },
        },
    },
    methods: {
        isNumber: function(evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46
            ) {
                evt.preventDefault();
            } else {
                // console.log(value);
                return true;
            }
        },
        updateValueApp() {
            app.number = this.value;
        },
    },
});

Vue.component("start", {
    template: "#start",
});

Vue.component("next", {
    template: "#next",
});
Vue.component("next2", {
    template: "#next2",
});

var app = new Vue({
    el: "#app",

    data: {
        page: "start",
        numAge: 0,
        des: null
    },
    methods: {
        onChangePage(to) {
            this.page = to;
        },
        checkPage() {
            if (this.numAge > 0 && this.numAge < 21) {
                $emit('change-page', 'next2')
            } else {
                $emit('change-page', 'next')
            }
        }
    },
});