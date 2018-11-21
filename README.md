# JSCharting: Any Chart. Anywhere.

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin:0px" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript chart library for visualizing your data, providing resolution 
independent results across all devices and platorms. Every JSCharting license includes the 
full suite of 150+ advanced chart types, interactive stock charts and JSMapping at no additional charge.

## Official JSCharting examples for requirejs

This set of samples demonstrate how to use JSCharting as an amd module with RequireJS.

### How to use

1) Put JSCharting in separate folder.
2) Import and use JSCharting
```javascript
requirejs(['jscharting/jscharting'], function (JSC) {
	new JSC.Chart({
		targetElement: 'chartContainer',
		...
	});
});
```

----
