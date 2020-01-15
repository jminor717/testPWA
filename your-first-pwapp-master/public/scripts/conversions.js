function human_readable_consumable(element) {
    switch (element.ConsumableCode) {
        case ("TipsDrawerTips"): {
            return generate_inventory_card(element,"1000 ul Tip Drawrs",180," TESTS")
        }
        case ("ConsumableDrawers"): {
            return generate_inventory_card(element,"HPV Extraction Drawrs",180," TESTS")
        }
        case ("Solid Waste"): {
            return generate_inventory_card(element,"Solid Waste",540," TESTS")
        }
        case ("Liquid Waste"): {
            return generate_inventory_card(element,"Liquid Waste",1840," TESTS")
        }
        case ("Reagent1"): {
            return generate_inventory_card(element,"HPV Extraction Trough - L",540," TESTS")
        }
        case ("Reagent2"): {
            return generate_inventory_card(element,"HPV Extraction Trough - R",540," TESTS")
        }
        case ("PositiveHPVControls"): {
            return generate_inventory_card(element,"HPV Pos(+) Controls",62," CONTROLS")
        }
        case ("NegativeHPVControls"): {
            return generate_inventory_card(element,"HPV Neg(-) Controls",62," CONTROLS")
        }
        case ("EmptyPCapTubes"): {
            return generate_inventory_card(element,"Molecular Aliquot Tubes",378," ALIQUOTS")
        }
        case ("1000uLPipetteTips"): {
            return generate_inventory_card(element,"1000 ul Tip Trays",567," ALIQUOTS")
        }
        case ("CombinedWaste"): {
            return generate_inventory_card(element,"Waste Levels",960," ALIQUOTS")
        }
        case ("BULK_CHANNEL_1"): {
            return "1 - "
        }
        case ("BULK_CHANNEL_2"): {
            return "2 - "
        }
        case ("BULK_CHANNEL_3"): {
            return "3 - "
        }
        case ("BULK_CHANNEL_4"): {
            return "4 - "
        }
        case ("BULK_CHANNEL_5"): {
            return "5 - "
        }
        case ("BULK_CHANNEL_6"): {
            return "6 - "
        }
        case ("BULK_CHANNEL_7"): {
            return "7 - "
        }
        case ("BULK_CHANNEL_8"): {
            return "8 - "
        }
    }
}


