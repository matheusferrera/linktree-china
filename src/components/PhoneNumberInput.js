import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputMask from 'react-input-mask';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { sendMessage } from '../service'; // Ajuste o caminho conforme necessário

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PhoneNumberInput = ({ control, error, onPhoneNumberChange }) => {
    return (
        <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <InputMask
                    mask="(99) 99999-9999"
                    value={field.value}
                    onChange={(e) => {
                        field.onChange(e); // Atualiza o valor no react-hook-form
                        onPhoneNumberChange(e.target.value); // Atualiza o estado local
                    }}
                >
                    {() => (
                        <TextField
                            label="Insira seu número de WhatsApp"
                            placeholder="+00 00000-0000"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            error={error}
                            helperText={error ? 'Número de telefone inválido.' : ''}
                        />
                    )}
                </InputMask>
            )}
        />
    );
};

const App = () => {
    const { control, handleSubmit, getValues } = useForm();
    const [open, setOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [logError, setLogError] = useState('');

    const onSubmit = async () => {
        const phoneNumber = getValues("phoneNumber");
        // Valida o telefone de acordo com a máscara e o prefixo "xx 9"
        if (!phoneNumber.match(/^\(\d{2}\) 9\d{4}-\d{4}$/)) {
            setPhoneNumberError(true);
            return;
        }

        setPhoneNumberError(false); // Limpa o erro se a validação passar

        try {
            const result = await sendMessage(phoneNumber, "Olá tudo bem? Bem vindo a consultoria do china");
            console.log('Response:', result);
            setOpen(true);
        } catch (error) {
            console.error('Error:', error);
            setLogError(error)
            alert(error)
            setErrorMessage('Insira um numero de telefone com whatsapp');

            setErrorOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setErrorOpen(false);
    };

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: "white", boxShadow: "0.2rem 0.35rem 0.3rem rgba(0, 0, 0, 0.5)", border: "0.1rem solid rgb(51, 51, 51)" }}>
                <div className="text" style={{ padding: "0px" }}>
                    <h4 style={{ fontWeight: "400", color: "black" }}>Quer fazer parte do grupo fitness de apoio que mais cresce do Brasil <b>TOTALMENTE DE GRAÇA</b>?</h4>
                </div>
                <p style={{ color: "black" }}>logerror - {logError}</p>
                <PhoneNumberInput control={control} error={phoneNumberError} onPhoneNumberChange={setPhoneNumber} />
                <Button type="submit" variant="contained" style={{ fontWeight: "bold", borderRadius: "9999px" }} sx={{ marginTop: 2 }}>
                    Quero me manter atualizado
                </Button>
            </StyledForm>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Mensagem enviada com sucesso!
                </MuiAlert>
            </Snackbar>
            <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </MuiAlert>
            </Snackbar>
        </>
    );
};

export default App;
