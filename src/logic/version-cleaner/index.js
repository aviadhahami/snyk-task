import head from 'lodash/head';
import findVersions from 'find-versions';

export const cleanVersion = (v = 'latest') => head(findVersions(v, { loose: true }));
