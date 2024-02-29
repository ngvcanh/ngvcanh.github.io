export class File {

  static exist(pathName: string) {
    const fs = require('fs');
    return fs.existsSync(pathName);
  }

  static isDirectory(pathName: string) {
    const fs = require('fs');
    return this.exist(pathName) && fs.statSync(pathName).isDirectory();
  }

  static isFile(pathName: string) {
    const fs = require('fs');
    return this.exist(pathName) && fs.statSync(pathName).isFile();
  }

  static scan(pathName: string) {
    if (!this.exist(pathName)) {
      return [];
    }
    const fs = require('fs');
    return fs.readdirSync(pathName);
  }

}