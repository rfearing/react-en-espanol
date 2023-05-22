import React from 'react';
import { Notes } from "mdx-deck";
import { css } from '@emotion/css'

export default ({ children }) => (
	<Notes>
		<div
			className={css`
				background: rgba(0, 0, 0, 1);
				position: absolute;
				top: 0;
			`}>
			{children}
		</div>
	</Notes>
)
