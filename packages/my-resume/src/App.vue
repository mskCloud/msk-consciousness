<template>
    <!-- <button class="absolute" @click="exportPdf">打印</button> -->
    <div id="resume" class="flex flex-col items-center text-12px bg-gray-100">
        <div class="bg-white">
            <h2 class="text-center text-24px font-700 mt-8 mb-4">游美锦</h2>
            <Divide label="基本信息"></Divide>
            <ReHeader />
            <Divide label="技能特长"></Divide>
            <Skills />
            <Divide label="公司经历"></Divide>
            <WorkExp time="2024.5 - 今" name="尚德集团-智子源水" job="前端开发工程师">
                <template #content1>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </template>
                <template #content2>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </template>
            </WorkExp>
            <WorkExp time="2021.4 - 2023.12" name="优炫软件（武汉）有限公司" job="前端开发工程师">
                <template #content1>
                    <p>优炫软件国内专业从事数据库软件研发及服务的软件供应商，国家高新技术企业。</p>
                    <p>
                        优炫软件（武汉）有限公司是优炫软件在武汉的子公司，属于研发中心，主要与成都研发中心交接。
                    </p>
                    <p>
                        此外，也会与成都研发中心进行项目沟通，项目支援。
                        本人参与公司研发部的SIMO系统的研发，SIMO系统是公司自研的一款一体化运维管理系统，采用微前端的设计模式，具有运维管理、资产管理、大屏可视化等等服务，现主要用于公司内部以及客户定制
                    </p>
                    <p>
                        我所在的是研发部门，项目组主要负责SIMO系统的子系统的开发版本升级以及维护，负责的系统有
                    </p>
                    <ol>
                        <li>资产管理系统</li>
                        <li>CMDB管理系统</li>
                        <li>ITSM服务流程管理系统</li>
                        <li>IT运维管理系统</li>
                    </ol>
                    <p>此外，也会与成都研发中心进行项目沟通，项目支援。</p>
                </template>
                <template #content2>
                    <ol>
                        <li>全程参与项目的需求分析、前期系统设计、功能开发以及测试等阶段</li>
                        <li>参与研发中心的产品研发</li>
                        <li>参入中标项目开发</li>
                        <li>参与团队的任务分配、任务估时、接口文档编写、任务开发</li>
                        <li>负责PC端的业务开发、功能开发等等</li>
                        <li>负责公用组件开发，以及旧组件的重构与优化，并解决旧组件的一些疑难杂症等问题</li>
                        <li>与团队人员沟通并分享开发过程中的所遇到的问题以及解决方案</li>
                        <li>与其他项目组沟通或协助开发任务</li>
                        <li>与成都、北京开发组的项目沟通</li>
                        <li>完成上级分配的任务以及其他工作</li>
                    </ol>
                </template>
            </WorkExp>
            <WorkExp time="2020.10 - 2021.2" name="梦幻商城小程序" job="前端开发工程师(实习)">
                <template #content1>
                    <p>该公司为初创公司，属于进军餐饮行业的科技公司，主要为餐饮行业提供软件开发。</p>
                    <p>我所在的是公司的研发部，主要负责研发小程序，负责的项目是梦幻商城</p>
                </template>
                <template #content2>
                    <ol>
                        <li>负责梦幻商城小程序项目需求开发以及维护工作</li>
                        <li>与其他人员沟通，分享开发过程中的所遇到的问题以及解决方案</li>
                    </ol>
                </template>
            </WorkExp>
            <Divide label="项目经历"></Divide>
            <ProjectExp
                time="2020.10 - 2021.2"
                name="CMDB管理系统"
                job="前端开发"
                :tags="['vue2', 'vue3', 'vuex', 'vue-router', 'iView', 'd3.js']"
                :show3="true"
                index="1"
            >
                <template #content1>
                    <p>
                        CMDB系统为公司研发的SIMO系统（一体化运维管理系统）中的子系统，为SIMO系统提供配置管理，主要职责是集成其他系统的配置
                        属性，并进行属性的配置管理以及审核管理，主要业务功能为配置管理，配置模型管理，配置变更管理、审核管理等等，除此之外还提供
                        全局搜索功能、配置模型2d拓扑图、配置模型3d拓扑图等等业务辅助功能。项目为多期开发，持续研发与维护。
                    </p>
                </template>
                <template #content2>
                    <ol>
                        <li>参与项目的需求评估会议，前端团队开发会议以及其他会议并提供意见</li>
                        <li>参与评估开发时长，人物分配计划</li>
                        <li>负责开发接口文档、操作手册的编写</li>
                        <li>
                            负责系统的业务功能开发，如配置变更管理、审核管理、配置模型管理、配置模型2d拓扑图等
                        </li>
                        <li>负责对全局公用组件优化或重构，如通用表格、通用表单、通用面包屑导航等等</li>
                        <li>
                            负责多主题样式功能开发，并根据公司UI规范，升级或修复系统中的所有样式规范，达到UI的要求标准
                        </li>
                        <li>与其他人员沟通，分享开发过程中的所遇到的问题以及解决方案</li>
                        <li>与其系统对接，如用户管理系统、报表系统</li>
                    </ol>
                </template>
                <template #content3>
                    <div class="flex bg-gray-200 rounded-md overflow-hidden mb-2">
                        <div class="w-2 bg-amber"></div>
                        <div class="p-2">
                            在开发配置模型的2D拓扑图时，严重问题有技术的选型、新技术的快速学习与任用、功能与业务的分离、2D图的相关算法、渲染逻辑计算问题等等。当时解决方法如下
                        </div>
                    </div>
                    <ol>
                        <li>
                            开会讨论，需要满足当前需求的同时具有可扩展性、复用性，最终决定抛弃原先的Echarts方案，采用D3.js开发底层拓扑图，并且个
                            人全权负责相关开发
                        </li>
                        <li>
                            在开发周期中，在研究D3.js的同时试做demo，并与团队讨论demo的情况，最终确定当前方案
                        </li>
                        <li>
                            demo采用关注点分离的设计，将拓扑图功能颗粒度化，在更具有灵活性的同时，保持与业务逻辑分离，并提供可配置选型
                        </li>
                        <li>demo与框架分离，使用几乎贴近的原生js来开发，可以确保脱离框架运行</li>
                        <li>研究并解决相关算法问题，如动态坐标算法、视图映射算法等</li>
                    </ol>
                </template>
            </ProjectExp>

            <ProjectExp
                time="2020.10 - 2021.2"
                name="雷达阵面管理系统"
                job="前端开发"
                :tags="['vue3', 'pinia', 'vue-router', 'iView', 'vite', 'vant3']"
                index="2"
            >
                <template #content1>
                    <p>
                        这是一个政府军方项目，是属于雷达管理系统中的子系统，该系统是以解决雷达部队中的阵面管理，对多个雷达阵面进行数据化并对其管
                        理，以及为其他系统提供阵面数据和服务，例如阵面盘点服务、阵面录入服务、阵面变更服务等等，并且提供任务PDA功能，以解决部队
                        的日常任务管理、巡查管理。
                    </p>
                </template>
                <template #content2>
                    <ol>
                        <li>独立负责PC端的开发</li>
                        <li>与组长一起制定开发计划，估算开发时长、分配开发任务</li>
                        <li>参与项目的需求、开发会议以及其他会议并提供意见</li>
                        <li>
                            负责于PC端的业务功能开发，如阵面录入、阵面数据同步、编码规则管理、阵面变更等等
                        </li>
                        <li>根据具体业务要求，对当前系统的公共组件进行定制开发</li>
                        <li>负责开发后期PC端缺陷的修复工作</li>
                        <li>负责PC端与其他系统的沟通，进行多系统开发交流</li>
                    </ol>
                </template>
            </ProjectExp>

            <ProjectExp
                time="2020.10 - 2021.2"
                name="塔勤物资管理系统"
                job="前端开发"
                :tags="['vue3', 'pinia', 'vue-router', 'iView', 'vite', 'vant3']"
                index="3"
            >
                <template #content1>
                    <p>
                        这是一个政府军方项目，是塔勤管理系统中的子系统，该系统是以解决塔勤部队中的物资管理。在塔勤中有着不同的系统部门，为每个部
                        门都设立独立的管理空间，提供物资管理、台账管理等等业务功能，并提供PDA版本，解决部队的日常任务的派发问题
                    </p>
                </template>
                <template #content2>
                    <ol>
                        <li>独立负责PC端的开发</li>
                        <li>与组长一起制定开发计划，估算开发时长、分配开发任务</li>
                        <li>参与项目的需求、开发会议以及其他会议并提供意见</li>
                        <li>
                            负责于PC端的业务功能开发，如物资登记管理、物资同步、物资派发、证件登记、仓库管理等等
                        </li>
                        <li>根据具体业务要求，对当前系统的公共组件进行定制开发</li>
                        <li>负责开发后期PC端缺陷的修复工作</li>
                        <li>负责PC端与其他系统的沟通，进行多系统开发交流</li>
                    </ol>
                </template>
            </ProjectExp>

            <ProjectExp
                time="2021.4-2023.12"
                name="资产管理系统"
                job="前端开发"
                :tags="['vue3', 'echarts', 'vue-router', 'iView', 'webpack', 'vant3']"
                index="4"
            >
                <template #content1>
                    <p>
                        资产管理系统为公司研发的SIMO（一体化运维管理系统）系统中的子系统，为SIMO系统提供资产管理，主要职责是提供资产管理、资
                        产模型管理、资产盘点、仓库管理、需求管理、数据字典、台账管理、台账模型，多主题功能等业务功能，同时还提供App端，App负责
                        离线/在线盘点、以及台账管理等功能。当前系统是公司内部系统。项目为多期开发，持续研发与维护。
                    </p>
                </template>
                <template #content2>
                    <ol>
                        <li>参与项目的需求、开发会议以及其他会议并提供意见</li>
                        <li>负责业务有仓库管理、总览管理、台账管理、数据字典管理、资产变更管理</li>
                        <li>负责功能有登录功能、主题设计开发</li>
                        <li>根据规范维护公用组件，并开发新的公用组件，如消息提示、布局组件等等</li>
                        <li>与其他人员沟通，并分享开发过程中的所遇到的问题以及解决方案</li>
                    </ol>
                </template>
            </ProjectExp>

            <ProjectExp
                time="2020.10 - 2021.2"
                name="梦幻商城"
                job="前端开发"
                :tags="['vue3', 'pinia', 'vue-router', 'iView', 'vite', 'vant3']"
                index="5"
            >
                <template #content1>
                    <p>
                        这是一个政府军方项目，是属于雷达管理系统中的子系统，该系统是以解决雷达部队中的阵面管理，对多个雷达阵面进行数据化并对其管
                        理，以及为其他系统提供阵面数据和服务，例如阵面盘点服务、阵面录入服务、阵面变更服务等等，并且提供任务PDA功能，以解决部队
                        的日常任务管理、巡查管理。
                    </p>
                </template>
                <template #content2>
                    <ol>
                        <li>独立负责PC端的开发</li>
                        <li>与组长一起制定开发计划，估算开发时长、分配开发任务</li>
                        <li>参与项目的需求、开发会议以及其他会议并提供意见</li>
                        <li>
                            负责于PC端的业务功能开发，如阵面录入、阵面数据同步、编码规则管理、阵面变更等等
                        </li>
                        <li>根据具体业务要求，对当前系统的公共组件进行定制开发</li>
                        <li>负责开发后期PC端缺陷的修复工作</li>
                        <li>负责PC端与其他系统的沟通，进行多系统开发交流</li>
                    </ol>
                </template>
            </ProjectExp>
        </div>
    </div>
</template>

<script setup>
import ReHeader from './components/ReHeader.vue'
import Divide from './components/Divide.vue'
import Skills from './components/Skills.vue'
import WorkExp from './components/WorkExp.vue'
import ProjectExp from './components/ProjectExp.vue'

import printJs from 'print-js'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

const handlePrint = () => {
    printJs('resume', 'docs/xx_large_printjs.pdf')
}

const exportPdf = () => {
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
    })

    const element = document.getElementById('app')

    doc.html(element, {
        callback: function (doc) {
            doc.save()
        },
        html2canvas: html2canvas
    })
}

const exportHtml = async () => {

}
</script>

<style scoped></style>
