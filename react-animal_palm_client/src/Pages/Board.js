import './Board.css'
import Board_list from './components/Board_list';
import Board_post from './components/Board_post';
import Board_write from './components/Board_write';
import Navigaitionbar from './components/navigationbar'

function Board() {
  return (
    
    <div className="Board">
    <nav>
        <Navigaitionbar />
    </nav>
     {/* <Board_list /> */}
     {/* <Board_post /> */}
     <Board_write />
    </div>
  );
}

export default Board;
