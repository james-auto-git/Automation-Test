class AddOns {
    constructor(page) {
    this.page = page;   

}
    async AddOn(addOns) {
     await this.page.getByRole('button', { name: 'AddOns Featured' }).hover();
     await this.page.getByRole('link', { name: addOns }).click();
        

    }

}

module.exports = { AddOns };