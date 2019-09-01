import styled from "@emotion/styled";
import themed from "@styled-system/css";

export const VolumeWrapper = styled.div(
  themed({
    borderTop: "1px solid",
    borderTopColor: "whites.4",
    paddingX: [0, 4]
  })
);

export const Volume = styled.div(
  themed({
    maxWidth: 1,
    marginX: "auto",
    fontSize: 1
  })
);

export const VolumeTitle = styled.h2(
  themed({
    paddingX: [4, 0]
  })
);

export const DiscourseList = styled.div(
  themed({
    backgroundColor: "whites.0",
    borderRadius: "2px",
    borderColor: "whites.2",
    borderStyle: "solid",
    borderLeftWidth: [0, "1px"],
    borderRightWidth: [0, "1px"],
    borderTopWidth: "1px",
    borderTopBottom: "1px",
    clear: "both",
    marginBottom: 4,
    maxWidth: "100%",
    padding: [0, 0]
  })
);

export const DiscourseListItem = styled.div(
  themed({
    display: "flex",
    flexDirection: ["column", "row"],
    marginY: [0, 3],
    paddingX: [3, 0],
    paddingY: [4, 0],
    "&:hover": {
      backgroundColor: "whites.5"
    }
  })
);

export const Pages = styled.div(
  themed({
    width: [null, "90px"],
    paddingLeft: 4,
    paddingRight: 3,
    paddingY: [1, 2],
    order: [4, 0]
  })
);

export const DateComponent = styled.div(
  themed({
    width: [null, "145px"],
    paddingX: [4, 3],
    paddingY: [1, 2],
    order: [3, 1]
  })
);

export const Speaker = styled.div(
  themed({
    paddingX: [4, 3],
    paddingY: [1, 2],
    order: [2, null],
    width: [null, "140px"]
  })
);

export const Title = styled.div(
  themed({
    order: [0, 3],
    flex: 1,
    paddingY: [1, 2],
    paddingLeft: [3, 0],
    paddingRight: [4, 4]
  })
);
