// component that renders a single pokemon
window.PokemonRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td className='center-justified text_wallAway' >
                {this.props.pokemon.name}
                </td>
                <td className='center-justified text_wallAway' >
                {this.props.pokemon.description}
                </td>
                <td><a href='#'
                        onClick={() => this.props.changeAppMode('readOne', this.props.pokemon.id)}
                        className='btn btn-info text_wallAway'> Details
                </a>
                <a href='#'
                        onClick={() => this.props.changeAppMode('update', this.props.pokemon.id)}
                        className='btn btn-primary text_wallAway'> Edit
                </a>
                <a
                        onClick={() => this.props.changeAppMode('delete', this.props.pokemon.id)}
                        className='btn btn-danger text_wallAway'> Delete
                </a>
                </td>
            </tr>
        );
    }
});
