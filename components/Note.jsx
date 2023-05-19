import React from 'react';
import { Notes } from "mdx-deck";
import { css } from '@emotion/css'

export default ({ children }) => (
	<Notes>
		<div className={css`
			background: rgba(0, 0, 0, 0.75);
			bottom: 0;
			padding: 1rem;
			position: fixed;
			right: 0;
			top: 0;
			width: 75vh;
		`}>
			{children}
		</div>
	</Notes>
)
