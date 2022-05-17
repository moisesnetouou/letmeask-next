import { Flex, Image, Text, Button, Input } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex h="100vh" alignItems="stretch">
      <Flex
        as="aside"
        flexDirection="column"
        bg="#835afd"
        px="120px"
        py="80px"
        color="white"
      >
        <Image
          src="/images/illustration.svg"
          alt="Ilutration image"
          maxW="320px"
        />
        <Text fontWeight={700} fontSize="36px">
          Crie salas de Q&amp;A ao-vivo
        </Text>
        <Text fontWeight={400} fontSize="24px" lineHeight="32px">
          Tire as dúvidas da sua audiência em tempo-real
        </Text>
      </Flex>

      <Flex
        as="main"
        padding="0 32px"
        alignItems="center"
        justifyContent="center"
        flex="8"
      >
        <Flex
          flexDirection="column"
          w="100%"
          maxW="320px"
          alignItems="stretch"
          textAlign="center"
        >
          <Image src="/images/logo.svg" alt="Letmeask" />

          <Button
            mt="64px"
            h="50px"
            borderRadius="8px"
            fontWeight="500"
            bg="#ea4335"
            color="white"
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/images/google-icon.svg"
              alt="Logo do Google"
              mr="8px"
            />
            Crie sua sala com o Google
          </Button>

          <Flex
            fontSize="14px"
            color="#a8a8b3"
            margin="32px 0"
            alignItems="center"
            _before={{
              content: "''",
              flex: 1,
              height: "1px",
              background: "#a8a8b3",
              marginRight: "16px",
            }}
            _after={{
              content: "''",
              flex: 1,
              height: "1px",
              background: "#a8a8b3",
              marginLeft: "16px",
            }}
          >
            ou entre em uma sala
          </Flex>

          <Flex as="form" flexDirection="column">
            <Input
              type="text"
              placeholder="Digite o código da sala"
              h="50px"
              borderRadius="8px"
              padding="0 16px"
              bg="#fff"
              border="1px solid #a8a8b3"
              w="100%"
            />
            <Button mt="16px" w="100%">
              Entrar na sala
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
