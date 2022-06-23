const createAppTitle = (title) => {
  const appTitle = document.createElement('h1');
  appTitle.innerHTML = title;

  return appTitle;
};

const createTodoForm = () => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const addButton = document.createElement('button');
  const wrapper = document.createElement('div');

  form.classList.add('input-group', 'mb-3');
  input.classList.add('form-control');
  input.placeholder = 'Введіть назву роботи';
  addButton.classList.add('btn', 'btn-primary');
  addButton.textContent = 'Добавити завдання';
  wrapper.classList.add('input-group-append');

  wrapper.append(addButton);
  form.append(input);
  form.append(wrapper);

  return{
    form,
    input,
    addButton
  };
};

const createTodoList = () => {
  const list = document.createElement('ul');
  list.classList.add('list-group');

  return list;
};

const createTodoItem = (name) => {
  const todoItem = document.createElement('li');
  const btnWrapper = document.createElement('div');
  const doneBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-item-cente');
  doneBtn.classList.add('btn', 'btn-success');
  deleteBtn.classList.add('btn', 'btn-danger');
  
  todoItem.textContent = name;
  doneBtn.textContent = 'Готово';
  deleteBtn.textContent = 'Видалити';

  btnWrapper.append(doneBtn, deleteBtn);
  todoItem.append(btnWrapper);

  return{
    todoItem,
    doneBtn,
    deleteBtn
  };
};

const completeTodoItem = (item, btn) => {
  btn.addEventListener('click', ()=> {
    item.classList.add('list-group-item-success');
  });
};



function createTodoApp(conteiner, title, key){
  const appTitle = createAppTitle(title);
  const appForm = createTodoForm();
  const appList = createTodoList();

  conteiner.append(appTitle, appForm.form, appList);

  appForm.form.addEventListener('submit', e => {
    e.preventDefault();

    const todoItem = createTodoItem(appForm.input.value);

    if(!appForm.input.value){
      return;
    }

    appList.append(todoItem.todoItem);
    appForm.input.value = '';
  });
}



