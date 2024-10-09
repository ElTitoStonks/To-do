"use strict"
function addNewWork() {
    // Show popUp
    let popUp = $(".elements__pop-up-hide");
    $("#addWork").click(() => {
        if (popUp.hasClass("elements__pop-up-hide")) {
            popUp.removeClass("elements__pop-up-hide");
            popUp.addClass("elements__pop-up");
        }
    });

    // Button "añadir tarea" inside pop up
    let buttonPOP = $(".form__btn");
    let mainBox = $("#COF");
    let mBE = $(".user__elements--empty");
    // Array where save elements of user
    let doIt = [];
    buttonPOP.on("click", ((e) => {
        e.preventDefault();
        let data = $(".form__input");
        doIt.push(data.val());
        mBE.removeClass("user__elements--empty").addClass("user__elements");
        doIt.forEach(e => {
            mainBox.append(`<p>${e}</p>`)
        });

        popUp.removeClass("elements__pop-up").addClass("elements__pop-up-hide");
    }));

    // add works outside popup button
    let buttonOUT = $(".btn__add");
    // let usr = $(".elements__text")
    // console.log(usr.length)

    buttonOUT.on("click", (e) => {
        e.preventDefault();
        if (mainBox.children().length > 0) {
            if (popUp.hasClass("elements__pop-up")) {
                popUp.addClass("elements__pop-up-hide");
                popUp.removeClass("elements__pop-up");
                console.log("Pop-up oculto");
            } else {
                popUp.removeClass("elements__pop-up-hide");
                popUp.addClass("elements__pop-up");
                console.log("Pop-up mostrado de nuevo");
            }
        } else {
            console.log("No hay tareas, no se puede mostrar el pop-up nuevamente.");
        }

    });

}
addNewWork()