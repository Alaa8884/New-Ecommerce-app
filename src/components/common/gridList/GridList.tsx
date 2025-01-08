import React from "react";
import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

type HasId = {
  id?: number;
};
function GridList<T extends HasId>({ records, renderItem }: GridListProps<T>) {
  const renderList =
    records.length > 0
      ? records.map((record) => (
          <Col
            lg="4"
            md="6"
            xs="12"
            className=" d-flex justify-content-center mb-5 mt-2"
            key={record.id}
          >
            {renderItem(record)}
          </Col>
        ))
      : "There are no categories to display";
  return <Row>{renderList}</Row>;
}

export default GridList;
