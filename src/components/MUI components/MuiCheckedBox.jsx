import { Checkbox, Box, FormControlLabel, FormControl, FormLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'

const MuiCheckedBox = () => {
    const [checkedA, setChecked] = useState(false)
    const [skills, setSkills] = useState([])
    console.log({ skills });
    const handle = (e) => {
        setChecked(e.target.checked)
    }
    const handleSkillsChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(e.target.value)
        if(index === -1){
            setSkills([...skills , e.target.value])
        }else{
            setSkills(skills.filter((skills)=> skills !== e.target.value))
        }
    }
    return (
        <>
            <Box>

                <FormControlLabel label='I accept terms & conditions' control={<Checkbox checked={checkedA} onChange={handle} />} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label='HTML'
                            control={<Checkbox checked={skills.includes('html')} onChange={handleSkillsChange} />}
                            value='html'
                        />
                        <FormControlLabel
                            label='CSS'
                            control={<Checkbox checked={skills.includes('css')} onChange={handleSkillsChange} />}
                            value='css'
                        />
                        <FormControlLabel
                            label='JavaScript'
                            control={<Checkbox checked={skills.includes('js')} onChange={handleSkillsChange} />}
                            value='js'
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default MuiCheckedBox
