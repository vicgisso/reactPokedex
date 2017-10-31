window.ReadOnePokemonComponent = React.createClass({
    // initialize values
    getInitialState: function () {
        return {
            type1: '',
            type2: '',
            name: '',
            description: '',
            evolveTo: '',

        };
    },

    // on mount, get all types and store them in this component's state
    componentDidMount: function () {

        // pokemon id
        var pokemonId = this.props.pokemonId;

        this.serverRequest = $.get("http://localhost/api/pokemon/read_one.php?id=" + pokemonId, function (pokemon) {
            this.setState({
                name: pokemon.name,
                description: pokemon.description,
                type1: pokemon.type1_name,
                type2: pokemon.type2_name,
                evolveTo: pokemon.evolution_name
            });
        }.bind(this));

        $('.page-header h1').text('Details of\"' + this.state.name + '\"');
    },

    // on unmount, stop getting types in case the request is still loading
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {

        return (
            <div>

                <a href='#'
                    onClick={() => this.props.changeAppMode('read')}
                    className='btn btn-primary margin-bottom-1em'> List of Pokemon
                    </a>


                <form onSubmit={this.onSave}>
                    <table className='table table-bordered table-hover'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input
                                        type='text'
                                        disabled='disabled'
                                        className='form-control'
                                        value={this.state.name}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea
                                        type='text'
                                        disabled='disabled'
                                        className='form-control'
                                        required
                                        value={this.state.description}>
                                    </textarea>
                                </td>
                            </tr>

                            <tr>
                                <td>First type</td>
                                <td>
                                    <input
                                        type='text'
                                        disabled='disabled'
                                        className='form-control'
                                        value={this.state.type1}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Second type</td>
                                <td>
                                    <input
                                        type='text'
                                        disabled='disabled'
                                        className='form-control'
                                        value={this.state.type2}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Evolves to</td>
                                <td>
                                    <input
                                        type='text'
                                        disabled='disabled'
                                        className='form-control'
                                        value={this.state.evolveTo}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <a href='#'
                                        onClick={() => this.props.changeAppMode('update', this.props.pokemonId)}
                                        className='btn btn-primary m-r-1em'> Edit
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});
