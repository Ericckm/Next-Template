import { Bottom, ExerciseUl, FilterContainer, Flipbtn, Top } from './styles'
import { AddCircle } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { allExerciseRequestCall } from '../../services/allExerciseRequestCall'
import { useDispatch, useSelector } from 'react-redux'
import { AllExercisesList } from '../allExercisesList'
import { AddExerciseModal } from '../AddExerciseModal'
import { Loader } from '../loader'
import { ApiError } from '../500'
import { ExerciseContainer } from '../exerciseContainer'
import { LogGraphic } from '../logGraphic'

const ExercisesSection = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: any) => state.user.user.token)
  const { isFetching, error, allExercises } = useSelector(
    (state: any) => state.allExercises
  )

  // FILTER
  const [filters, setFilters] = useState({})
  const [filteredExercises, setFilteredExercises] = useState([])

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const pages = []
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItem = filteredExercises.slice(indexOfFirstItem, indexOfLastItem)

  for (
    let i = 1;
    i <= Math.ceil(filteredExercises.length / itemsPerPage);
    i++
  ) {
    pages.push(i)
  }

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => setCurrentPage(number)}
        className={currentPage == number ? 'active' : null}
      >
        {number}
      </li>
    )
  })

  const [openModal, setOpenModal] = useState(false)
  const [openLogGraph, setOpenLogGraphModal] = useState(false)

  const handleClick = () => {
    setOpenModal(!openModal)
  }

  const handleLogGraphModal = () => {
    setOpenLogGraphModal(!openLogGraph)
  }

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

  useEffect(() => {
    allExerciseRequestCall(dispatch, token)
  }, [])

  useEffect(() => {
    setFilteredExercises(
      allExercises.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [filters, allExercises])

  return (
    <>
      <Top>
        <div>
          <h3>All exercises</h3>
        </div>
        <FilterContainer>
          <div>
            <label>filter by name</label>
            <input
              type="text"
              placeholder="search"
              name="name"
              onChange={handleFilters}
            />
          </div>
          <div>
            <label htmlFor="">filter by type</label>
            <select name="type" onChange={handleFilters}>
              <option defaultChecked value="">
                all
              </option>
              <option value="Chest">chest</option>
              <option value="Triceps">triceps</option>
              <option value="Back">back</option>
              <option value="Biceps">biceps</option>
              <option value="Leg">leg</option>
              <option value="Shoulder">shoulder</option>
            </select>
          </div>
        </FilterContainer>
      </Top>
      {isFetching && !error && <Loader />}
      {openLogGraph ? (
        <ExerciseContainer>
          <ExerciseUl>
            {error && <ApiError />}
            {currentItem?.map((i) => (
              <AllExercisesList
                key={i._id}
                name={i.name}
                type={i.type}
                videoUrl={i.videoUrl}
                id={i._id}
              />
            ))}
            <Flipbtn onClick={handleLogGraphModal}>flip</Flipbtn>
          </ExerciseUl>
        </ExerciseContainer>
      ) : (
        <LogGraphic>
          <Flipbtn onClick={handleLogGraphModal}>flip</Flipbtn>
        </LogGraphic>
      )}

      {openModal && <AddExerciseModal onClick={handleClick} />}
      <Bottom>
        <ul className="pageNumbers">{renderPageNumbers}</ul>
        <div>
          <button onClick={handleClick}>
            <AddCircle className="add" />
          </button>
        </div>
      </Bottom>
    </>
  )
}

export default ExercisesSection

{
  /* {isFetching && !error ? (
        <Loader />
      ) : (
        <ExerciseContainer>
          <ExerciseUl>
            {error && <ApiError />}
            {currentItem?.map((i) => (
              <AllExercisesList
                key={i._id}
                name={i.name}
                type={i.type}
                videoUrl={i.videoUrl}
                id={i._id}
              />
            ))} */
}
