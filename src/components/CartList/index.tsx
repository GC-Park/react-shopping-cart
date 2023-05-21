import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { cartAtom } from '@recoil/atoms/cartAtom';
import { checkBoxAtom } from '@recoil/atoms/checkBoxAtom';
import { checkBoxTotalIdtAtom } from '@recoil/atoms/checkBoxTotalIdtAtom';
import Button from '@components/common/Button';
import CheckBox from '@components/common/CheckBox';
import useAtomLocalStorage from '@hooks/useAtomLocalStorage';
import useFetch from '@hooks/useFetch';
import { CartInformation } from '@type/types';
import { CART_LIST_LOCAL_KEY } from '@constants/common';
import CartItem from './CartItem';

const CartList = () => {
  const [cart] = useAtomLocalStorage<CartInformation[]>(
    cartAtom,
    CART_LIST_LOCAL_KEY
  );

  const { data, isLoading, refetch } = useFetch<CartInformation[]>(
    '/cart-items',
    {
      method: 'get',
    }
  );

  const [checkBox, setCheckBox] = useAtomLocalStorage<number[]>(
    checkBoxAtom,
    'checkBox'
  );

  const [checkBoxTotalId, setCheckBoxTotalId] = useAtomLocalStorage<number[]>(
    checkBoxTotalIdtAtom,
    'checkBoxTotalId'
  );

  const [check, setCheck] = useState(false);

  const checkBoxTotalIdOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheck(true);
      setCheckBox(checkBoxTotalId);
      return;
    }
    setCheckBox([]);
    setCheck(false);

    refetch();
  };

  const removeCartOnClick = () => {
    const removedCart = cart.filter(
      (product) =>
        checkBox.includes(product.id) && checkBoxTotalId.includes(product.id)
    );

    removedCart.forEach(async (product) => {
      await fetch(`/cart-items/${product.id}`, {
        method: 'delete',
      });
    });
    const removedCheckBox = checkBoxTotalId.filter(
      (id) => !checkBox.includes(id)
    );
    setCheckBox(removedCheckBox);
    setCheckBoxTotalId(removedCheckBox);
    refetch();
  };

  useEffect(() => {
    if (checkBox.length === checkBoxTotalId.length) {
      setCheck(true);
      return;
    }
    setCheck(false);
  }, [checkBox, checkBoxTotalId]);

  useEffect(() => {
    refetch();
  }, []);

  if (!data) return null;

  return (
    <CartListWrapper>
      {data.map((product, idx) => {
        return (
          <div key={idx}>
            <hr />
            <CartItem
              key={product.id}
              id={product.product.id}
              name={product.product.name}
              imageUrl={product.product.imageUrl}
              quantity={product.quantity}
              price={product.product.price}
              refetch={refetch}
            />
          </div>
        );
      })}
      <CartPageBottom>
        <CheckBox onChange={checkBoxTotalIdOnChange} check={check} />
        <CartSelectorText>
          전체선택({checkBox.length}/{checkBoxTotalId.length})
        </CartSelectorText>
        <Button
          text="선택삭제"
          onClick={removeCartOnClick}
          width="100px"
          height="35px"
          fontSize="16px"
          background="white"
          color="#333333"
        />
      </CartPageBottom>
    </CartListWrapper>
  );
};

const CartListWrapper = styled.div`
  width: 55%;
  border-top: 4px solid #aaaaaa;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const CartPageBottom = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  margin-bottom: 50px;
`;
const CartSelectorText = styled.span`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  letter-spacing: 0.5px;

  margin: 0 13px;

  color: #333333;
`;

export default React.memo(CartList);
