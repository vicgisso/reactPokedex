// component that decides which main component to load: read or create/update
var MainApp = React.createClass({

    // initial mode is 'read' mode
    getInitialState: function () {
        return {
            currentMode: 'read',
            pokemonId: null
        };
    },

    // used when use clicks something that changes the current mode
    changeAppMode: function (newMode, pokemonId) {
        this.setState({ currentMode: newMode });
        if (pokemonId !== undefined) {
            this.setState({ pokemonId: pokemonId });
        }
    },

    // render the component based on current or selected mode
    render: function () {

        var modeComponent =
            <ReadPokemonComponent
                changeAppMode={this.changeAppMode} />;

        switch (this.state.currentMode) {
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOnePokemonComponent pokemonId={this.state.pokemonId} changeAppMode={this.changeAppMode} />;
                break;
            case 'create':
                modeComponent = <CreatePokemonComponent changeAppMode={this.changeAppMode} />;
                break;
            case 'update':
                modeComponent = <UpdatePokemonComponent pokemonId={this.state.pokemonId} changeAppMode={this.changeAppMode} />;
                break;
            case 'delete':
                modeComponent = <DeletePokemonComponent pokemonId={this.state.pokemonId} changeAppMode={this.changeAppMode} />;
                break;
            default:
                break;
        }

        return modeComponent;
    }
});

// go and render the whole React component on to the div with id 'content'
ReactDOM.render(
    <MainApp />,
    document.getElementById('content')
);
