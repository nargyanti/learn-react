# **Practicum Week 2 - ReactJS**

## **Adding React to the Website**

First, we create index.html and add the link for React package on script in HTML.
![Add react package](images/add_react.png)

Then, we create like_button.js to display a like button.
![Add like button](images/create_like_btn.png)

We can run the code with Live Server (or other extension). The result will be appear like this.
![Result - Web](images/result_like_btn_1.png)

If we click the button, the alert will be appear.
![Result - Alert](images/result_like_btn_2.png)

## React-app Installation

First, we have to specify the location to install React. I'am using D:\Project\learn-react\week-2.

Next, we install ReactJS with `npm install -g create-react-app` and we can continue to create project with `create-react-app web-reactku`.
![Install ReactJS & create project](images/create_project.png)

To launch the website, we can change the directory first with `cd web-reactku` and then type `npm start`.
![Lauch website](images/run_website.png)
![Lauch website result](images/react_website.png)

## React Project Structure

After we create new project, we will have the file structure like this.

![File structure](images/file_structure.png)

The are 3 main folders, namely:

* node_modules: to save the library from node
* public: to save resource
* src: to doing some code

## Creating Hello Components Using Arrow Function

First, we have to modify the code in src/index.js. Add arrow function Hello to return a HTML contain paragraph and render it with ReactDOM to `id=root`.
![index.js modification](images/index.js_modification.png)

If we have run `npm start` before, we don't have to do it again because React have auto refresh the browser and we can check the result directly.
![index.js modification result](images/index.js_modification_result.png)
