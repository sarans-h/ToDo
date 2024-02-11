$(".inputtext").keypress(function (e) {
  //   console.log(e);
  if (e.which === 13) {
    let todotext = $(this).val();
    // console.log(todotext);
    $(this).val("");

    $(".task-container").append(`<div class="task">

    <div class="checkbox">
        <input type="checkbox" class="checkbox__input" />
        <span class="checkbox__inner"></span>
    </div>

    <div class="task-heading">
        <h3>${todotext}</h3>
    </div>
    <div class="cross"><i class="fa-solid fa-xmark" style="font-size: 20px;"></i></div>
</div>`);
  }
});
$("button").click(function (e) {
  //   console.log(e);

  let todotext = $(".inputtext").val();
  // console.log(todotext);
  $(".inputtext").val("");

  $(".task-container").append(`<div class="task">
  
      <label class="checkbox">
          <input type="checkbox" class="checkbox__input" />
          <span class="checkbox__inner"></span>
      </label>
  
      <div class="task-heading">
          <h3>${todotext}</h3>
      </div>
      <div class="cross"><i class="fa-solid fa-xmark" style="font-size: 20px;"></i></div>
  </div>`);
});

// delete task
$(".task-container").on("click", ".cross", function (e) {
  //   e.stopPropagation(); //stop event bubbling
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
});
// marking done
// $(".task-container").on("click", ".task ", function (e) {
//   //   e.stopPropagation(); //stop event bubbling
//   //   console.log($(this).parent());

//   $(this).toggleClass("toggler");
// });
// $(".task-container").on("click", ".task ", function (e) {
//   //   e.stopPropagation(); //stop event bubbling
//   //   console.log($(this).parent());

//   $(this).toggleClass("toggler");
// });

// Event delegation for dynamically added tasks

$(".task-container").on("change", ".checkbox__input", function (e) {
  e.stopPropagation();
  var $task = $(this).closest(".task");
  //   console.log($task);

  if ($(this).is(":checked")) {
    $task.addClass("toggler");
  } else {
    $task.removeClass("toggler");
  }
});
