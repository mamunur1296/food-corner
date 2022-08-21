


function FoodPriceCheckList(checkList) {
    const TableBody = document.getElementById("TableBody");
    TableBody.innerText = "";
    let totalPrive = 0;
    for (let i = 0; i < checkList.length; i++) {
        const length = i;
        const Title = checkList[i].FoodTitle;
        const price = checkList[i].FoodPrice;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${length + 1}</td>
            <td>${Title}</td>
            <td>${price}</td>
        `;
        TableBody.appendChild(tr);
        totalPrive = totalPrive + price;
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <th>Total Price</th>
            <th>Food Title</th>
            <th>${totalPrive}</th>
    `;
    TableBody.appendChild(tr);

}
const FoodArray = [];
function byNowBtn(Btn) {
    const FoodTitle = Btn.parentNode.parentNode.childNodes[1].innerHTML;
    const FoodPrice = Btn.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML;
    const FoodObjeckt = {
        FoodTitle: FoodTitle,
        FoodPrice: parseFloat(FoodPrice),
    }
    FoodArray.push(FoodObjeckt);
    document.getElementById("price-no").innerText = FoodArray.length;
    FoodPriceCheckList(FoodArray)
}