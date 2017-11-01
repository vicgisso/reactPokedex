// component that contains all the logic and other smaller components
// that form the Read pokemon view
window.ReadPokemonComponent = React.createClass({
    getInitialState: function () {
        return {
            pokemon: []
        };
    },

    // on mount, fetch all pokemon and stored them as this component's state
    componentDidMount: function () {

        this.serverRequest = $.get("http://ec2-18-195-20-255.eu-central-1.compute.amazonaws.com/api/pokemon/read.php", function (pokemon) {
            this.setState({
                pokemon: pokemon.records
            });
        }.bind(this));
    },

    // on unmount, kill pokemon fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    // render component on the page
    render: function () {
        // list of pokemons
        var filteredPokemon = this.state.pokemon;
        $('.page-header h1').text('List of Pokemon');

        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />

                <PokemonTable
                    pokemon={filteredPokemon}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});
