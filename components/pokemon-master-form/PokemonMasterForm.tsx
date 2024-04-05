'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, Label } from '@radix-ui/react-form';
import { Box, Button, Grid, TextField } from '@radix-ui/themes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  birthday: z.string().min(1, 'Birthday is required'),
  age: z.string().min(1, 'Age is required'),
});

type FormFields = z.infer<typeof schema>;

const PokemonMasterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ defaultValues: { birthday: '1998-01-01' }, resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid columns={{ sm: '1', md: '3' }} mb="3" gap="2">
        <FormField name="name">
          <Label>Name</Label>
          <TextField.Root type="text" className="mt-1" {...register('name')} />
          {errors.name && <div>{errors.name.message}</div>}
        </FormField>
        <FormField name="birthday">
          <Label>Birthday</Label>
          <TextField.Root type="date" className="mt-1" {...register('birthday')} />
          {errors.birthday && <div>{errors.birthday.message}</div>}
        </FormField>
        <FormField name="age">
          <Label>Age</Label>
          <TextField.Root type="number" className="mt-1" {...register('age')} />
          {errors.age && <div>{errors.age.message}</div>}
        </FormField>
      </Grid>
      <Box maxWidth="300px"></Box>
      <Button variant="classic" type="submit">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </Form>
  );
};

export default PokemonMasterForm;
