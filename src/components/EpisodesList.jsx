import React, { useState } from 'react'
import { episodes } from '../fakeStorage/episodes'
import Episode from './Episode'
import Pagination from './Pagination'
import { paginate } from "../utils/paginate";

const EpisodesList = () => {
    const count = episodes.length
    const pageSize = 8
    
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
      };

    const pageEpisodes = paginate(episodes, currentPage, pageSize)
  return (
    <div className='container'>
        <div className="row">
            {pageEpisodes.map((episode) => (
               <Episode key={episode.id} {...episode} />
            ))}
        </div>
        <div className="row">
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    </div>
  )
}

export default EpisodesList

