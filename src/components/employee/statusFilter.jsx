export default function statusFilter({status, onStatusChange}) {
    return (
        <div>
            <select
                id="statusFilter"
                className="form-select form-select-sm"
                value={status}
                onChange={(e) => onStatusChange(e.target.value)}>
                    <option value='semua'>Semua</option>
                    <option value='aktif'>Aktif</option>
                    <option value='nonaktif'>Nonaktif</option>
            </select>
        </div>
    )
}