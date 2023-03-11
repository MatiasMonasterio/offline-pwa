import { useNavigate } from "react-router-dom";
import { Button, Heading, Box } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface Props {
  title?: string;
}

export default function GoBackRow({ title }: Props) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box display="flex" alignItems="center" mb={2} position="relative" minH="48px">
      <Button
        size="xs"
        onClick={handleGoBack}
        variant="link"
        fontSize="2xl"
        position="absolute"
        left={0}
      >
        <ChevronLeftIcon fontSize="5xl" />
      </Button>

      <Heading size="md" mx="auto">
        {title}
      </Heading>
    </Box>
  );
}
