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
        /*'table table-bordered table-hover'>*/
        return (
            !rows.length
                ? <div className='alert alert-danger'>No pokemon found.</div>
                :
                <div className='table table-responsive'>
                    <table className='table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th className='center-justified container-fluid' >Name</th>
                                <th className='center-justified container-fluid' >Description</th>
                                <th className='center-justified container-fluid' >Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
        );
    }
});
/*<th>First type</th>
                            <th>Second type</th>
                            <th>Evolves to</th>*/
