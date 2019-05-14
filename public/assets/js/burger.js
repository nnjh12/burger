$(function () {
    $(document).on("click", "#add-button", function (event) {
        event.preventDefault();
        var userInput = $("#burger-input").val().trim()
        console.log(userInput)
        if (userInput===""){
            return userInput
        }
        var newBurger = {
            burger_name: userInput,
            devoured: false
        }

        $.post("/api/burgers", newBurger)
            .then(
                function () {
                    location.reload()
                }
            )
    })
    $(document).on("click", "#devour-button", function (event) {
        event.preventDefault();

        var id = $(this).attr("data-id")
        console.log(id)
        // $.put("/api/burgers/" + id, { devoured: true })
        //     .then(
        //         function () {
        //             location.reload()
        //         }
        //     )
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: true }
        }).then(
            function () {
                location.reload();
            }
        );
    })
})
