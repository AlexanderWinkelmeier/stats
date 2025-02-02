import fs from 'fs';
import { outputTarget } from '../Summary';

export class HtmlReport implements outputTarget {
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
   `;
    fs.writeFileSync('report.html', html);
  }
}
