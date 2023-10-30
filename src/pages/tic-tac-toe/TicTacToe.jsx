import React, { useState } from 'react';
import styles from './TicTacToe.module.css';
import Button from '../../Components/button/Button';

const TicTacToe = () => {
    const [ x, setX] = useState(true);
    const [cell, setCell] = useState(Array(9).fill(null));


    const handleClick = (i) => {
        if(calculateWinner(cell) || cell[i]) {
            return
        }

        cell[i] = x ? 'X' : '0';
        setCell(cell);
        setX(!x);
    }

    const resetHandle = () => {
        setCell(Array(0).fill(null))
    }

    const calculateWinner = (cell) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
                const [a, b, c] = winningPatterns[i]

                if(cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
                    return cell[a]
                }      
        }
        return null
    }

    const winner = calculateWinner(cell);
    let message
    // if (cell.every((value) => value !== null) && !winner) {
    //      message = 'Oyun berabere!';
    // }

  return (
    <>
    <h2 style={{textAlign: 'center', fontSize: '60px'}} >Tic - Tac - Toe</h2>

    <div className={styles.ticTacToe}>
        <div className= {styles.row}>
            <div className={styles.cell} onClick={() => handleClick(0)}  id='1' >{cell[0]}</div>
            <div className={styles.cell} onClick={() => handleClick(1)}  id='2' >{cell[1]}</div>
            <div className={styles.cell} onClick={() => handleClick(2)}  id='3' >{cell[2]}</div>
        </div>
        <div className= {styles.row}>
            <div className={styles.cell} onClick={() => handleClick(3)}  id='4' >{cell[3]}</div>
            <div className={styles.cell} onClick={() => handleClick(4)}  id='5' >{cell[4]}</div>
            <div className={styles.cell} onClick={() => handleClick(5)}  id='6' >{cell[5]}</div>
        </div>
        <div className= {styles.row}>
            <div className={styles.cell} onClick={() => handleClick(6)}  id='7' >{cell[6]}</div>
            <div className={styles.cell} onClick={() => handleClick(7)}  id='8' >{cell[7]}</div>
            <div className={styles.cell} onClick={() => handleClick(8)}  id='9' >{cell[8]}</div>
        </div>

    </div>

    <div style={{display:'flex', justifyContent: "center",}}>
        <Button onClick={resetHandle} className={styles.btn}>Reset</Button>
    </div>
    {/* <p className={styles.messageDraw}>{message}</p> */}
     { winner 
     ? 
     <p className={styles.messageWinner}>Winner  {winner}  </p> 
        :
     <p className={styles.message} > Next player {x ? 'X' : 0}</p>  
     }
    
    </>
  )
}

export default TicTacToe