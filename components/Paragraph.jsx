import React from 'react';
import { css } from '@emotion/css';

export default ({ children }) => (
	<p className={css`font-size: 1.25rem;`}>
		{children}
	</p>
)