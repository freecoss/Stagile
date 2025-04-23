import { createSlice } from '@reduxjs/toolkit';
// import { authApi } from '../../api/authApi' apres avoir cree le fichier authApi.js;
//des informations de login email et password de test sous format json
const testUsers = [
    {id: 1, nom:'test', prenom :'abderahim', email:'testAbderaim@gmail.com',pwd:'123456', role:'stagiaire'},
    {id: 1, nom:'test', prenom :'sara', email:'testSara@gmail.com',pwd:'1234578', role:'stagiaire'}
]
const initialState = {
    user:null,
    token:null,
    isAuthenticated:false,
    role:null,
    error:null,
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            
        }
    }
})