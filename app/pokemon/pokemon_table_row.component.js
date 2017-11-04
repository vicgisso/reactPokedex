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
                    <div className='btn-group-landscape'>
                        <a href='#'
                            onClick={() => this.props.changeAppMode('readOne', this.props.pokemon.id)}
                            className='btn btn-info padded'> Details
                </a>
                        <a href='#'
                            onClick={() => this.props.changeAppMode('update', this.props.pokemon.id)}
                            className='btn btn-primary padded'> Edit
                </a>
                        <a
                            onClick={() => this.props.changeAppMode('delete', this.props.pokemon.id)}
                            className='btn btn-danger padded'> Delete
                </a>
                    </div>
                </td>
            </tr>
        );
    }
});
