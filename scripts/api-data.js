module.exports =
[
	{
		title: "Core",
		content: [
			{
				title: "MVVM",
				content: [
					{
						name: "applyBindings()",
						link: "http://knockoutjs.com/documentation/observables.html",
						sigs: ["ko.applyBindings(viewModel, [rootNode])"]
					}
				]
			},
			{
				title: "Observables",
				content: [
					{
						name: "observable()",
						link: "http://knockoutjs.com/documentation/observables.html",
						sigs: ["ko.observable(value) => Observable"]
					},
					{
						name: "observableArray()",
						link: "http://knockoutjs.com/documentation/observableArrays.html",
						sigs: ["ko.observableArray(array) => ObservableArray"]
					},
					{
						name: "computed()",
						link: "http://knockoutjs.com/documentation/computedObservables.html",
						sigs: [
							"ko.computed([options]) => Computed",
							"ko.computed(fn, [context, options]) => Computed",
							"ko.computed({read: fn, [write: fn, disposeWhenNodeIsRemoved: Node, disposeWhen: fn, owner: any, deferEvaluation: boolean}) => Computed"
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
					}
				]
			},
		]
	},
	{
		title: "Bindings",
		content: [
			{
				title: "Text and Appearance",
				content: [
					{
						name: "visible",
						link: "http://knockoutjs.com/documentation/visible-binding.html",
					},
					{
						name: "text",
						link: "http://knockoutjs.com/documentation/text-binding.html",
					},
					{
						name: "html",
						link: "http://knockoutjs.com/documentation/html-binding.html",
					},
					{
						name: "css",
						link: "http://knockoutjs.com/documentation/css-binding.html",
					},
					{
						name: "style",
						link: "http://knockoutjs.com/documentation/style-binding.html",
					},
					{
						name: "attr",
						link: "http://knockoutjs.com/documentation/attr-binding.html",
					}
				],
			},
			{
				title: "Control Flow",
				content: [
					{
						name: "foreach",
						link: "http://knockoutjs.com/documentation/foreach-binding.html",
					},
					{
						name: "if",
						link: "http://knockoutjs.com/documentation/if-binding.html",
					},
					{
						name: "ifnot",
						link: "http://knockoutjs.com/documentation/ifnot-binding.html",
					},
					{
						name: "with",
						link: "http://knockoutjs.com/documentation/with-binding.html",
					}
				]
			},
			{
				title: "Events",
				content: [
					{
						name: "click",
						link: "http://knockoutjs.com/documentation/click-binding.html",
					},
					{
						name: "event",
						link: "http://knockoutjs.com/documentation/event-binding.html",
					}
				]
			},
			{
				title: "Forms",
				content: [
					{
						name: "submit",
						link: "http://knockoutjs.com/documentation/submit-binding.html",
					},
					{
						name: "enable",
						link: "http://knockoutjs.com/documentation/enable-binding.html",
					},
					{
						name: "disable",
						link: "http://knockoutjs.com/documentation/disable-binding.html",
					},
					{
						name: "value",
						link: "http://knockoutjs.com/documentation/value-binding.html",
					},
					{
						name: "hasFocus",
						link: "http://knockoutjs.com/documentation/hasFocus-binding.html",
					},
					{
						name: "checked",
						link: "http://knockoutjs.com/documentation/checked-binding.html",
					},
					{
						name: "options",
						link: "http://knockoutjs.com/documentation/options-binding.html",
					},
					{
						name: "selectedOptions",
						link: "http://knockoutjs.com/documentation/selectedOptions-binding.html",
					},
					{
						name: "uniqueName",
						link: "http://knockoutjs.com/documentation/uniqueName-binding.html",
					}
				],
			},
			{
				title: "Templates",
				content: [
					{
						name: "template",
						link: "http://knockoutjs.com/documentation/template-binding.html",
					}
				],
			},
			{
				title: "Binding Syntax",
				content: [
					{
						name: "data-bind=\"...\"",
						link: "http://knockoutjs.com/documentation/binding-syntax.html",
					},
					{
						name: "Binding Context Variables",
						link: "http://knockoutjs.com/documentation/binding-context.html",
					}
				]
			}
		]
	}
];
