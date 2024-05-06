// alert("helo")
document.addEventListener("DOMContentLoaded", function () {
    const epicMix = [
        "Time to Pretend",
        "O-o-oh Child",
        "Wish You Were Here",
        "Heroes",
        "I Put a Spell on You",
        "Call Me",
        "Paper Planes",
        "Jolene",
        "You Don't Own Me",
        "Fast Car",
        "Run the World [Girls]",
        "Superstition",
    ];

    const total = document.getElementById("total");
    const mixList = document.getElementById("mixList");
    const button = document.getElementById("button");

    button.addEventListener("click", function() {
        button.style.display="none";

        list();
        if(button.style.display==="none"){
            mixList.style.border="5px solid #fff";
        }

        else{
            mixList.style.border="none";
        }

    });

    total.innerHTML = `${epicMix.length} GREAT SONGS!`;

    function list() {
        let table = "";
        epicMix.map((song,i)=>{
            table+=
            `<li class="text-light pb-3 ps-3 fw-bold fs-4 nav-items"><span class="mx-4 p-1"># ${i+1}</span>${song}</li>`});
            mixList.innerHTML=table;
    }

});
