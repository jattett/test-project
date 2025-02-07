import React, { useState, useEffect } from 'react';
import { TopButtonStyle } from './Styled';
import { MdKeyboardArrowUp } from 'react-icons/md';

interface TopButtonProps {
  deviceType: string; // 필수로 지정
}

const TopButton: React.FC<TopButtonProps> = ({ deviceType }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // ✅ 300px 이상 스크롤 시 버튼 표시
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // ✅ 부드러운 스크롤 맨 위로 이동
  };

  return (
    <TopButtonStyle
      deviceType={deviceType}
      className={isVisible ? 'visible' : ''}
      onClick={handleScrollToTop}
    >
      <MdKeyboardArrowUp size={28} />
    </TopButtonStyle>
  );
};

export default TopButton;
