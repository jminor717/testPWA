var offlienNotifications ={
    "@odata.context": "https://localhost:44360/api/$metadata#Notifications",
    "value": [
        {
            "NotificationId": "a3b78fe9-2976-42d1-8c11-511232a73a84",
            "When": "2019-09-10T12:49:17.7367817-04:00",
            "ClearedByUser": null,
            "ClearedByUserDateTime": null,
            "ClearedByInstrument": null,
            "ClearedByInstrumentDateTime": null,
            "SentToRSS": false,
            "InstrumentSerialNumber": "Hiro",
            "NotificationTypeId": "P31608",
            "InstrumentId": "GxLeft",
            "SiteId": null,
            "ConsumableId": null,
            "TransportId": null,
            "VialId": null,
            "OrderId": null,
            "InstrumentConfigurationId": null,
            "DeviceId": null,
            "NotificationType": {
                "NotificationTypeId": "P31608",
                "EventType": "Alert",
                "Name": "Motion Error:  Tip Eject",
                "Description": "Please pause PX.  Contact BD for service.",
                "DetailDescription": null
            },
            "NotificationParameters": [],
            "Instrument": {
                "InstrumentId": "GxLeft",
                "Name": "GX",
                "RealTimePort": 7001,
                "InstrumentSide": "Left"
            },
            "Site": null,
            "InstrumentConfigurationDevice": null
        },
        {
            "NotificationId": "8060e819-ea2e-4ded-8db1-483389802ce2",
            "When": "2019-09-09T11:48:50.0007759-04:00",
            "ClearedByUser": null,
            "ClearedByUserDateTime": null,
            "ClearedByInstrument": "Px",
            "ClearedByInstrumentDateTime": "2019-09-09T14:17:05.2912728-04:00",
            "SentToRSS": false,
            "InstrumentSerialNumber": "ZeroTwo",
            "NotificationTypeId": "G21000",
            "InstrumentId": "Px",
            "SiteId": null,
            "ConsumableId": null,
            "TransportId": null,
            "VialId": null,
            "OrderId": null,
            "InstrumentConfigurationId": null,
            "DeviceId": null,
            "NotificationType": {
                "NotificationTypeId": "G21000",
                "EventType": "Alert",
                "Name": "Gripper Sensor Error",
                "Description": "The instrument will go offline until the condition is corrected.",
                "DetailDescription": null
            },
            "NotificationParameters": [],
            "Instrument": {
                "InstrumentId": "Px",
                "Name": "PX",
                "RealTimePort": 7002,
                "InstrumentSide": "NA"
            },
            "Site": null,
            "InstrumentConfigurationDevice": null
        },
        {
            "NotificationId": "a02b7206-5071-48c9-9f01-f249b04541bd",
            "When": "2019-09-09T10:51:24.9860331-04:00",
            "ClearedByUser": null,
            "ClearedByUserDateTime": null,
            "ClearedByInstrument": null,
            "ClearedByInstrumentDateTime": null,
            "SentToRSS": false,
            "InstrumentSerialNumber": "ZeroTwo",
            "NotificationTypeId": "S40002",
            "InstrumentId": "Px",
            "SiteId": null,
            "ConsumableId": null,
            "TransportId": null,
            "VialId": null,
            "OrderId": null,
            "InstrumentConfigurationId": null,
            "DeviceId": null,
            "NotificationType": {
                "NotificationTypeId": "S40002",
                "EventType": "Warning",
                "Name": "Power Failure",
                "Description": "The BD COR System shutdown unexpectedly.",
                "DetailDescription": null
            },
            "NotificationParameters": [],
            "Instrument": {
                "InstrumentId": "Px",
                "Name": "PX",
                "RealTimePort": 7002,
                "InstrumentSide": "NA"
            },
            "Site": null,
            "InstrumentConfigurationDevice": null
        }
    ]
};

