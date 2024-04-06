import React, { useState } from 'react'

const Toolbar = ({ insertText }) => {

    return (
        <div className='toolbar'>
            <button onClick={() => insertText('# ', '')}>h1</button>
            <button onClick={() => insertText('## ', '')}>h2</button>
            <button onClick={() => insertText('**', '**')}>bold</button>
            <button onClick={() => insertText('*', '*')}>italic</button>
            <button onClick={() => insertText('[', '](http://)')}>link</button>
            <button onClick={() => insertText('```', '```')}>code block</button>
            <button onClick={() => insertText('- ', '')}>list item</button>
            <button onClick={() => insertText('\n---\n', '')}>horizontal line</button>
        </div>
    )
}

export default Toolbar