import React, {useState, useEffect} from 'react';
import Dropzone from 'react-dropzone';
import { FaTrash } from 'react-icons/fa';

import { 
  Container,
  DropContainer,
  DropContainer2,
  Label,
  InputComponent,
  CancelButton,
  Button,
  SelectComponent,
  TagsComponent,
  TrashComponent,
  UploadMessage,
  ButtonDelTag,
  Tag,
} from './styles';
interface IProps {
  setIsCreate(b: boolean): void;
}
const NewPack = ({setIsCreate}: IProps) => {
  const [title, setTitle] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [api, setApi] = useState<string>();
  const [tags, setTags] = useState<string[]>(['tags test 1', 'test 2', 'tag 3', 'tag 3', 'tag 3', 'tag 3']);
  const [tagClean, setTagClean] = useState<string>();
  const [image, setImage] = useState<string>();
  const [imagePreview, setImagePreview] = useState<any>();
  const [templateImage, setTemplateImage] = useState<any>();
  const [templateImagePreview, setTemplateImagePreview] = useState<any>();

  const handlePreviewImage = async (files: any) => {
    const preview = URL.createObjectURL(files?.[0]);
    setImagePreview(preview);
    setImage(files);
  };
  const handlePreviewTemplate = async (files: any) => {
    const preview = URL.createObjectURL(files?.[0]);
    setTemplateImagePreview(preview);
    setTemplateImage(files);
  };
  const renderDragMessage = (isDragActive: any, isDragReject: any) => {
    if (!isDragActive) {
      return (
        <TrashComponent>
          <FaTrash />
        </TrashComponent>
      );
    }
    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>;
    }
    return <UploadMessage type="success">Solte aqui ... </UploadMessage>;
  };

  const addTagsFromState = (tagStr: string) => {
    console.log({
      tags,
    })
    const newArr = [...tags];
    newArr.push(tagStr);
    console.log({
      newArr,
    })
    setTags(newArr);
    setTagClean('');
  }

  useEffect(() => {
    const inputElement = document.getElementById('enter');
    inputElement?.addEventListener('keyup', function(e: any){
      var key = e.which || e.keyCode;
      if (key === 13) {      
        console.log('carregou enter o valor digitado foi: ', e?.target.value);
        if(e?.target.value) {
          addTagsFromState(e?.target.value);
        }
      }
    });
  }, [])

  return (
    <Container>
      <span style={{fontSize: '15pt', fontWeight: '600', marginBottom: '3%'}}>Novo Pack</span>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <div style={{
          width: '50%'
        }}>
          <div>
            <Label>Nome<span style={{color: '#c45'}}>*</span></Label>
            <InputComponent>
              <input
              style={{width: '100%', border: 'none', backgroundColor: 'transparent'}}
              placeholder='Pack Name'
              onChange={txt => setTitle(txt.target.value)}
              />
            </InputComponent>
          </div>
          <div>
            <Label>Categoria</Label>
            <SelectComponent>
              <option value="cat1">cat1</option>
              <option value="cat2">cat2</option>
              <option value="cat3">cat3</option>
            </SelectComponent>
          </div>
          <div>
            <Label>API</Label>
            <InputComponent>
              <input
              style={{width: '100%', border: 'none', backgroundColor: 'transparent'}}
              placeholder='Api'
              onChange={txt => setTitle(txt.target.value)}
              />
            </InputComponent>
          </div>
          <div>
            <Label>Tags<span style={{color: '#c45'}}>*</span></Label>
            <TagsComponent>
              {
                tags?.map(t => (
                  <Tag>
                    <small>{t}</small>
                    <ButtonDelTag>X</ButtonDelTag>
                  </Tag>
                ))
              }
              <input
              id="enter"
              style={{width: '100%', border: 'none', backgroundColor: 'transparent'}}
              placeholder=''
              onChange={txt => setTagClean(txt.target.value)}
              value={tagClean}
              />
            </TagsComponent>
          </div>
        </div>


        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%'
        }}>
          <div >
          <Label>Logo<span style={{color: '#c45'}}>*</span></Label>
            <Dropzone accept="image/*" onDropAccepted={handlePreviewImage}>
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragReject,
              }) => (
                <DropContainer
                  {...getRootProps()}
                  isDragActive={isDragActive} // aceitar img
                  isDragReject={isDragReject}
                  img={imagePreview}
                >
                  <input {...getInputProps()} />
                  {renderDragMessage(isDragActive, isDragReject)}
                </DropContainer>
              )}
              </Dropzone>
          </div>
          <div style={{marginTop: '12px'}}>
          <Label>Image<span style={{color: '#c45'}}>*</span></Label>
            <Dropzone accept="image/*" onDropAccepted={handlePreviewTemplate}>
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragReject,
              }) => (
                <DropContainer2
                  {...getRootProps()}
                  isDragActive={isDragActive} // aceitar img
                  isDragReject={isDragReject}
                  img={templateImagePreview}
                >
                  <input {...getInputProps()} />
                  {renderDragMessage(isDragActive, isDragReject)}
                </DropContainer2>
              )}
              </Dropzone>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <CancelButton onClick={() => setIsCreate(false)}>
          Cancelar
        </CancelButton>
        <Button>
          Criar Pack
        </Button>
      </div>
    </Container>
  );
}

export default NewPack;