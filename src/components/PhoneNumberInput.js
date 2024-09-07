import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputMask from 'react-input-mask';
import { sendMessage } from '../service'; // Ajuste o caminho conforme necessário

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PhoneNumberInput = ({ control }) => {
    return (
        <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <InputMask
                    mask="(99) 99999-9999"
                    value={field.value}
                    onChange={field.onChange}
                >
                    {() => (
                        <TextField
                            label="Insira seu número de WhatsApp"
                            placeholder="+00 00000-0000"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        />
                    )}
                </InputMask>
            )}
        />
    );
};

const App = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await sendMessage(data.phoneNumber, "Olá tudo bem? Bem vindo a consultoria do china");
            console.log('Response:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: "white", boxShadow: "0.2rem 0.35rem 0.3rem rgba(0, 0, 0, 0.5)", border: "0.1rem solid rgb(51, 51, 51)" }}>
            <div className="text" style={{ padding: "0px" }}>
                <h4 style={{ fontWeight: "400", color: "black" }}>Quer fazer parte do grupo fitness de apoio que mais cresce do Brasil <b>TOTALMENTE DE GRAÇA</b>?</h4>
            </div>
            <PhoneNumberInput control={control} />
            <Button type="submit" variant="contained" style={{ fontWeight: "bold", borderRadius: "9999px" }} sx={{ marginTop: 2 }}>
                Quero me manter atualizado
            </Button>
        </StyledForm>
    );
};

export default App;
