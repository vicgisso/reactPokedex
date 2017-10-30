window.CreatePokemonComponent = React.createClass({
    // initialize values
    getInitialState: function () {
        return {
            types1: [],
            selectedType1Id: -1,
            types2: [],
            selectedType2Id: -1,
            name: '',
            description: '',
            evolveTo: [],
            selectedEvolveToId: -1,
            successCreation: null
        };
    },

    // on mount, get all types and store them in this component's state
    componentDidMount: function () {
        this.serverRequest = $.get("http://localhost/api/type/read.php", function (types) {
            this.setState({
                types1: types.records,
                types2: types.records
            });
        }.bind(this));

        this.serverRequest = $.get("http://localhost/api/pokemon/read.php", function (pokemon) {
            this.setState({
                evolveTo: pokemon.records
            });
        }.bind(this));

        $('.page-header h1').text('Create pokemon');
    },

    // on unmount, stop getting types in case the request is still loading
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    // handle type1 change
    onType1Change: function (e) {
        this.setState({ selectedType1Id: e.target.value });
    },

    // handle type2 change
    onType2Change: function (e) {
        this.setState({ selectedType2Id: e.target.value });
    },

    // handle name change
    onNameChange: function (e) {
        this.setState({ name: e.target.value });
    },

    // handle description change
    onDescriptionChange: function (e) {
        this.setState({ description: e.target.value });
    },

    // handle evolve change
    onEvolveToChange: function (e) {
        this.setState({ selectedEvolveToId: e.target.value });
    },

    // handle save button clicked
    onSave: function (e) {

        // data in the form
        var form_data = {
            name: this.state.name,
            description: this.state.description,
            type1_id: this.state.selectedType1Id,
            type2_id: this.state.selectedType2Id,
            evolution_id: this.state.selectedEvolveToId
        };

        // submit form data to api
        $.ajax({
            url: "http://localhost/api/product/create.php",
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(form_data),
            success: function (response) {

                // api message
                this.setState({ successCreation: response['message'] });

                // empty form
                this.setState({ name: "" });
                this.setState({ description: "" });
                this.setState({ selectedType1Id: -1 });
                this.setState({ selectedType2Id: -1 });
                this.setState({ selectedEvolveToId: -1 });

            }.bind(this),
            error: function (xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        e.preventDefault();
    },

    render: function () {

        // make types as option for the select tag.
        var types1Options = this.state.types1.map(function (types1) {
            return (
                <option key={types1.id} value={types1.id}>{types1.name}</option>
            );
        });
        var types2Options = this.state.types2.map(function (types2) {
            return (
                <option key={types2.id} value={types2.id}>{types2.name}</option>
            );
        });
        var evolveToOptions = this.state.evolveTo.map(function (evolveTo) {
            return (
                <option key={evolveTo.id} value={evolveTo.id}>{evolveTo.name}</option>
            );
        });
        /*
        - tell the user if a pokemon was created
        - tell the user if unable to create pokemon
        - button to go back to pokemon list
        - form to create a pokemon
        */
        return (
            <div>
                {

                    this.state.successCreation == "Pokemon was created." ?
                        <div className='alert alert-success'>
                            Pokemon was saved.
                        </div>
                        : null
                }

                {

                    this.state.successCreation == "Unable to create pokemon." ?
                        <div className='alert alert-danger'>
                            Unable to save pokemon. Please try again.
                        </div>
                        : null
                }

                <a href='#'
                    onClick={() => this.props.changeAppMode('read')}
                    className='btn btn-primary margin-bottom-1em'> Read Pokemon
                </a>


                <form onSubmit={this.onSave}>
                    <table className='table table-bordered table-hover'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input
                                        type='text'
                                        className='form-control'
                                        value={this.state.name}
                                        required
                                        onChange={this.onNameChange} />
                                </td>
                            </tr>

                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea
                                        type='text'
                                        className='form-control'
                                        required
                                        value={this.state.description}
                                        onChange={this.onDescriptionChange}>
                                    </textarea>
                                </td>
                            </tr>

                            <tr>
                                <td>First type</td>
                                <td>
                                    <select
                                        onChange={this.onType1Change}
                                        className='form-control'
                                        value={this.state.selectedType1Id}>
                                        <option value="-1">Select type...</option>
                                        {types1Options}
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>Second type</td>
                                <td>
                                    <select
                                        onChange={this.onType2Change}
                                        className='form-control'
                                        value={this.state.selectedType2Id}>
                                        <option value="-1">Select type...</option>
                                        {types2Options}
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>Evolves to</td>
                                <td>
                                    <select
                                        onChange={this.onEvolveToChange}
                                        className='form-control'
                                        value={this.state.selectedEvolveToId}>
                                        <option value="-1">Select pokemon...</option>
                                        {evolveToOptions}
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <button
                                        className='btn btn-primary'
                                        onClick={this.onSave}>Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});
