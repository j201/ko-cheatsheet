/*
 * Entry properties:
 * name: The name of the entry
 * link: The page on knockoutjs.com that provides the most information about the entry
 * desc: (optional) A short description of the entry
 * usage: (optional) A short example of the usage of the entry. Use an array of strings for multiple lines
 */

var apiData =
[
	{
		title: "Core",
		content: [
			{
				title: "Setup",
				content: [
					{
						name: "applyBindings()",
						link: "http://knockoutjs.com/documentation/observables.html",
						desc: "Applies view model bindings to the page or to a given node",
						usage: "ko.applyBindings(viewModel, [rootNode])"
					}
				]
			},
			{
				title: "Observables",
				content: [
					{
						name: "observable()",
						link: "http://knockoutjs.com/documentation/observables.html",
						desc: "Returns a value that notifies subscribers upon changes",
						usage: ["ko.observable(value) => Observable"]
					},
					{
						name: "observableArray()",
						link: "http://knockoutjs.com/documentation/observableArrays.html",
						desc: "An array that notifies subscribers when elements are added or removed",
						usage: ["ko.observableArray(array) => ObservableArray"]
					},
					{
						name: "computed()",
						link: "http://knockoutjs.com/documentation/computedObservables.html",
						desc: "An observable whose value is a function of other observables",
						usage: [
							"ko.computed([options]) => Computed",
							"ko.computed(fn, [context, options]) => Computed",
							"ko.computed({read: function, [write: function, disposeWhenNodeIsRemoved: Node, disposeWhen: function, owner: any, deferEvaluation: boolean]}) => Computed"
						]
					}
				]
			},
			{
				title: "Low-level",
				content: [
					{
						name: "subscribable()",
						link: "http://knockoutjs.com/documentation/fn.html",
						desc: "The base function that observables inherit from"
					}
				]
			}
		]
	},
	{
		title: "Bindings",
		content: [
			{
				title: "Binding Syntax",
				content: [
					{
						name: "data-bind",
						link: "http://knockoutjs.com/documentation/binding-syntax.html",
						desc: "Attribute that sets bindings on an element",
						usage: 'data-bind="click: listener, text: textObservable(), css: {class1: booleanObservable1(), class2: booleanObservable2()}"'
					},
					{
						name: "Binding Context Variables",
						link: "http://knockoutjs.com/documentation/binding-context.html",
						desc: "JavaScript variables that are available to use in bindings and are set based on the element's context"
					},
					{
						name: "Virtual Elements",
						link: "http://knockoutjs.com/documentation/custom-bindings-for-virtual-elements.html",
						desc: "Allows the definition of control flow bindings in comments rather than on elements",
						usage: [
							"<!-- ko if: booleanObservable() -->",
							"<div data-bind=\"text: textObservable()\"></div>",
							"<!-- /ko -->"
						]
					}
				]
			},
			{
				title: "Text and Appearance",
				content: [
					{
						name: "visible",
						desc: "Toggles the element's visibility",
						link: "http://knockoutjs.com/documentation/visible-binding.html",
						usage: 'data-bind="visible: booleanObservable()"'
					},
					{
						name: "text",
						desc: "Sets the element's content to the givent text",
						link: "http://knockoutjs.com/documentation/text-binding.html",
						usage: 'data-bind="text: textObservable()"'
					},
					{
						name: "html",
						desc: "Sets the inner HTML of the element",
						link: "http://knockoutjs.com/documentation/html-binding.html",
						usage: 'data-bind="html: textObservable()"'
					},
					{
						name: "css",
						desc: "Applies a css class to the element",
						link: "http://knockoutjs.com/documentation/css-binding.html",
						usage: 'data-bind="css: {cssClass: booleanObservable()}"'
					},
					{
						name: "style",
						desc: "Sets styles on the element",
						link: "http://knockoutjs.com/documentation/style-binding.html",
						usage: 'data-bind="style: {color: textObservable()}"'
					},
					{
						name: "attr",
						desc: "Sets attributes of the element",
						link: "http://knockoutjs.com/documentation/attr-binding.html",
						usage: 'data-bind="attr: {href: textObservable()}"'
					}
				]
			},
			{
				title: "Control Flow",
				content: [
					{
						name: "with",
						link: "http://knockoutjs.com/documentation/with-binding.html",
						desc: "Sets the context to a given object",
						usage: 'data-bind="with: contextObject"'
					},
					{
						name: "foreach",
						link: "http://knockoutjs.com/documentation/foreach-binding.html",
						desc: "Duplicates the child markup for each element of an array with the context bound to the element",
						usage: 'data-bind="forEach: array"'
					},
					{
						name: "if",
						link: "http://knockoutjs.com/documentation/if-binding.html",
						desc: "Only renders the child markup if a given boolean expression is true",
						usage: 'data-bind="if: booleanObservable()"'
					},
					{
						name: "ifnot",
						link: "http://knockoutjs.com/documentation/ifnot-binding.html",
						desc: "The same as `if`, except uses the negation of the given boolean expression",
						usage: 'data-bind="ifnot: booleanObservable()"'
					}
				]
			},
			{
				title: "Events",
				content: [
					{
						name: "click",
						link: "http://knockoutjs.com/documentation/click-binding.html",
						desc: "Adds an event listener for click events on the element",
						usage: 'data-bind="click: listener"'
					},
					{
						name: "event",
						link: "http://knockoutjs.com/documentation/event-binding.html",
						desc: "Sets event listeners on the element",
						usage: 'data-bind="event: {keydown: keydownListener, keyup: keyupListener}"'
					}
				]
			},
			{
				title: "Forms",
				content: [
					{
						name: "submit",
						link: "http://knockoutjs.com/documentation/submit-binding.html",
						desc: "Adds an event listener for submit events on the element",
						usage: 'data-bind="submit: listener"'
					},
					{
						name: "enable",
						link: "http://knockoutjs.com/documentation/enable-binding.html",
						desc: "Sets whether the element is enabled",
						usage: 'data-bind="enable: booleanObservable()"'
					},
					{
						name: "disable",
						link: "http://knockoutjs.com/documentation/disable-binding.html",
						desc: "The same as `enable`, except uses the negation of the given boolean expression",
						usage: 'data-bind="disable: booleanObservable()"'
					},
					{
						name: "value",
						link: "http://knockoutjs.com/documentation/value-binding.html",
						desc: "Sets the value property of an element",
						usage: 'data-bind="value: textObservable()"'
					},
					{
						name: "hasFocus",
						link: "http://knockoutjs.com/documentation/hasFocus-binding.html",
						desc: "Two-way binding that represents whether the element has focus",
						usage: 'data-bind="hasFocus: booleanObservable()"'
					},
					{
						name: "checked",
						link: "http://knockoutjs.com/documentation/checked-binding.html",
						desc: "Two-way bnding that represents whether the element is checked",
						usage: 'data-bind="checked: booleanObservable()"'
					},
					{
						name: "options",
						link: "http://knockoutjs.com/documentation/options-binding.html",
						desc: "Sets the options that will appear in a drop-down list",
						usage: 'data-bind="options: textObservableArray()"'
					},
					{
						name: "selectedOptions",
						link: "http://knockoutjs.com/documentation/selectedOptions-binding.html",
						desc: "Two-way binding that represents which options are selected",
						usage: 'data-bind="selectedOptions: textObservableArray()"'
					},
					{
						name: "uniqueName",
						link: "http://knockoutjs.com/documentation/uniqueName-binding.html",
						desc: "Gives the element a unique name attribute",
						usage: 'data-bind="uniqueName: true"'
					}
				]
			},
			{
				title: "Templates",
				content: [
					{
						name: "template",
						link: "http://knockoutjs.com/documentation/template-binding.html",
						desc: "Binding that allows the use of predefined HTML templates",
						usage: 'data-bind="template: {name: \'my-template\', data: templateData}"'
					}
				]
			}
		]
	}
];
