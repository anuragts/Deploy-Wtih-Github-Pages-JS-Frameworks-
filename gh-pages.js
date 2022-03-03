// var ghpages = require('gh-pages');
import ghpages from 'gh-pages';

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/username/yourproject.git', // Update to point to your repository  
        user: {
            name: 'Your name', // update to use your name
            email: 'Your Email address' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)