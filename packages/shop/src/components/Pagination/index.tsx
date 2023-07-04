import { memo, useCallback, useMemo, useState } from "react";
import "./styles.scss";
import CustomButton from "../CustomButton";
import classNames from "classnames";
import CustomInput from "../CustomInput";
import { PAGE_LIMIT } from "src/constants/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationScheme } from "./validationScheme";
import { Controller, useForm } from "react-hook-form";
import PageItem from "./PageItem";

interface PaginationForm {
  page: string;
}

interface Props {
  currentPage: number;
  onChangePage: Function;
  totalPages?: number;
}

const Pagination = memo(
  ({ currentPage, onChangePage, totalPages = 1 }: Props) => {
    const [maxPage, setMaxPage] = useState(PAGE_LIMIT);
    const [minPage, setMinPage] = useState(0);

    const pages = useMemo(() => {
      const pages = [];
      const max = Math.min(maxPage, totalPages);
      for (let i = minPage + 1; i <= max; i++) {
        pages.push(i);
      }
      return pages;
    }, [minPage, maxPage, totalPages]);

    const {
      control,
      handleSubmit,
      reset,
      watch,
      formState: { errors, isValid },
    } = useForm<PaginationForm>({
      defaultValues: {},
      resolver: yupResolver(validationScheme(totalPages)),
      mode: "all",
    });
    const formInputPage = watch("page");

    const handleSelectPage = useCallback(
      (page: number) => {
        if (page > maxPage || page <= minPage) {
          const max =
            page - 1 + PAGE_LIMIT - ((page - 1 + PAGE_LIMIT) % PAGE_LIMIT);
          setMinPage(max - PAGE_LIMIT);
          setMaxPage(max);
        }
        if (onChangePage) onChangePage(page);
        reset({ page: undefined });
      },
      [maxPage, minPage, onChangePage, reset]
    );

    const onSubmit = useCallback(
      ({ page }: PaginationForm) => {
        handleSelectPage(Number(page));
      },
      [handleSelectPage]
    );

    const pageNumbers = pages.map((page: number) => {
      return (
        <CustomButton
          key={page}
          onClick={() => handleSelectPage(page)}
          disabled={currentPage === page}
          size="xs"
          className={classNames([
            "pagination__button",
            currentPage === page ? "pagination__pages-button-selected" : "",
          ])}
        >
          {page}
        </CustomButton>
      );
    });

    const nextEllipsis = useMemo(() => {
      if (maxPage >= totalPages) return <></>;
      return (
        <PageItem
          disabled={currentPage === totalPages}
          onClick={() => handleSelectPage(maxPage + 1)}
        >
          ...
        </PageItem>
      );
    }, [currentPage, totalPages, maxPage, handleSelectPage]);

    const prevEllipsis = useMemo(() => {
      if (minPage < 2) return;
      return <PageItem onClick={() => handleSelectPage(minPage)}>...</PageItem>;
    }, [currentPage, minPage, handleSelectPage]);

    const prev = (
      <PageItem
        disabled={currentPage === 1}
        onClick={() => handleSelectPage(currentPage - 1)}
      >
        &lt;
      </PageItem>
    );

    const next = (
      <PageItem
        disabled={currentPage === totalPages}
        onClick={() => handleSelectPage(currentPage + 1)}
      >
        &gt;
      </PageItem>
    );

    return (
      <div className="pagination">
        <div className="pagination__pages">
          {prev}
          {prevEllipsis}
          {pageNumbers}
          {nextEllipsis}
          {next}
        </div>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="pagination__goto">
            <Controller
              name="page"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    {...field}
                    type="number"
                    size="xs"
                    width="50px"
                    errors={errors}
                  ></CustomInput>
                );
              }}
            />
            <CustomButton
              type="submit"
              size="xs"
              className="pagination__pages-button"
              disabled={!isValid || !formInputPage}
            >
              Go to page
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
);

export default Pagination;
