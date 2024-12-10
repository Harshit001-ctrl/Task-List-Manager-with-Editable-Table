# React + Vite

1. Display a Task Table using an editable table library such as Tabulator.js or similar.
2. Allow users to add, edit, delete, and filter tasks dynamically.
3. Integrate dummy data using the provided placeholder API.

1. ADD Task➕
In this, we use React + vite with tailwind, Shadcn Ui to create this and tailwind also helps to make it responsive  
![image_alt](https://github.com/Harshit001-ctrl/Task-List-Manager-with-Editable-Table/blob/3dd24bde72727b538e4057e4b472151c9ae7e525/Add%20Task%20(2).png)

2. Notifications
We used the state hook and made a form to put new tasks in the fields. After creating a new task, we used Reat-Toastifiy to show the notifications, which helped us find the task that was created.
![image_alt](https://github.com/Harshit001-ctrl/Task-List-Manager-with-Editable-Table/blob/5175b9a5ceb1ffbe8334ab49801df77772224088/new%20task%203.png)

3. Filter The Task 
I also created a DropDown filter that helps us to find which tasks are in progress, To Do, or Done by using a dropdown 
![image_alt](https://github.com/Harshit001-ctrl/Task-List-Manager-with-Editable-Table/blob/5175b9a5ceb1ffbe8334ab49801df77772224088/Task%20Filter2.png)

Here is the code to filter the task
![image_alt](https://github.com/Harshit001-ctrl/Task-List-Manager-with-Editable-Table/blob/5175b9a5ceb1ffbe8334ab49801df77772224088/Task%20Filter.png)

4. Fetch data from API
we fetched only 20 data from the API to show the data to the user.
![image_alt](https://github.com/Harshit001-ctrl/Task-List-Manager-with-Editable-Table/blob/5175b9a5ceb1ffbe8334ab49801df77772224088/App.png)

5. We use the task table from SHADCCN Ui to show the data in the form of tables this is the ode of task tables
![image_alt](https://github.com/Harshit001-ctrl/Task-List-Manager-with-Editable-Table/blob/5175b9a5ceb1ffbe8334ab49801df77772224088/Task%20Table.png) 

it is shown in the form of a table 
![image_alt](https://github.com/Harshit001-ctrl/Task-List-Manager-with-Editable-Table/blob/5175b9a5ceb1ffbe8334ab49801df77772224088/task%20Table%202.png) 

after downloading first of all use -- npm install react
When using this make sure to download all frameWorks like 
React + Vite - npm create vite@latest my-react-app --template
Tailwind CSS 
Shadcn UI
Radix UI
