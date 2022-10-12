import React,{useState} from "react";
import classes from './Form.module.css'
const Form=(prop)=>
{

    const[newTitle,setTitle]=useState('')
    const [opnText,setOpnText]=useState('')
    const[date,setDate]=useState('')

   const titleHandler=(event)=>
    {
        setTitle(event.target.value)
    }

    const opnTexthandler=(event)=>
    {
        setOpnText(event.target.value)
    }

    const dateHandler=(event)=>
    {
        setDate(event.target.value)
    }


    let obj={
          id:Math.random(),
          title: newTitle,
          openingText:opnText,
          releaseDate:date
    }

    const submitHandler=(event)=>
    {
        event.preventDefault()
        prop.newMovies(obj)
    }

    return(<React.Fragment>
        <form className={classes.submittingForm}>
        <label htmlFor="title">Title</label>
        <input onChange={titleHandler} type='text'  id="title"></input>
        <label htmlFor="openingText">Opening Text</label>
        <input onChange={opnTexthandler} type='text' id="openingText"></input>
        <label htmlFor="date">Release Date</label>
        <input onChange={dateHandler} type='date' id="date"></input>
        <div>
        <button onClick={submitHandler} className={classes.submitButton}>Submit</button>
        </div>
        </form>
    </React.Fragment>)
}

export default Form;