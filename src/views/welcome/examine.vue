<template>
	<div id="contractNew">
		<div class="cent">
			<el-card class="box-card">
				<div class="basic public">
					<div class="infoTit">
						<div class="imgBg">
							基本信息
						</div>
					</div>
					<div class="infoCent">
						<table cellspacing="0" cellpadding="0">
							<tr>
								<td class="tdTit">机号：</td>
								<td class="twoCent">
									B-
								</td>
								<td class="tdTit">机型：</td>
								<td class="twoCent">
									<input class="el-input__inner" placeholder="请输入机号" type="text" />
								</td>
							</tr>
							<tr>
								<td class="tdTit">供机单位：</td>
								<td class="twoCent">
									123
								</td>
								<td class="tdTit">航站(护林基地)：</td>
								<td class="twoCent">
									123
								</td>
							</tr>
							<tr>
								<td class="tdTit">协议进场日期：</td>
								<td class="twoCent">
									123
								</td>
								<td class="tdTit">协议出场日期：</td>
								<td class="twoCent">
									123
								</td>
							</tr>
							<tr>
								<td class="tdTit">实际进场日期：</td>
								<td class="twoCent">
								</td>
							</tr>
							<tr>
								<td class="tdTit">飞机性质：</td>
								<td class="twoCent">
								</td>
								<td class="tdTit">调机方式：</td>
								<td class="twoCent">
								</td>
							</tr>
							<tr>
								<td class="tdTit">是否长期租用：</td>
								<td class="twoCent">
								</td>
								<td class="tdTit">日低限/计划小时：</td>
								<td class="twoCent">
								</td>
							</tr>
						</table>
					</div>
				</div>
			</el-card>
		</div>
		<div class="btns">
			<el-button v-if="state !== '1'" class="submission btn" @click="submission(1)" size="small">通过</el-button>
			<el-button v-if="state !== '1'" class="acceptance btn" @click="submission(2)" size="small">退回</el-button>
			<el-button @click="back" class="closeBtn btn" size="small">返回</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				formdatas: {},
//			任务单价数据
				missionPricesArr: [],
//			航站下拉内容
				HangAndBase: [],
//			机型下拉内容
				Planes: [],
//			供机单位下拉内容
				SupplyUnits: [],
//			定检下拉内容
				CheckTypes: [],
//			扣减标准
				Deductions: [],
//			备注
				note: '',
				state: ''
			}
		},
		created () {
		},
		filters: {
		},
		methods: {
			init () {
//			新增合同资源
			},
//		获取表单数据
			getFormData () {
			},
			submission (state) {
			},
			back () {
				this.$router.back(-1);
			},
//		下载文件
			downloadFile (ShareFileId) {
			}
		}
	}
</script>

<style lang="less" scoped>
	#contractNew {
		background-color: #f5f5f5;
		.cent {
			.box-card {
				margin-bottom: 20px;
			}
			.public {
				border: 1px solid #EEEEEE;
				border-bottom: 0 none;
				.infoTit {
					width: 100%;
					height: 40px;
					line-height: 40px;
					font-size: 16px;
					text-align: center;
					.imgBg {
						width: 160px;
						height: 38px;
						color: #FFFFFF;
					}
				}
				.infoCent {
					table {
						width: 100%;
						border-top: 1px solid #EEEEEE;
						tr {
							height: 50px;
							width: 100%;
							td {
								border-bottom: 1px solid #EEEEEE;
								padding: 5px 8px;
								span {
									font-size: 14px;
								}
								table.withinTable {
									width: 100%;
									border: 1px solid #EEEEEE;
									border-bottom: 0 none;
									tr {
										font-size: 14px;
										color: #333333;
										th {
											height: 34px;
											line-height: 34px;
											background: #f8f8f8;
											border-right: 1px solid #EEEEEE;
											border-bottom: 1px solid #EEEEEE;
										}
										td {
											border-right: 1px solid #EEEEEE;
											span {
												font-size: 14px;
											}
										}
										td.total {
											text-align: right;
										}
										td:last-child, th:last-child {
											border-right: 0 none;
										}
									}
									tr:first-child {
										height: 34px;
									}
								}
								table.withins {
									margin-bottom: 20px;
								}
								table.withins:last-child {
									margin-bottom: 0;
								}
							}
							td.tdTit {
								width: 15%;
								text-align: right;
								font-size: 14px;
								color: #333333;
								font-weight: 600;
								border-left: 1px solid #EEEEEE;
								border-right: 1px solid #EEEEEE;
							}
							td.tdTit:first-child {
								border-left: 0 none;
							}
							td.twoCent {
								width: 35%;
								text-align: left;
							}
							td.oneCent {
								width: 85%;
							}
							td.tdTable {
								padding: 6px 8px;
							}
							.enclosureLink {
								text-align: left;
								font-size: 14px;
								line-height: 22px;
								a {
									color: #337ab7;
									text-decoration: none;
								}
								a:hover {
									color: #23527c;
								}
							}
						}
					}
				}
			}
		}
		.btns {
			margin-top: 10px;
			padding-bottom: 30px;
			.btn {
				width: 102px;
				height: 36px;
				line-height: 36px;
				color: #fff;
				font-size: 15px;
				text-align: center;
				border-radius: 6px;
				padding: 0;
				border: 0 none;
				margin-left: 44px;
			}
			.btn:first-child {
				margin-left: 0;
			}
			.submission {
				background-color: #2877f2;
			}
			.closeBtn {
				background-color: #ff955b;
			}
			.submission:hover {
				background-color: #3b87fc;
			}
			.closeBtn:hover {
				background-color: #ff9d67;
			}
			.acceptance {
        background-color: #00ba6d;
      }
      .acceptance:hover {
        background-color: #17c67e;
      }
		}
	}
</style>