var offlienData= {
    "modules": [
        {
            "Id": "Px",
            "Type": "PX",
            "Side": "NA",
            "State": "OfflineIdle",
            "InstrumentSerialNumber": "ZeroTwo",
            "DisplayState": "Stopped",
            "IsOnline": false,
            "LastException": "",
            "Devices": [
                {
                    "Name": "backpcapclamp",
                    "State": "READY",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "BarcodeReaderStation",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "barcodereaderstationreader",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "barcodereaderstationspinner",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "batchvortexerback",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "batchvortexerfront",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CentralRobotBeamTemperatureSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CIO1",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CIO2",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CIO3",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CIO4",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP1",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP10",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP11",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP12",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP2",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP3",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP4",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP5",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP6",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP7",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP8",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP9",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ConversionOrderSerializerMonitor",
                    "State": "READY",
                    "Status": "READY",
                    "RequiresIntervention": false
                },
                {
                    "Name": "cooler",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CTC1",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "DiluentCognexCamera",
                    "State": "INITIALIZED",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "diluentdispenser",
                    "State": "INITIALIZED",
                    "Status": "Initialize",
                    "RequiresIntervention": false
                },
                {
                    "Name": "doorlatch",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "environmentalConfiguration",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "frontpcapclamp",
                    "State": "READY",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "iobaydoor",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "ISBTImagingCamera",
                    "State": "INITIALIZED",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "isbtrackelevator",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "ledbardiluent",
                    "State": "READY",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ledbarelevator",
                    "State": "READY",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ledbarexternal",
                    "State": "READY",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ledbarinternal",
                    "State": "READY",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ledbariobay",
                    "State": "READY",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "levelsensor",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "pcapbarcodereader",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "pdrt",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "pipettor",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "pipettorarray",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PipettorChannel1",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PipettorPressureController",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "postprocsinglegripper",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "preprocsinglegripper",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "prewarmer",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "PxDoorLOWER_LEFT",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PxDoorLOWER_RIGHT",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PxDoorsLowerLock",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PxDoorsUpperLock",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PxDoorUPPER_LEFT",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PxDoorUPPER_RIGHT",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "rackbarcodereader",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "rackMoveOrderMonitor",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "rackrobot",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "returnpcaprackelevator",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "samplebarcodereader",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "SampleConversionTemperatureSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "SampleImagingCamera",
                    "State": "INITIALIZED",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "sdrt",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "shuttleBarcodeReader",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "shuttleMover",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "shuttleMoverOrderMonitor",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "shuttlePcapUnload",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "shuttlePcapUnloadOrderMonitor",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "shuttleTransport",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "shuttleTransportOrderMonitor",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "singlevortexer",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "SolidWastePresenceSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "systemFans",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "TopVentTemperatureSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "vacutainerholder",
                    "State": "READY",
                    "Status": "",
                    "RequiresIntervention": false
                }
            ],
            "TimeUntilReady": null,
            "AvailableConsumablesPerAssay": null,
            "PermittedTransitions": [
                "InitiateWorkflow",
                "RequestShutdown",
                "EnterDiagnosticMode",
                "BringOnline",
                "CompleteWorkflow",
                "CompletedAllWorkflows",
                "CompletedAllWork"
            ],
            "Inventory": [
                {
                    "ConsumableCode": "PositiveHPVControls",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "NegativeHPVControls",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "EmptyPCapTubes",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "1000uLPipetteTips",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "CombinedWaste",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 960,
                    "TotalUnusedQuantity": 960,
                    "TotalSpace": 960,
                    "Expired": false
                },
                {
                    "ConsumableCode": "BULK_CHANNEL_1",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "BULK_CHANNEL_2",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "BULK_CHANNEL_3",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "BULK_CHANNEL_4",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "BULK_CHANNEL_5",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "BULK_CHANNEL_6",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "BULK_CHANNEL_7",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                },
                {
                    "ConsumableCode": "BULK_CHANNEL_8",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 0,
                    "Expired": false
                }
            ],
            "DoorStatus": true
        },
        {
            "Id": "GxLeft",
            "Type": "GX",
            "Side": "Left",
            "State": "OfflineIdle",
            "InstrumentSerialNumber": "Hiro",
            "DisplayState": "Stopped",
            "IsOnline": false,
            "LastException": "",
            "Devices": [
                {
                    "Name": "CIO_Dwr",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CIO_Periph",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP_DoryHeadCtrl",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP_Dwr1_3",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP_Dwr4_6",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP_Gant",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CMCP_Shut",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "CognexCamera",
                    "State": "INITIALIZED",
                    "Status": "",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ConsumableDrawer1",
                    "State": "READY",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ConsumableDrawer2",
                    "State": "READY",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ConsumableDrawer3",
                    "State": "READY",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ConsumableDrawer4",
                    "State": "READY",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ConsumableDrawer5",
                    "State": "READY",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ConsumableDrawer6",
                    "State": "READY",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Conveyor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "DeckTemperatureSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "DoorBottomLeft",
                    "State": "READY",
                    "Status": "Ready, Closed",
                    "RequiresIntervention": false
                },
                {
                    "Name": "DoorBottomRight",
                    "State": "READY",
                    "Status": "Ready, Closed",
                    "RequiresIntervention": false
                },
                {
                    "Name": "DoorsBottomLock",
                    "State": "READY",
                    "Status": "Ready",
                    "RequiresIntervention": false
                },
                {
                    "Name": "DoorsTopLock",
                    "State": "READY",
                    "Status": "Ready",
                    "RequiresIntervention": false
                },
                {
                    "Name": "DoorTopLeft",
                    "State": "READY",
                    "Status": "Ready, Closed",
                    "RequiresIntervention": false
                },
                {
                    "Name": "DoorTopRight",
                    "State": "READY",
                    "Status": "Ready, Closed",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ElectronicsBayTemperatureSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ExteriorLedBar",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Extractor1",
                    "State": "INITIALIZED",
                    "Status": "INITIALIZED Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Extractor2",
                    "State": "INITIALIZED",
                    "Status": "INITIALIZED Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Extractor3",
                    "State": "INITIALIZED",
                    "Status": "INITIALIZED Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Extractor4",
                    "State": "INITIALIZED",
                    "Status": "INITIALIZED Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Extractor5",
                    "State": "INITIALIZED",
                    "Status": "INITIALIZED Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Extractor6",
                    "State": "INITIALIZED",
                    "Status": "INITIALIZED Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Fan1",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "Fan2",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "Fan3",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "Fan4",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "FrontPunctureToolCaddy",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "GantryRobot",
                    "State": "INITIALIZED",
                    "Status": "Initialized Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Gripper",
                    "State": "INITIALIZED",
                    "Status": " Initialized Serial Number:Unknown Current Usage: 0; GrippingStatus: NoObject  (LiveSimulateGripperSensor: True, _liveSimGrippingStatus NoObject)",
                    "RequiresIntervention": false
                },
                {
                    "Name": "InteriorLedBar",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "LiquidWastePresenceSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Pipettor",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PipettorChannel1",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PipettorChannel2",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PipettorChannel3",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PipettorChannel4",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PipettorChannel5",
                    "State": "INITIALIZED",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PipettorPressureController",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "PunctureTool1",
                    "State": "INITIALIZED",
                    "Status": "INITIALIZED Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "PunctureTool2",
                    "State": "INITIALIZED",
                    "Status": "INITIALIZED Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Reader1",
                    "State": "INITIALIZED",
                    "Status": "Initialized Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Reader1Reset",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "Reader2",
                    "State": "INITIALIZED",
                    "Status": "Initialized Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Reader2Reset",
                    "State": "INITIALIZED",
                    "Status": null,
                    "RequiresIntervention": false
                },
                {
                    "Name": "RearPunctureToolCaddy",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Sealer",
                    "State": "INITIALIZED",
                    "Status": "Simulated Sealer Status",
                    "RequiresIntervention": false
                },
                {
                    "Name": "SealerFilmLevelSensor",
                    "State": "INITIALIZED",
                    "Status": "Sensor SealerFilmLevelSensor is Triggered: True.",
                    "RequiresIntervention": false
                },
                {
                    "Name": "SealerSeatedSensor",
                    "State": "INITIALIZED",
                    "Status": "Sensor SealerSeatedSensor is Triggered: True.",
                    "RequiresIntervention": false
                },
                {
                    "Name": "Shaker",
                    "State": "READY",
                    "Status": " Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "ShuttleTransporter",
                    "State": "INITIALIZED",
                    "Status": " Initialized Serial Number:Unknown Current Usage: 0;ShuttleAtEntry:False ShuttleAtTubeRestraint:False ShuttleTransporterPosition:Unknown",
                    "RequiresIntervention": false
                },
                {
                    "Name": "SolidWastePresenceSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "TeachProbe",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "TipDrawer",
                    "State": "READY",
                    "Status": "Ready Serial Number:Unknown Current Usage: 0",
                    "RequiresIntervention": false
                },
                {
                    "Name": "TubeRestraint",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                },
                {
                    "Name": "WasteLiquidOverflowSensor",
                    "State": "INITIALIZED",
                    "Status": "Initialized",
                    "RequiresIntervention": false
                }
            ],
            "TimeUntilReady": null,
            "AvailableConsumablesPerAssay": null,
            "PermittedTransitions": [
                "InitiateWorkflow",
                "RequestShutdown",
                "EnterDiagnosticMode",
                "BringOnline",
                "CompleteWorkflow",
                "CompletedAllWorkflows",
                "CompletedAllWork"
            ],
            "Inventory": [
                {
                    "ConsumableCode": "TipsDrawerTips",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 480,
                    "Expired": false
                },
                {
                    "ConsumableCode": "ConsumableDrawers",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 180,
                    "Expired": false
                },
                {
                    "ConsumableCode": "Solid Waste",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 540,
                    "TotalUnusedQuantity": 540,
                    "TotalSpace": 3258,
                    "Expired": false
                },
                {
                    "ConsumableCode": "Liquid Waste",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 1840,
                    "TotalUnusedQuantity": 1840,
                    "TotalSpace": 1840,
                    "Expired": false
                },
                {
                    "ConsumableCode": "Reagent1",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 540,
                    "Expired": false
                },
                {
                    "ConsumableCode": "Reagent2",
                    "AssayName": null,
                    "ReservedQuantity": 0,
                    "AvailableQuantity": 0,
                    "TotalUnusedQuantity": 0,
                    "TotalSpace": 540,
                    "Expired": false
                }
            ],
            "DoorStatus": true
        }
    ],
    "notifications": {
        "@odata.context": "https://localhost:44360/api/$metadata#Notifications",
        "value": [
            {
                "NotificationId": "a3b78fe9-2976-42d1-8c11-511232a73a84",
                "When": "2019-09-10T12:49:17.7367817-04:00",
                "ClearedByUser": null,
                "ClearedByUserDateTime": null,
                "ClearedByInstrument": null,
                "ClearedByInstrumentDateTime": null,
                "SentToRSS": false,
                "InstrumentSerialNumber": "Hiro",
                "NotificationTypeId": "P31608",
                "InstrumentId": "GxLeft",
                "SiteId": null,
                "ConsumableId": null,
                "TransportId": null,
                "VialId": null,
                "OrderId": null,
                "InstrumentConfigurationId": null,
                "DeviceId": null,
                "NotificationType": {
                    "NotificationTypeId": "P31608",
                    "EventType": "Alert",
                    "Name": "Motion Error:  Tip Eject",
                    "Description": "Please pause PX.  Contact BD for service.",
                    "DetailDescription": null
                },
                "NotificationParameters": [],
                "Instrument": {
                    "InstrumentId": "GxLeft",
                    "Name": "GX",
                    "RealTimePort": 7001,
                    "InstrumentSide": "Left"
                },
                "Site": null,
                "InstrumentConfigurationDevice": null
            },
            {
                "NotificationId": "8060e819-ea2e-4ded-8db1-483389802ce2",
                "When": "2019-09-09T11:48:50.0007759-04:00",
                "ClearedByUser": null,
                "ClearedByUserDateTime": null,
                "ClearedByInstrument": "Px",
                "ClearedByInstrumentDateTime": "2019-09-09T14:17:05.2912728-04:00",
                "SentToRSS": false,
                "InstrumentSerialNumber": "ZeroTwo",
                "NotificationTypeId": "G21000",
                "InstrumentId": "Px",
                "SiteId": null,
                "ConsumableId": null,
                "TransportId": null,
                "VialId": null,
                "OrderId": null,
                "InstrumentConfigurationId": null,
                "DeviceId": null,
                "NotificationType": {
                    "NotificationTypeId": "G21000",
                    "EventType": "Alert",
                    "Name": "Gripper Sensor Error",
                    "Description": "The instrument will go offline until the condition is corrected.",
                    "DetailDescription": null
                },
                "NotificationParameters": [],
                "Instrument": {
                    "InstrumentId": "Px",
                    "Name": "PX",
                    "RealTimePort": 7002,
                    "InstrumentSide": "NA"
                },
                "Site": null,
                "InstrumentConfigurationDevice": null
            },
            {
                "NotificationId": "a02b7206-5071-48c9-9f01-f249b04541bd",
                "When": "2019-09-09T10:51:24.9860331-04:00",
                "ClearedByUser": null,
                "ClearedByUserDateTime": null,
                "ClearedByInstrument": null,
                "ClearedByInstrumentDateTime": null,
                "SentToRSS": false,
                "InstrumentSerialNumber": "ZeroTwo",
                "NotificationTypeId": "S40002",
                "InstrumentId": "Px",
                "SiteId": null,
                "ConsumableId": null,
                "TransportId": null,
                "VialId": null,
                "OrderId": null,
                "InstrumentConfigurationId": null,
                "DeviceId": null,
                "NotificationType": {
                    "NotificationTypeId": "S40002",
                    "EventType": "Warning",
                    "Name": "Power Failure",
                    "Description": "The BD COR System shutdown unexpectedly.",
                    "DetailDescription": null
                },
                "NotificationParameters": [],
                "Instrument": {
                    "InstrumentId": "Px",
                    "Name": "PX",
                    "RealTimePort": 7002,
                    "InstrumentSide": "NA"
                },
                "Site": null,
                "InstrumentConfigurationDevice": null
            }
        ]
    },
    "AcumulatedAssays": [
        {
            "Name": "HPV",
            "CanRun": false,
            "IsPartialRunBeingCreated": false,
            "SamplesReady": 0,
            "SamplesRequired": 30,
            "AccumulatedSamples": 0
        },
        {
            "Name": "CtGcTv2",
            "CanRun": false,
            "IsPartialRunBeingCreated": false,
            "SamplesReady": 0,
            "SamplesRequired": 24,
            "AccumulatedSamples": 0
        },
        {
            "Name": "MVP",
            "CanRun": false,
            "IsPartialRunBeingCreated": false,
            "SamplesReady": 0,
            "SamplesRequired": 12,
            "AccumulatedSamples": 0
        }
    ],
    "Workflows": [
        {
            "RemainingDuration": "00:00:00",
            "Name": "GX PoweredOnStarting | 1",
            "ExecutionId": "00d5f67c-8383-4010-a5e3-2d972a3310e5",
            "BatchId": "",
            "ExecutionName": null,
            "WorkflowState": "Completed",
            "TimeRemaining": "0:00:00",
            "DisplayDuration": "00:00:00",
            "Execution": [
                {
                    "Name": "InitializeResources",
                    "Skip": false,
                    "PauseAfter": false,
                    "Start": "09/10/19 13:25:21",
                    "End": "09/10/19 13:25:21",
                    "TimeRemaining": "0:00:00",
                    "State": "Completed",
                    "ShowOptions": false,
                    "ExecutionOptions": []
                },
                {
                    "Name": "PoweredOnStartingScript",
                    "Skip": false,
                    "PauseAfter": false,
                    "Start": "09/10/19 13:25:21",
                    "End": "09/10/19 13:25:24",
                    "TimeRemaining": "0:00:00",
                    "State": "Completed",
                    "ShowOptions": false,
                    "ExecutionOptions": []
                },
                {
                    "Name": "StartupCompletion",
                    "Skip": false,
                    "PauseAfter": false,
                    "Start": "09/10/19 13:25:24",
                    "End": "09/10/19 13:25:24",
                    "TimeRemaining": "0:00:45",
                    "State": "Ready",
                    "ShowOptions": false,
                    "ExecutionOptions": []
                }
            ],
            "NumberRuns": 0,
            "ShowWorkflow": true,
            "ExecutionOptions": [],
            "Instruments": "",
            "Status": "Execution complete",
            "TerminalDetails": ""
        }
    ]
}