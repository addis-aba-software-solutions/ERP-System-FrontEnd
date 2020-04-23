
import Swal from 'sweetalert2'
import axios from 'axios'
import API from '../../api/API'
import {appConstants} from '../../constant/constants'

function addNewEmployee(data) {
  return (dispatch)  => {
    var param={
      firstName:data.firstName,
      lastName:data.lastName,
      email:data.email,
      hiredDate:data.hiredDate,
      telephone:data.telephone,
      department:data.depValue,
      roles:data.rolValue,
      level:data.levValue,
      termOfEmployment:data.termOfEmployment,
      country:data.country,
      city:data.city,
      region:data.region,
      birthDate:data.birthDate,
    }

    dispatch({
      type: appConstants.REGISTER_REQUEST,
      payload:true
    }
    );
    axios.request({
      method: 'POST',
      url: API+"employe/",
      responseType: 'json',
      headers: {
        "Content-Type":"application/json"
      }, 
      data:param
    })
      .then((user) => {     
        Swal.fire({
          title: 'Success',
          icon: 'success',
        })    
        dispatch({
          type: appConstants.REGISTER_SUCCESS,
          payload:user.data.user
        }
        );
      })
      .catch(error => {  
        dispatch({
          type: appConstants.REGISTER_FAILURE,
          payload:error.response.data.errors
        }
        );
      })
    }
  }
  

const actions = {
  addNewEmployee,
};


export default actions