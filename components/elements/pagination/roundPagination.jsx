import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import React, { useCallback } from 'react';

const RoundPagination = ({ totalPages, handleChoosePage, currentPage }) => {
	if (totalPages <= 1) return null;

	const renderCell = useCallback(({ key, i, value }) => {
		return (
			<span
				className={currentPage === i ? 'pagination__item-active' : 'pagination__item'}
				key={key}
				onClick={() => handleChoosePage(i)}
			>
				<span>{value}</span>
			</span>
		);
	});

	const renderPagination = useCallback(count => {
		let arr = [];

		if (totalPages <= 6) {
			for (let i = 0; i < count; i++) {
				arr.push(renderCell({ key: i, i, value: i + 1 }));
			}
		}
		else if (currentPage + 2 >= totalPages || currentPage - 1 <= 0) {
			// 1; 2 or n - 1; n

			if (currentPage + 2 >= totalPages) {
				// 1 2 ... [n - 1] [n]
				for (let i = 0; i < 2; i++) {
					arr.push(renderCell({ key: i, i, value: i + 1 }));
				}

				arr.push(renderCell({ key: '.1', value: '...' }));
				arr.push(renderCell({ key: '.2', value: '...' }));
				arr.push(renderCell({ key: '.3', value: '...' }));

				for (let i = count - 2; i < count; i++) {
					arr.push(renderCell({ key: i, i, value: i + 1 }));
				}
			}
			else if (currentPage - 1 <= 0) {
				// [1] [2] ... n - 1 n
				for (let i = 0; i < 2; i++) {
					arr.push(renderCell({ key: i, i, value: i + 1 }));
				}

				arr.push(renderCell({ key: '.1', value: '...' }));
				arr.push(renderCell({ key: '.2', value: '...' }));
				arr.push(renderCell({ key: '.3', value: '...' }));

				for (let i = count - 2; i < count; i++) {
					arr.push(renderCell({ key: i, i, value: i + 1 }));
				}
			}
		}
		else if (currentPage === 2 || totalPages - 3 === currentPage) {
			// 1; 2; [3] ... n -1; n or 1; 2; 3 ... [n - 2] n -1; n
			if (currentPage === 2) {
				// 1 2 ... [n - 1] [n]
				for (let i = 0; i < 3; i++) {
					arr.push(renderCell({ key: i, i, value: i + 1 }));
				}

				arr.push(renderCell({ key: '.1', value: '...' }));
				arr.push(renderCell({ key: '.2', value: '...' }));

				for (let i = count - 2; i < count; i++) {
					arr.push(renderCell({ key: i, i, value: i + 1 }));
				}
			}
			else if (totalPages - 3 === currentPage) {
				// 1 2 ... [n - 1] [n]
				for (let i = 0; i < 2; i++) {
					arr.push(renderCell({ key: i, i, value: i + 1 }));
				}

				arr.push(renderCell({ key: '.1', value: '...' }));
				arr.push(renderCell({ key: '.2', value: '...' }));

				for (let i = count - 3; i < count; i++) {
					arr.push(renderCell({ key: i, i, value: i + 1 }));
				}
			}
		}
		else {
			// 1; 2 ... 4 ... n - 1; n
			for (let i = 0; i < 2; i++) {
				arr.push(renderCell({ key: i, i, value: i + 1 }));
			}
			arr.push(renderCell({ key: '.1', value: '...' }));
			console.log(currentPage);
			arr.push(
				renderCell({
					key   : currentPage,
					i     : currentPage,
					value : currentPage + 1,
				}),
			);
			arr.push(renderCell({ key: '.2', value: '...' }));

			for (let i = count - 2; i < count; i++) {
				arr.push(renderCell({ key: i, i, value: i + 1 }));
			}
		}

		return arr;
	});

	return (
		<div className='round__pagination'>
			<div className='round__pagination__container'>
				<span className='pagination__pre' onClick={() => handleChoosePage(currentPage - 1)}>
					{''}
				</span>

				{renderPagination(totalPages)}

				<span
					className='pagination__next'
					onClick={() => handleChoosePage(currentPage + 1)}
				>
					{''}
				</span>
			</div>
		</div>
	);
};

export default RoundPagination;
