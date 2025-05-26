export default function searchBar({searchValue, onSearchChange}){
    return (
        <input
            type='text'
            className="form-control"
            placeholder="Cari nama"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    )
}