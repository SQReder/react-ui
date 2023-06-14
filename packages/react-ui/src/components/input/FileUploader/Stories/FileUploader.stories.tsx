import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { FileUploader, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  FileUploaderXLTemplate,
  FileUploaderMTemplate,
  FileUploaderWithStatusTemplate,
  FileUploaderCustomFilesTemplate,
  FileUploaderCustomTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import FileUploaderCustomRaw from '!!raw-loader!./Templates/FileUploaderCustom';
import FileUploaderXLRaw from '!!raw-loader!./Templates/FileUploaderXL';
import FileUploaderCustomFilesRaw from '!!raw-loader!./Templates/FileUploaderCustomFiles';
import FileUploaderMRaw from '!!raw-loader!./Templates/FileUploaderM';
import FileUploaderWithStatusRaw from '!!raw-loader!./Templates/FileUploaderWithStatus';

const Separator = styled.div`
  height: 40px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент позволяет выбирать локальные файлы пользователя для последующей загрузки их на сервер. Выбирать файлы
    можно как через нажатие на компонент, так и через Drag and Drop (в XL-размере) на компонент. Компонент имеет две
    разновидности отображения — размер XL с превью изображения или иконкой формата файла и размер M без превью,
    передается параметром fileDimension.
    <Separator />
    Выбранные пользователем файлы передаются списком через параметр uploadedFiles, где каждый файл это объект с
    обязательным ключом file и двумя необязательными ключами status и error.
    <Separator />
    Примечание: в IE11 нет функционала перетаскивания и удаления файлов по причине отсутствия поддержки Drag and Drop и
    конструктора DataTransfer в данном браузере.
  </Desc>
);

export default {
  title: 'Deprecated/FileUploader (Deprecated используйте FileInput)',
  decorators: [withDesign],
  component: FileUploader,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27281',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27389',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27519',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27563',
      },
    ],
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['xl', 'm'],
      control: { type: 'radio' },
    },
    title: {
      control: false,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof FileUploader>;

//<editor-fold desc="File Uploader. XL">
const FileUploaderXLStory: ComponentStory<typeof FileUploader> = (props) => (
  <FileUploaderXLTemplate {...cleanUpProps(props)} />
);

export const FileUploaderXL = FileUploaderXLStory.bind({});
FileUploaderXL.parameters = {
  docs: {
    source: {
      code: FileUploaderXLRaw,
    },
  },
};
FileUploaderXL.storyName = 'File Uploader. XL';
//</editor-fold>

//<editor-fold desc="File Uploader. M">
const FileUploaderMStory: ComponentStory<typeof FileUploader> = (props) => (
  <FileUploaderMTemplate {...cleanUpProps(props)} />
);

export const FileUploaderM = FileUploaderMStory.bind({});
FileUploaderM.storyName = 'File Uploader. M';
FileUploaderM.parameters = {
  docs: {
    source: {
      code: FileUploaderMRaw,
    },
    description: {
      story: `Компонент M-размера используется на мобильных устройствах или как альтернатива большому компоненту. Не имеет функцию
    Drag and Drop. Поведение выбранных файлов такое же, как в компоненте XL-размера. Текстовое описание к полю носит
    произвольный характер, но должно точно описывать количество, размер и тип выбранных файлов.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="File Uploader со статусом загрузки">
const FileUploaderWithStatusStory: ComponentStory<typeof FileUploader> = (props) => (
  <FileUploaderWithStatusTemplate {...cleanUpProps(props)} />
);

export const FileUploaderWithStatus = FileUploaderWithStatusStory.bind({});
FileUploaderWithStatus.storyName = 'File Uploader со статусом загрузки';
FileUploaderWithStatus.parameters = {
  docs: {
    source: {
      code: FileUploaderWithStatusRaw,
    },
    description: {
      story: `Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="'File Uploader. Кастомизированный список файлов">
const FileUploaderCustomFilesStory: ComponentStory<typeof FileUploader> = (props) => (
  <FileUploaderCustomFilesTemplate {...cleanUpProps(props)} />
);

export const FileUploaderCustomFiles = FileUploaderCustomFilesStory.bind({});
FileUploaderCustomFiles.storyName = 'File Uploader. Кастомизированный список файлов';
FileUploaderCustomFiles.parameters = {
  docs: {
    source: {
      code: FileUploaderCustomFilesRaw,
    },
    description: {
      story: `В случае, если необходима кастомизация компонента выбранного файла, нужно воспользоваться методом renderFileInfoList для отрисовки реакт-компонента.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Другой визуальный компонент с функционалом FileUploader">
const FileUploaderCustomStory: ComponentStory<typeof FileUploader> = (props) => (
  <FileUploaderCustomTemplate {...cleanUpProps(props)} />
);

export const FileUploaderCustom = FileUploaderCustomStory.bind({});
FileUploaderCustom.storyName = 'Другой визуальный компонент с функционалом FileUploader';
FileUploaderCustom.parameters = {
  docs: {
    source: {
      code: FileUploaderCustomRaw,
    },
    description: {
      story: `В случае, если необходимо добавить функционал загрузчика к другому компоненту, данный компонент нужно вложить в компонент FileUploader.`,
    },
  },
};
//</editor-fold>
