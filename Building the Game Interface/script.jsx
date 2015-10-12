var Game = React.createClass(
{
  	render: function()
	{
		return(
			<div id="game">
				<h2> Play Nine </h2>
			</div>
		);
	}
});

ReactDOM.render
(
  	<Game />,
  	document.getElementById("container")
);