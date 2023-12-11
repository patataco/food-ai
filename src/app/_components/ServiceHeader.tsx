const ServiceHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="hidden items-center gap-2 pt-4 xs:flex md:pt-8">
        <div className="text-3xl font-extrabold text-dark-brown">
          Your Recipe By <span className="text-yellow-900">Ai</span>
        </div>
        <span className="text-4xl">🧠</span>
      </div>
      <div className="flex flex-col items-center justify-center pt-4">
        <p>여러분의 냉장고에 있는 재료들을 선택하시면,</p>
        <p>AI가 해당 재료들을 사용한 레시피를 추천해 드립니다.</p>
      </div>
    </div>
  );
};
export default ServiceHeader;
