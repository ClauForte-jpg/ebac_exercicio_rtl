import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    // ITEM 2: Código para testar a inserção de dois comentários
    it('Deve adicionar dois comentários na lista', () => {
        render(<PostComment />);

        // Inserindo o primeiro comentário
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Comentário número um' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        // Inserindo o segundo comentário
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Comentário número dois' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        // Verificação: se a lista contém exatamente 2 elementos
        expect(screen.getAllByTestId('comentario-item')).toHaveLength(2);
    });
});