/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { css } from '@emotion/css';

export const ListOne = () => (
	<div className={css` margin: 100px auto; width: 50%;`}>
		<h4>Comidas favoritas</h4>
		<p>Frutas:</p>
		<ul id="lista">
			<li className={css`margin-bottom: 0.5rem;`}>Manzana</li>
			<li className={css`visibility: hidden`}>Naranja</li>
		</ul>
	</div>
)

export const ListTwo = () => (
	<div className={css` margin: 100px auto; width: 50%;`}>
		<h4>Comidas favoritas</h4>
		<p>Frutas:</p>
		<ul id="lista">
			<li className={css`margin-bottom: 0.5rem;`}>Manzana</li>
			<li>Naranja</li>
		</ul>
	</div>
)

export const ListThree = () => (
	<div className={css` margin: 100px auto; width: 50%;`}>
		<h4>Comidas favoritas</h4>
		<p>Frutas:</p>
		<ul id="lista">
			<li className={css`margin-bottom: 0.5rem;`}>Manzana</li>
			<li>Naranja 👈</li>
		</ul>
	</div>
)
