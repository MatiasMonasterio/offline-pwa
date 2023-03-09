import { useNavigate } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

export default function GoBackRow() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box mt={2} mb={4}>
      <Button size="sm" onClick={handleGoBack}>
        Back
      </Button>
    </Box>
  );
}
