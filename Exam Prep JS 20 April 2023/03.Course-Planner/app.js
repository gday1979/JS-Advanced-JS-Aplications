window.addEventListener('load', solve);

function solve()

{ 
    const API_URL = 'http://localhost:3030/jsonstore/tasks/';
    const inputFields={
        name: document.querySelector('#course-name'),
        type: document.querySelector('#course-type'),
        description: document.querySelector('#description'),
        teacherName: document.querySelector('#teacher-name'),
    }

    const courseApp={
        addCourse: document.querySelector('#add-course'),
        editCourse: document.querySelector('#edit-course'),
        loadCourse: document.querySelector('#load-course'),
        list: document.querySelector('#list'),
    }
    let idEdiit=null;

    const apiRequest=async({url ='',method ='',id='',item=''})=>{
        const options={
            method
        }
        if(['POST','PUT'].includes(method)){
            options.headers={
                'Content-Type': 'application/json'
            }
            options.body=JSON.stringify(item)
        }
        const data=await fetch(`${url}${id}`,options)
        return await data.json()
    }
    const editBtnFunctionality=(event)=>{
        const idEdit=event.currentTarget.id
        const currentContainer=event.currentTarget.parentElement
        
        const data=Array.from(currentContainer.querySelectorAll('h2,h3,h4'))
        console.log(data)

    }
    const finishBtnFunctionality=(event)=>{

    }

     const createHtmlElement=(data)=>{
        const div=document.createElement('div')
        div.classList.add('container')
        div.innerHTML`
        <h2>${data.title}</h2>
        <h3>${data.teacherName}</h3>
        <h3>${data.type}</h3>
        <h4>${data.description}</h4>
        <button class="edit-btn" id=${data._id}>Edit Course</button>
        <button class="finish-btn id=${data._id}">Finish Course</button>
        `
        const [edit,finish]=Array.from(div.querySelectorAll('button'))
        edit.addEventListener('click',editBtnFunctionality)
        finish.addEventListener('click',finishBtnFunctionality)
        return div
     }

     const leadApiToHtml=async(data)=>{
        courseApp.list.innerHTML=''
        Object.values(data).forEach(x=>courseApp.list.appendChild(createHtmlElement(x)))
     }
    const loadCourseFunctionality=async()=>{
        lo
    leadApiToHtml(await apiRequest({url: API_URL, method:'GET'}))
    }

    courseApp.loadCourse.addEventListener('click', loadCourseFunctionality)
}