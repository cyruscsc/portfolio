import './ButtonLink.scss';

interface ButtonLinkProps {
  label: string;
  to: string;
  target: string;
}

const ButtonLink = ({ label, to, target }: ButtonLinkProps) => {
  return (
    <a href={to} target={target} className='app__button-link'>
      {label.toUpperCase()}
    </a>
  );
};

export default ButtonLink;
