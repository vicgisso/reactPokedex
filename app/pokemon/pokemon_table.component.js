// component for the whole pokemon table
window.PokemonTable = React.createClass({
    render: function () {

        var rows = this.props.pokemon
            .map(function (pokemon, i) {
                return (
                    <PokemonRow
                        key={i}
                        pokemon={pokemon}
                        changeAppMode={this.props.changeAppMode} />
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger'>No pokemon found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>First type</th>
                            <th>Second type</th>
                            <th>Evolves to</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }
});
