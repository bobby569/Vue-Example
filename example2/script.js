// Creating a new Vue instance and pass in an options object.
var demo = new Vue({
	// A DOM element to mount our view model.
	el: '#main',
	// Define properties and give them initial values.
	data: {
		show_tooltip: false,
		text_content: 'Click and Edit me.'
	},
	// Functions we will be using.
	methods: {
		hideTooltip() {
			// When a model is changed, the view will be automatically updated.
			this.show_tooltip = false;
		},
		toggleTooltip() {
			this.show_tooltip = !this.show_tooltip;
		}
	}
});
