import { Model } from "@vuex-orm/core";

//Entity to get save the barcode details
class BarcodeDetail extends Model {
  static entity = "barcodeDetail";

  static fields() {
    return {
      time_stamp: this.string(""),
      barcode_url: this.string(""),
    };
  }
}
export { BarcodeDetail, };
