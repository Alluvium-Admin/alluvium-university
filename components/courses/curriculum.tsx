export interface ICurriculumModal {
  header: any;
  body: any;
  footer: any;
}

const getModalHeader = (title: string) => {
  return <div>{title}</div>;
};

const getModalBody = (title = "Nothing yet to show") => {
  return <div>{title}</div>;
};

const getModalFooter = (title = "Close") => {
  return <div>{title}</div>;
};

const curriculums: Record<string, ICurriculumModal> = {
  "Core Business": {
    header: getModalHeader("Core Business"),
    body: getModalBody(),
    footer: getModalFooter(),
  },
  "Core Data": {
    header: getModalHeader("Core Data"),
    body: getModalBody(),
    footer: getModalFooter(),
  },
  Cloud: {
    header: getModalHeader("Cloud"),
    body: getModalBody(),
    footer: getModalFooter(),
  },
  "Data Center": {
    header: getModalHeader("Data Center"),
    body: getModalBody(),
    footer: getModalFooter(),
  },
};

export const getCurriculumModalProps = (courseTile: string) => {
  return curriculums[courseTile];
};
