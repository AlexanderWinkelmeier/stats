import { CsvFileReader } from './inheritance/CsvFileReader';
import { MatchResult } from './MatchResult';
type MatchData = [Date, string, string, number, number, MatchResult, string];
import { dateStringToDate } from './utils';

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // type assertion, "H", "A" or "D"
      row[6],
    ];
  }
}
