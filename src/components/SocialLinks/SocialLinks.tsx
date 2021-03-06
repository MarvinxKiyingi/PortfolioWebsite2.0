import { Box, IconButton, styled } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import resume from '../../files/resume.pdf';

const SocialLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2, 2),

  '.socaiLinks': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.up('md')]: {
    padding: 'initial',
  },
}));

export const SocialLinks = () => {
  return (
    <SocialLinksContainer className="socialLinksContainer">
      <IconButton className="socaiLinks" href={resume} target="_blank">
        <AttachFileIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        className="socaiLinks"
        href="mailto: marvinxkiyingi@gmail.com"
      >
        <EmailIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        className="socaiLinks"
        href="https://github.com/MarvinxKiyingi"
      >
        <GitHubIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        className="socaiLinks"
        href="https://www.linkedin.com/in/marvin-kiyingi-371525184"
      >
        <LinkedInIcon fontSize="inherit" />
      </IconButton>
    </SocialLinksContainer>
  );
};
