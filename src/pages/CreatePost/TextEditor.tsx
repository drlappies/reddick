import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { BsTypeBold } from 'react-icons/bs';

function TextEditor() {
    // const [isBold,setIsBold]=useState<boolean>(false)
    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());

    // const styles = [
    //     {
    //         style: 'bold',
    //         icon: BsTypeBold,
    //     },
    // ];
    // const inlineStyles = [{ style: 'BOLD' }];
    const handleKeyCommand = (command: string, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            setEditorState(newState);
            console.log('handled');

            return 'handled';
        }
        console.log('not-handled');

        return 'not-handled';
    };

    const onBoldClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        const newState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
        setEditorState(newState);
    };

    return (
        <Box border="1px" borderColor="gray.100" borderRadius="4px">
            <Box bg="gray.100">
                {/* <Button onClick={onBoldClick}></Button> */}
                <Box as={Button} onClick={onBoldClick} bg="gray.100" color="gray.600" fontSize="25px">
                    {' '}
                    <Icon as={BsTypeBold}></Icon>
                </Box>
            </Box>
            <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand} />
        </Box>
    );
}

export default TextEditor;
