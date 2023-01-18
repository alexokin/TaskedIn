import React from 'react'

export function AddTask() {


  return (
    <section className="add-task">
      <form>
        <textarea
          type="text"
          placeholder='Enter a title for this card...'
        //   value={title}
        //   onChange={handleChange}
        //   autoFocus={window.innerWidth >= 1200}
        //   onKeyPress={handleUserKeyPress}
        />
        <button>Add card</button>
        <section className="svg-holder">
          
        </section>
      </form>
    </section>
  )
}
