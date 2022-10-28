export default class AddressModel {
  address1 = '';
  address2 = '';
  cityTown = '';
  stateProvince = '';
  postalCode = '';

  clear() {
    this.address1 = '';
    this.address2 = '';
    this.cityTown = '';
    this.stateProvince = '';
    this.postalCode = '';
  }
}
