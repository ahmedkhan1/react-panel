import moment from 'moment';
import fileDownload from 'js-file-download';

type params = {
  from: string;
  to: string;
  selectedFrom: string;
  selectedTo: string;
}

const commonMethods = {
  dateRange({
    from,
    to,
    selectedFrom,
    selectedTo,
  }:params) {
    return moment(from).isSameOrAfter(moment(selectedFrom))
    && moment(to).isSameOrBefore(moment(selectedTo));
  },
  dateFormater(date: string) {
    return moment(date).format('YYYY/MM/DD');
  },
  exporter(Data: string) {
    const fileName = `file${Math.random()}s`;
    fileDownload(Data, `${fileName}.ics`);
  },
  generateErrorMessage(error: {message: string}) {
    return (error.message) ? error.message : 'An Error has occured';
  },
};

export default commonMethods;
