
import React, { useState, useEffect } from 'react';
import { Package } from '../types';

interface CheckoutModalProps {
  package: Package;
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ package: pkg, isOpen, onClose }) => {
  const [paymentStatus, setPaymentStatus] = useState<'waiting' | 'processing' | 'completed' | 'error'>('waiting');
  const [qrCodeData, setQrCodeData] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      // TODO: Integração com API da PushingPay
      // Esta função deve ser implementada quando a API estiver disponível
      initializePayment();
    }
  }, [isOpen]);

  const initializePayment = async () => {
    try {
      setPaymentStatus('processing');
      
      /*
        TODO: INTEGRAÇÃO COM API DA PUSHINGPAY
        
        Implementar aqui a chamada para a API da PushingPay:
        
        1. Enviar dados do pacote para gerar pagamento Pix
        2. Receber QR Code dinâmico
        3. Configurar webhook para verificação de pagamento
        4. Atualizar status em tempo real
        
        Exemplo de implementação futura:
        
        const response = await fetch('/api/create-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: pkg.price,
            description: pkg.name,
            packageId: pkg.id
          })
        });
        
        const data = await response.json();
        setQrCodeData(data.qrCode);
        
        // Iniciar polling para verificar pagamento
        const interval = setInterval(async () => {
          const statusResponse = await fetch(`/api/check-payment/${data.paymentId}`);
          const statusData = await statusResponse.json();
          
          if (statusData.status === 'paid') {
            setPaymentStatus('completed');
            clearInterval(interval);
          }
        }, 2000);
      */
      
      // Simulação temporária para demonstração
      setTimeout(() => {
        setQrCodeData('QR_CODE_PLACEHOLDER');
        setPaymentStatus('waiting');
      }, 1500);
      
    } catch (error) {
      console.error('Erro ao inicializar pagamento:', error);
      setPaymentStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="card-gradient rounded-2xl p-6 max-w-md w-full border border-gray-800 animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-playfair text-2xl font-bold text-gradient">
            Finalizar Compra
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Package Summary */}
        <div className="border border-gray-700 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{pkg.emoji}</span>
            <span className="text-xl font-bold text-gradient">
              R$ {pkg.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <h4 className="font-playfair text-lg font-semibold text-white mb-2">
            {pkg.name}
          </h4>
          <p className="text-rose-baby text-sm mb-3">
            {pkg.description}
          </p>
          <ul className="space-y-1">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-center">
                <span className="text-rose-baby mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Section */}
        <div className="text-center">
          {paymentStatus === 'processing' && (
            <div className="py-8">
              <div className="animate-spin w-8 h-8 border-2 border-rose-baby border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-300">Gerando pagamento Pix...</p>
            </div>
          )}

          {paymentStatus === 'waiting' && (
            <div className="py-4">
              {/* 
                TODO: ÁREA PARA RENDERIZAR QR CODE
                Quando a API da PushingPay estiver integrada, 
                substituir este placeholder pelo QR Code real
              */}
              <div className="w-48 h-48 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center">
                <div className="text-black text-center">
                  <p className="text-xs mb-2">QR CODE PIX</p>
                  <p className="text-xs">Será gerado aqui</p>
                  <p className="text-xs">via PushingPay API</p>
                </div>
              </div>
              
              <p className="text-rose-baby font-semibold mb-2">
                Escaneie o QR Code para pagar
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Pagamento via Pix • Aprovação instantânea
              </p>
              
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-400 mb-1">Chave Pix (copiar):</p>
                <p className="text-sm text-white font-mono break-all">
                  {/* TODO: Substituir pela chave Pix real da API */}
                  pix-key-placeholder@email.com
                </p>
              </div>
            </div>
          )}

          {paymentStatus === 'completed' && (
            <div className="py-8 text-center">
              <div className="text-green-500 text-5xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-green-500 mb-2">
                Pagamento Confirmado!
              </h4>
              <p className="text-gray-300 mb-4">
                Seu acesso foi liberado. Verifique seu WhatsApp!
              </p>
              <button
                onClick={onClose}
                className="btn-primary text-black font-semibold px-6 py-3 rounded-xl"
              >
                Fechar
              </button>
            </div>
          )}

          {paymentStatus === 'error' && (
            <div className="py-8 text-center">
              <div className="text-red-500 text-5xl mb-4">❌</div>
              <h4 className="text-xl font-bold text-red-500 mb-2">
                Erro no Pagamento
              </h4>
              <p className="text-gray-300 mb-4">
                Ocorreu um erro. Tente novamente.
              </p>
              <button
                onClick={initializePayment}
                className="btn-primary text-black font-semibold px-6 py-3 rounded-xl mr-2"
              >
                Tentar Novamente
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white px-6 py-3"
              >
                Cancelar
              </button>
            </div>
          )}
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            🔒 Pagamento seguro • Seus dados estão protegidos
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
