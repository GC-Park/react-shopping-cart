import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { cartAtom } from '@recoil/atoms/cartAtom';
import BucketCounter from '@components/common/BucketCounter';
import { ADD_CART_BUTTON } from '@constants/testId';
import { BUCKET_BUTTON } from '@assets/images';

interface AddCartButtonProps {
  id: number;
  addProductToCart: () => void;
}

const AddCartButton = ({ id, addProductToCart }: AddCartButtonProps) => {
  const cart = useRecoilValue(cartAtom);
  const savedCartData = cart.find((item) => item.id === id);

  return (
    <Wrapper>
      {savedCartData ? (
        <BucketCounter id={id} quantity={savedCartData.quantity} kind="small"/>
      ) : (
        <Button
          type="button"
          onClick={addProductToCart}
          data-testid={ADD_CART_BUTTON}
        > 
          <Image src={BUCKET_BUTTON} alt="장바구니 버튼" />
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Button = styled.button`
  border: none;

  background: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 25px;
  height: 22px;
`;

export default AddCartButton;
