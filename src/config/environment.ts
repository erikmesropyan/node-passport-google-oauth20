import dotenv from 'dotenv';
import path from 'path';

export default (filePath: string): void => {
    dotenv.config({ path: path.join(__dirname, filePath) });
}
