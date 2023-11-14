import './ButtonLink.scss';

interface ButtonLinkProps {
  label: string;
  to: string;
}

const ButtonLink = ({ label, to }: ButtonLinkProps) => {
  return (
    <a href={to} className='app__button-link'>
      {label.toUpperCase()}
    </a>
  );
};

export default ButtonLink;
