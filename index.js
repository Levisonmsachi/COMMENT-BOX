// select elements
const input = document.getElementById("comment-input");
const button = document.getElementById("submit-comment");
const list = document.getElementById("comment-list");


// Adding a sample comment
const example = document.createElement("div");
example.className = "p-3 bg-gray-200 rounded";
example.textContent = "Comments will appear down below!!....";

// Add to list
list.appendChild(example);

// Create a delete button for a sample comment
const delExmple = document.createElement("button");
delExmple.className = "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300";
delExmple.textContent = "Delete Sample Comment";
list.appendChild(delExmple);

delExmple.addEventListener("click", () => {
  example.remove();
  delExmple.remove();
});


// Respond when the Post comment button is clicked
button.addEventListener("click", () => {
  const comment = input.value.trim();

  if (comment === "") {
    alert("Comment cannot be empty!");
    return;
  }

  // Create comment element
  const newComment = document.createElement("div");
  newComment.className = "p-3 bg-gray-200 rounded";
  newComment.textContent = comment;

  // Add to list
  list.appendChild(newComment);

  // Create a delete button
  const delBtn = document.createElement("button");
  delBtn.className = "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300";
  delBtn.textContent = "Delete Comment";
  list.appendChild(delBtn);

  delBtn.addEventListener("click", () => {
    newComment.remove();
    delBtn.remove();
  });

  // Clear input
  input.value = "";
});
