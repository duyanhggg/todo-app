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
    `;
    
    taskList.appendChild(li);
    taskInput.value = ''; // Xóa input
}

// Cho phép nhấn Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});