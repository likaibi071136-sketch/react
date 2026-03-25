export default {
    extends: ['stylelint-config-standard'],
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            extends: ['stylelint-config-standard-scss']
        },
        {
            rules: {
                'unit-allowed-list': [
                    'px',
                    '%',
                    'em',
                    'rem',
                    's',
                    'ms',
                    'deg',
                    'rad',
                    'fr',
                    'vh',
                    'vw',
                    'vmin',
                    'vmax',
                    'auto',
                    'none'
                ],
                'no-empty-source': null
            },
            files: ['*.tsx', '**/*.{tsx}'],
            extends: ['stylelint-config-standard']
        }
    ]
}
