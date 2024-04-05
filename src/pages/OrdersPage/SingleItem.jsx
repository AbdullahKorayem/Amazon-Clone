import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { dirContext } from '../../contexts/direction';

function SingleItem({ item }) {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { dir } = useContext(dirContext);
  return (
    <div className="w-full border-t-2 border-slate-300 rounded-md p-4 flex  justify-between">
      <div className="flex items-center">
        <div>
          <img
            className={`w-28 h-28 ${dir === 'rtl' ? 'ml-8' : 'mr-8'}  `}
            src={item.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="font-semibold w-[90%]">{item.name}</h3>
          </div>

          <div className="flex items-center gap-1">
            <button
              color="yellow"
              onClick={() => {
                navigate(`/product/${item.id}`);
              }}
              className=" rounded-md bg-[#ffd814] text-sm border-none cursor-pointer
        text-black
        py-2
        hover:bg-[#ddbd1b] "
            >
              {t('buy_it_again')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
