import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchResults, { ISearchResults } from './SearchResults';
import { mockSearchResultsProps } from './SearchResults.mocks';

export default {
  title: 'utility/SearchResults',
  component: SearchResults,
  argType: {},
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = (args) => (
  <SearchResults {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSearchResultsProps.base,
} as ISearchResults;
