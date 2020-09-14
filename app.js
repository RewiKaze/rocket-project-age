Vue.config.productionTip = false;

Vue.component("age-input", {
    props: ["value"],
    template: `<input @keypress="isNumber($event)" min="1" max="100" class='enter-1'>`,
    methods: {
        isNumber: function (evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46
            ) {
                evt.preventDefault();
            } else {
                return true;
            }
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
    },

    methods: {
        onChangePage(to) {
            this.page = to;
        },
    },
    // components:{'ageInput':}
});