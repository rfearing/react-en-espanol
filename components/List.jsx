import React from 'react';
import { css } from '@emotion/css';

export const ListOne = () => (
	<div className={css` margin: 100px auto; width: 50%;`}>
		<h4>Comidas favoritas</h4>
		<p>Frutas:</p>
		<ul id="lista">
			<li className={css`margin-bottom: 0.5rem;`}>Manzana</li>
			<li className={css`margin-bottom: 0.5rem;`}>Naranja</li>
			<li className={css`visibility: hidden`}>Uva</li>
		</ul>
	</div>
)

export const ListTwo = () => (
	<div className={css` margin: 100px auto; width: 50%;`}>
		<h4>Comidas favoritas</h4>
		<p>Frutas:</p>
		<ul id="lista">
			<li className={css`margin-bottom: 0.5rem;`}>Manzana</li>
			<li className={css`margin-bottom: 0.5rem;`}>Naranja</li>
			<li>Uva</li>
		</ul>
	</div>
)
