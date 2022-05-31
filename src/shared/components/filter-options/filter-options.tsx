import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useLocation } from "react-router-dom";
import "./filter-options.scss";
import axios from "axios";
import { Button, Checkbox, Popover } from "antd";
import FormattingService from "../../../core/services/formatting.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function FilterOptionsComponent(props: any, ref: any) {
  const [searchOptions, setSearchOptions] = useState([]);
  const [offset, setOffset] = useState(0);

  const location = useLocation();
  const limit = 1000;

  function getSelectedOptions() {
    const query = searchOptions.filter((x) =>
      x.values.some((y) => {
        return y.selected === true;
      })
    );

    const formatted = [];

    for (let i = 0; i < query.length; i++) {
      formatted.push({
        type: query[i].type,
        values: query[i].values.filter((v) => {
          return v.selected === true;
        }),
      });
    }
    return formatted;
  }

  function formatQuery() {
    const formatted = getSelectedOptions();

    let f = formatted.map((param) => {
      return (
        encodeURIComponent(param.type) +
        "=" +
        encodeURIComponent(
          param.values.map((v) => {
            return v.value;
          })
        )
      );
    });
    return "&" + f.join("&");
  }

  useImperativeHandle(
    ref,
    () => ({
      requestRefresh() {
        search();
      },
    }),
    []
  );

  async function search() {
    props.toggleLoading(true);
    await axios
      .get(
        process.env.REACT_APP_API_BASE_URL +
          `marketplace/listed/0x943f9a17aaa6eb0586187c2093c114ad7b8f2e16?limit=${limit}&offset=${offset}` +
          formatQuery()
      )
      .then((res) => {
        props.sendData(res.data);
      });
  }

  async function getFilterOptions() {
    await axios
      .get(
        process.env.REACT_APP_API_BASE_URL +
          `marketplace/attributes/0x943F9A17AAa6Eb0586187c2093c114aD7b8f2e16`
      )
      .then((res: any) => {
        const mapped = res.data.map((option) => {
          return {
            type: option._id,
            values: option.values.map((v) => {
              return {
                value: v.value,
                selected: false,
              };
            }),
          };
        });
        setSearchOptions(mapped);
        search();
      });
  }

  useEffect(() => {
    getFilterOptions();
  }, [location]);

  function toggleItem(type, value) {
    let newState: any = searchOptions;
    console.log(newState)
    let itemToAmend = newState.findIndex(x => x.type === type);
    let valueToAmend = newState[itemToAmend].values.findIndex(x => x.value === value);
    let currentState = newState[itemToAmend].values[valueToAmend].selected;
    newState[itemToAmend].values[valueToAmend].selected = !currentState;
    setSearchOptions(newState);
    search();
  }

  return (
    <div className="filter-options-wrapper">
      {searchOptions.map((option, index) => {
        return (
          <Popover
            placement="bottom"
            key={index}
            title={null}
            content={option.values.map((o, index) => {
              return (
                <Checkbox
                  key={index}
                  checked={o.selected}
                  onChange={() => toggleItem(option.type, o.value)}
                >
                  {o.value}
                </Checkbox>
              );
            })}
            trigger="click"
          >
            <span className="filter-option">
              {FormattingService.formatAttributeNames(option.type)}
            </span>
          </Popover>
        );
      })}
      <div className="selected-options">
        {getSelectedOptions().map((o, index) => {
          return ( o.values.map(v => {
              return ( <div className="selected" onClick={() => toggleItem(o.type, v.value)} key={index}><span className="label">{FormattingService.formatAttributeNames(o.type)}: </span><span className="data">{v.value}</span><FontAwesomeIcon icon={faClose} /></div>)
              })
          );
        })}
      </div>
    </div>
  );
}

export default forwardRef(FilterOptionsComponent);
