import { useEffect, useState } from 'react'
import { AlertBanner } from 'components/base'

import { isNil, makeStyles } from 'utils'

import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'

import type { SelectChangeEvent } from '@mui/material'
import type { Option, OptionPickerMode, OptionPickerProps } from './OptionPicker_d'

const IMAGE_BOX_SIZE = 64
const IMAGE_SIZE = 32
const NOT_ALLOWED = 'not-allowed'

const useStyles = makeStyles<{
  mode: OptionPickerMode
}>()((theme, { mode }) => ({
  root: {
    display: 'flex',
    flexDirection: mode === 'grid' ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    textAlign: mode === 'grid' ? 'center' : 'left'
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  header: {
    marginBottom: theme.spacing(2),
    textAlign: 'center'
  },
  subTitle: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    boxShadow: 'none'
  },
  box: {
    alignItems: 'center',
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: mode === 'grid' ? 'center' : 'left',
    minWidth: 48,
    padding: theme.spacing(mode === 'grid' ? 1.5 : 2),
    textAlign: 'left',
    '@media (hover)': {
      '&:hover': {
        border: `2px solid ${theme.palette.primary.main}`
      }
    }
  },
  imageBox: {
    height: IMAGE_BOX_SIZE,
    overflow: 'hidden',
    padding: theme.spacing(mode === 'grid' ? 0 : 2),
    width: mode === 'grid' ? IMAGE_BOX_SIZE : '100%'
  },
  selected: {
    backgroundColor: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.main}`
  },
  disabledWrapper: {
    cursor: NOT_ALLOWED
  },
  unavailable: {
    backgroundColor: theme.palette.grey[100],
    border: `2px solid ${theme.palette.grey[100]}`,
    color: theme.palette.grey[600],
    '@media (hover)': {
      '&:hover': {
        border: `2px solid transparent`,
        cursor: NOT_ALLOWED
      }
    }
  },
  label: {
    fontWeight: 600
  },
  image: {
    width: mode === 'grid' ? '100%' : IMAGE_SIZE,
    height: '100%',
    objectFit: 'contain',
    marginRight: theme.spacing(mode === 'grid' ? 0 : 1)
  },
  imageDisabled: { opacity: 0.3 }
}))

const OptionPicker = ({
  className,
  id,
  initialOptions,
  isMultiSelect = false,
  mode = 'grid',
  onSelectOption,
  onUnSelectOption,
  options,
  renderOption,
  title,
  subTitle
}: // eslint-disable-next-line sonarjs/cognitive-complexity
OptionPickerProps) => {
  const { classes, cx } = useStyles({ mode })

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  useEffect(() => {
    if (!isNil(initialOptions)) {
      setSelectedOptions(initialOptions)
    }
  }, [initialOptions])

  const isOptionSelected = (option: Option) =>
    selectedOptions?.filter(selectedOption => selectedOption.key === option.key).length > 0

  const handleSelectOption = (option: Option) => {
    if (!option.disabled) {
      if (isMultiSelect) {
        if (isOptionSelected(option)) {
          setSelectedOptions(selectedOptions.filter(selectedOption => selectedOption.value !== option.value))
          onUnSelectOption && onUnSelectOption(option)
        } else {
          setSelectedOptions([...selectedOptions, option])
          onSelectOption && onSelectOption(option)
        }
      } else {
        setSelectedOptions([option])
        onSelectOption && onSelectOption(option)
      }
    }
  }

  const handleDropDownChange = (event: SelectChangeEvent<string>) => {
    const selectedOption = options.find(option => option.value === event?.target?.value)

    setSelectedOptions([selectedOption])
    onSelectOption && onSelectOption(selectedOption)
  }

  const pickerId = `option_picker_${id}`

  return mode === 'dropdown' ? (
    <div className={className}>
      <FormControl fullWidth>
        <InputLabel id={`${pickerId}_label`}>{title}</InputLabel>
        <Select
          id={pickerId}
          label="Please select"
          labelId={`${pickerId}_label`}
          value={selectedOptions?.[0]?.value || ''}
          onChange={handleDropDownChange}>
          {options.map(option => (
            <MenuItem
              key={option.value}
              className={cx({ [classes.unavailable]: option.unavailable || option.disabled })}
              disabled={option.disabled}
              value={option.value}>
              {option.value}
              {option.unavailable && ' (unavailable)'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  ) : (
    <div className={classes.root} id={pickerId}>
      <div className={classes.header}>
        {title && typeof title === 'string' ? (
          <Typography className={classes.title} gutterBottom variant="h4">
            {title}
          </Typography>
        ) : (
          title
        )}
        {subTitle && typeof subTitle === 'string' ? (
          <AlertBanner className={classes.subTitle}>
            <Typography gutterBottom variant="body3">
              {subTitle}
            </Typography>
          </AlertBanner>
        ) : (
          subTitle
        )}
      </div>
      {options?.map((option: Option) => (
        <div
          key={option.key}
          className={cx(
            {
              [classes.box]: !renderOption,
              [classes.unavailable]: (option.unavailable || option.disabled) && !renderOption,
              [classes.selected]: isOptionSelected(option) && !renderOption,
              [classes.imageBox]: Boolean(option.image) && !renderOption
            },
            className
          )}
          {...(!renderOption && {
            onClick: () => handleSelectOption(option)
          })}>
          {option.image ? (
            <>
              <img
                className={cx(classes.image, {
                  [classes.imageDisabled]: option.disabled
                })}
                src={option.image}
              />
              {mode === 'list' && (
                <Typography className={classes.label} variant="body2">
                  {option.value}
                </Typography>
              )}
            </>
          ) : renderOption ? (
            renderOption(option)
          ) : (
            <Typography className={classes.label} variant="body2">
              {option.value}
            </Typography>
          )}
        </div>
      ))}
    </div>
  )
}

export default OptionPicker
