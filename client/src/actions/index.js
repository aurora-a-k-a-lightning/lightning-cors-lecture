import {API_BASE_URL} from "../config";

export const FETCH_KACL_CAST_SUCCESS = 'FETCH_KACL_CAST_SUCCESS';
export const fetchKACLCastSuccess = cast => ({
  type: FETCH_KACL_CAST_SUCCESS,
  cast
});

export const FETCH_KACL_CAST = 'FETCH_CAST';
export const fetchKACLCast = () => dispatch => {
    fetch(`${API_BASE_URL}/cast`).then(res => {
        if (!res.ok) {
            console.log('res: ', res);
            console.log('rejecting promise');
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(kaclCast => {
        dispatch(fetchKACLCastSuccess(kaclCast));
    }).catch(err => {
        console.log(err);
    });
};

