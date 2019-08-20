import M from 'materialize-css';

const PopUp = {

  exibeMensagem: (status, msg) => {

    if (status === 'success')
      M.toast({ html: msg, classes: 'green accent-4', displayLength: 2000 });

    if (status === 'error')
      M.toast({ html: msg, classes: 'red darken-1', displayLength: 2100 });

    if (status === 'removido')
      M.toast({ html: msg, classes: 'red lighten-1', displayLength: 2000 });
  }
}

export default PopUp;