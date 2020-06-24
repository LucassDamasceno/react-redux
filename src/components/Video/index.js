import React, { useState } from 'react';

import { connect } from 'react-redux'

const Video = ({ activeLesson, activeModule }) => (
    <div>
        <strong>Módulo {activeModule.title}</strong>
        <strong>Aula {activeLesson.title}</strong>
    </div>
)

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
}))(Video);