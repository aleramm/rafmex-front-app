import Swal from "sweetalert2";

export default Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3500
});