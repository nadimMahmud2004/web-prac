import Board from "@lourenci/react-kanban";
import {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

import useBoard from "../../store/Board";
import "./Board.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import AddCardModal from "../../components/AddCardModal/AddCardModal";

const ColumnHeader = ({ column, board, setBoard }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleCardAdd = (title, detail) => {
    const card = {
      id: Date.now(),
      title,
      description: detail,
    };

    const updatedBoard = addCard(board, column, card);
    setBoard(updatedBoard);
    setModalOpened(false);
  };

  return (
    <div className="column-header">
      <span>{column.title}</span>
      <IoMdAdd size={25} onClick={() => setModalOpened(true)} />
      <AddCardModal
        visible={modalOpened}
        handleCardAdd={handleCardAdd}
        onClose={() => setModalOpened(false)}
      />
    </div>
  );
};

const BoardPage = () => {
  const { board, setBoard } = useBoard();

  const handleColumnMove = (_card, source, destination) => {
    setBoard(moveColumn(board, source, destination));
  };

  const handleCardMove = (_card, source, destination) => {
    setBoard(moveCard(board, source, destination));
  };

  const getColumn = (card) =>
    board.columns.find((column) => column.cards.includes(card));

  const getGradient = (card) => {
    const title = getColumn(card)?.title;
    if (title === "TODO")
      return {
        background: "linear-gradient(65deg, #414141 -1%, #30bddc 160%)",
      };
    if (title === "Doing")
      return {
        background: "linear-gradient(65deg, #414141 -1%, #dc3030 160%)",
      };
    if (title === "Completed")
      return {
        background: "linear-gradient(65deg, #414141 -1%, #30dc56 160%)",
      };
    if (title === "Backlog")
      return {
        background: "linear-gradient(65deg, #414141 -1%, #8630dc 160%)",
      };
  };

  return (
    <div className="board-container">
      <span>Trello Board</span>

      <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
        renderCard={(card) => (
          <div className="kanban-card" style={getGradient(card)}>
            <div>
              <span>{card.title}</span>
              <button
                className="remove-button"
                onClick={() =>
                  setBoard(removeCard(board, getColumn(card), card))
                }
              >
                <RxCross2 size={15} />
              </button>
            </div>
            <span>{card.description}</span>
          </div>
        )}
        renderColumnHeader={(column) => (
          <ColumnHeader column={column} board={board} setBoard={setBoard} />
        )}
      >
        {board}
      </Board>
    </div>
  );
};

export default BoardPage;
