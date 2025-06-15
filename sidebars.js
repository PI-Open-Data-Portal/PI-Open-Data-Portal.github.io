/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

export default {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['what-is-docsearch', 'who-can-apply', 'migrating-from-legacy'],
    },
    {
      type: 'category',
      label: 'Project Concept',
      items: ['docsearch-v3', 'api', 'styling', 'migrating-from-v2', 'userStory'],
    },
    {
      type: 'category',
      label: 'M1',
      items: ['context_goals', 'results_timeline_comms', 'figma'],
    },
    {
      type: 'category',
      label: 'M2',
      items: ['m2x', 'm2z'],
    },
    {
      type: 'category',
      label: 'M3',
      items: ['concept_architecture', 'implementation_demos_future'],
    },
    {
      type: 'category',
      label: 'M4',
      items: ['m4x', 'm4z'],
    }
  ],
};
