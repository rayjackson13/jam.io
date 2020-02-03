import React from 'react';
import { ReactComponent as NewIcon } from 'assets/svg/joystick.svg';
import { ReactComponent as OpenIcon } from 'assets/svg/open.svg';
import { openFolder } from './helper';
import './Welcome.sass';

class Welcome extends React.Component {
    onFolderLoaded = (files: Array<string>) => {
        if (!files || !files.length) {
            return;
        }

        console.log(files);
    };

    render() {
        return (
            <div className="app-wrap">
                <main className="welcome">
                    <h2 className="welcome__title">welcome to jam.io</h2>
                    <p className="welcome__desc">here you can:</p>
                    <div className="welcome__option-wrap">
                        <button 
                            type="button" 
                            className="welcome__option"
                        >
                            <NewIcon className="welcome__option-new" width={64} height={64} />
                            <span className="welcome__option-text">Create New Project</span>
                        </button>
                        <span className="welcome__option-sep">or</span>
                        <button 
                            type="button" 
                            className="welcome__option"
                            onClick={() => openFolder(this.onFolderLoaded)}
                        >
                            <OpenIcon className="welcome__option-open" width={64} height={64} />
                            <span className="welcome__option-text">Open Existing Project</span>
                        </button>
                    </div>
                    <p className="welcome__copy">
                        © jam.io. Created with TypeScript, Electron and <span role="img" aria-label="Love">❤️</span>
                    </p>
                </main>
            </div>
        );
    }
};

export default Welcome;