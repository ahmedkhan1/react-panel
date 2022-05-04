import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Ttheme } from 'types/TTheme';

type ContainerProps = {
  widgets: {
    totalAbsence: number,
    totalRequested: number,
  }
}

const useStyles = makeStyles((theme: Ttheme) => ({
  cardContainer: {
    width: '100%',
    background: '#fff9f2',
    margin: '5px 10px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  cardWrapper: {
    marginTop: '55px',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  cardContent: {
    fontSize: '19px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& h4': {
      color: '#686664',
    },
    '& span': {
      fontSize: '30px',
      color: '#686664',
    },
  },
}));

function DashboardCards({ widgets }:ContainerProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <h4>Total Absences</h4>
          <span className="total_absence_container">{widgets.totalAbsence ? widgets.totalAbsence : 0}</span>
        </CardContent>
      </Card>

      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <h4>Total Requested</h4>
          <span className="total_Request_container">{widgets.totalRequested ? widgets.totalRequested : 0}</span>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardCards;
