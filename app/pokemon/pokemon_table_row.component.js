// component that renders a single pokemon
window.PokemonRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.pokemon.name}</td>
                <td>{this.props.pokemon.description}</td>
                <td><a href='#'
                        onClick={() => this.props.changeAppMode('readOne', this.props.pokemon.id)}
                        className='btn btn-info m-r-1em'> Details
                </a>
                <a href='#'
                        onClick={() => this.props.changeAppMode('update', this.props.pokemon.id)}
                        className='btn btn-primary m-r-1em'> Edit
                </a>
                <a
                        onClick={() => this.props.changeAppMode('delete', this.props.pokemon.id)}
                        className='btn btn-danger'> Delete
                </a>
                </td>
            </tr>
        );
    }
});
/*
                <td>{this.props.pokemon.type1_name}</td>
                <td>{this.props.pokemon.type2_name}</td>
                <td>{this.props.pokemon.evolution_name}</td>*/
