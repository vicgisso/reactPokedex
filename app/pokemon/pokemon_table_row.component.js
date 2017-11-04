// component that renders a single pokemon
window.PokemonRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td className='center-justified container-fluid' >
                    {this.props.pokemon.name}
                </td>
                <td className='center-justified container' >
                    {this.props.pokemon.description}
                </td>
                <td className='fit container'>
                    <a href='#'
                        onClick={() => this.props.changeAppMode('readOne', this.props.pokemon.id)}
                        className='btn btn-info padded center-justified'> Details
                </a>
                    <a href='#'
                        onClick={() => this.props.changeAppMode('update', this.props.pokemon.id)}
                        className='btn btn-primary padded center-justified'> Edit
                </a>
                    <a
                        onClick={() => this.props.changeAppMode('delete', this.props.pokemon.id)}
                        className='btn btn-danger padded center-justified'> Delete
                </a>
                </td>
            </tr>
        );
    }
});
