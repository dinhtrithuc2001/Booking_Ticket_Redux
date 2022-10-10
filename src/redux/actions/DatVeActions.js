import { DAT_GHE, HUY_GHE, THANH_TOAN } from "../type/DatVeType"

export const datGheAction = (ghe) => {
    return {
        type: DAT_GHE,
        ghe
    }
}
export const huyGheAction = (soGhe) => {
    return {
        type: HUY_GHE,
        soGhe
    }
}
export const thanhToanAction = () => {
    return {
        type: THANH_TOAN,
    }
}