const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Vui lòng nhập công việc!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;
    
    // Sự kiện xóa
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });
    
    taskList.appendChild(li);
    taskInput.value = ''; // Xóa input sau khi thêm
}

// Nhấn Enter cũng thêm task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});