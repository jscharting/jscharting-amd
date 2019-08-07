requirejs(['jscharting/dist/jscharting'], function (JSC) {
	new JSC.Chart({
		targetElement: 'chartContainer',
		debug: true,
		type: 'column',
		title_label_text: 'Device Availability And Personal Use',
		legend: {
			position: 'inside top',
			outline_color: 'none',
			horizontalSpacing: 20,
			defaultEntry_value: '%yValue%',
			corners: 'square'

		},
		yAxis_defaultTick_label_text: '%value%',
		series: [
			{
				defaultPoint: {
					legendEntry_icon: {
						fill: 'white',
						outline_color: '#ababab'
					},
					marker: {
						visible: true,
						size: 40,
						fill: 'white'

					}
				},
				name: 'Top Country Populations',
				palette: 'pastel',
				points: [
					{
						name: 'Smartphone',
						y: 78,
						marker: { type: 'material/hardware/smartphone', size: 30 },
						legendEntry_icon: { name: 'material/hardware/smartphone', size: 15 }
					},
					{ name: 'Tablet', y: 39, marker_type: 'material/hardware/tablet', legendEntry_icon_name: 'material/hardware/tablet' },
					{ name: 'Laptop', y: 49, marker_type: 'material/hardware/laptop', legendEntry_icon_name: 'material/hardware/laptop' },
					{ name: 'Desktop', y: 61, marker_type: 'material/hardware/desktop-windows', legendEntry_icon_name: 'material/hardware/desktop-windows' }
				]
			}
		]
	});
});
