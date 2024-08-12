interface Service {
  description: string;
  material: string;
}

const Content: React.FC<{service: Service}> = ({service}) => (
  <>
    <p className="text-xl text-black font-MontserratMedium leading-10 2xl:pt-11 pt-7">
      {service.description}
    </p>
    <p className="text-xl text-black font-MontserratMedium leading-10 2xl:pt-11 pt-7">
      {service.material}
    </p>
  </>
);

export default Content;
