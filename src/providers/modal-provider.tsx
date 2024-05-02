'use client';
import { useEffect, useState } from 'react';

// import AuthModal from '@/components/AuthModal';
import AuthModalContext from '@/context/auth-modal-context';
import CreateProfileContext from '@/context/create-profile-context';
// import CreateProfileModal from "@/context/auth-modal-context"

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCreateProfileModal, setShowCreateProfileModal] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const toggleAuthModal = () => setShowAuthModal(prev => !prev);
  const closeAuthModal = () => setShowAuthModal(false);

  const toggleCreateProfileModal = () =>
    setShowCreateProfileModal(prev => !prev);
  const closeCreateProfileModal = () => setShowCreateProfileModal(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AuthModalContext.Provider
      value={{
        isAuthModalOpen: showAuthModal,
        closeAuthModal,
        toggleAuthModal,
      }}
    >
      <CreateProfileContext.Provider
        value={{
          isCreateProfileModalOpen: showCreateProfileModal,
          toggleCreateProfileModal,
          closeCreateProfileModal,
        }}
      >
        {children}
        {/* <AuthModal /> */}
        {/* <CreateProfileModal /> */}
      </CreateProfileContext.Provider>
    </AuthModalContext.Provider>
  );
};

export default ModalProvider;
