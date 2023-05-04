import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Logo } from '@/components/Header/Logo'
import { Input } from '@/components/Form/Input'
import Link from 'next/link'
import { z } from 'zod'

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = z.object({
  email: z.string()
    .min(1, { message: "E-mail é obrigatório!" })
    .email("E-mail inválido!"),

  password: z.string()
    .min(4, { message: "Senha deve ter mais de 4 caracteres!" })
})

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDirection="column"
    >
      <Box alignContent="center">
        <Logo />
      </Box>
      <Flex
        as="form"
        width='100%'
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            type="email"
            label="E-mail"
            {...register('email')}
          />
          <Input
            type='password'
            label='Senha'
            {...register('password')}
          />
        </Stack>

        {/* <Link href="/dashboard" passHref> */}
        <Button
          type='submit'
          mt="6"
          colorScheme='green'
          size='lg'
          width="full"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
        {/* </Link> */}
        <Box flexDirection="column" mt="4">
          {errors.email?.message}
        </Box>
      </Flex>
    </Flex >
  )
}
