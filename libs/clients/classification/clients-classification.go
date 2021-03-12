package classification

type Classification struct {
	Id     string `json:"id"`
	Row    int    `json:"Row"`
	Column int    `json:"Column"`
	Status string `json:"Status"`
}

func Get(list ...*Classification) []*Classification {
	if list == nil {
		list = []*Classification{
			{Status: "KWS_KERIDOS", Row: 1, Column: 1, Id: "Class-0004"},
			{Status: "KWS_KERIDOS", Row: 1, Column: 2, Id: "Class-0004"},
			{Status: "KWS_KERIDOS", Row: 1, Column: 3, Id: "Class-0004"},
			{Status: "KWS_KERIDOS", Row: 4, Column: 1, Id: "Class-00016"},
			{Status: "KWS_KERIDOS_YG", Row: 4, Column: 2, Id: "Class-00016"},
			{Status: "KWS_KERIDOS", Row: 1, Column: 4, Id: "Class-0003"},
			{Status: "KWS_KERIDOS", Row: 1, Column: 5, Id: "Class-0003"},
			{Status: "KWS_KERIDOS", Row: 3, Column: 1, Id: "Class-0009"},
			{Status: "KWS_KERIDOS_YG", Row: 3, Column: 2, Id: "Class-0009"},
			{Status: "KWS_KERIDOS", Row: 3, Column: 3, Id: "Class-00012"},
			{Status: "KWS_KERIDOS", Row: 3, Column: 4, Id: "Class-00012"},
			{Status: "KWS_KERIDOS", Row: 2, Column: 1, Id: "Class-0005"},
			{Status: "KWS_KERIDOS", Row: 1, Column: 6, Id: "Class-0001"},
			{Status: "KWS_KERIDOS", Row: 1, Column: 7, Id: "Class-0001"},
			{Status: "KWS_KERIDOS_YG", Row: 2, Column: 2, Id: "Class-0007"},
			{Status: "KWS_KERIDOS_YG", Row: 2, Column: 3, Id: "Class-0005"},
			{Status: "KWS_KERIDOS_YG", Row: 2, Column: 4, Id: "Class-0007"},
			{Status: "KWS_KERIDOS_YG", Row: 2, Column: 5, Id: "Class-0005"},
			{Status: "KWS_KERIDOS_YG", Row: 2, Column: 6, Id: "Class-0007"},
			{Status: "KWS_KERIDOS", Row: 3, Column: 5, Id: "Class-00010"},
			{Status: "KWS_KERIDOS", Row: 3, Column: 6, Id: "Class-00011"},
			{Status: "KWS_KERIDOS_YG", Row: 3, Column: 7, Id: "Class-00010"},
			{Status: "KWS_KERIDOS", Row: 3, Column: 8, Id: "Class-00011"},
			{Status: "KWS_KERIDOS_YG", Row: 3, Column: 9, Id: "Class-00011"},
			{Status: "KWS_KERIDOS", Row: 4, Column: 3, Id: "Class-00013"},
			{Status: "KWS_KERIDOS_YG", Row: 4, Column: 4, Id: "Class-00013"},
			{Status: "KWS_KERIDOS_YG", Row: 2, Column: 7, Id: "Class-0006"},
			{Status: "KWS_KERIDOS_YG", Row: 1, Column: 9, Id: "Class-0002"},
			{Status: "KWS_KERIDOS", Row: 1, Column: 8, Id: "Class-0002"},
			{Status: "KWS_KERIDOS", Row: 2, Column: 8, Id: "Class-0008"},
			{Status: "KWS_KERIDOS_YG", Row: 2, Column: 9, Id: "Class-0006"},
			{Status: "KWS_KERIDOS_YG", Row: 4, Column: 5, Id: "Class-00014"},
			{Status: "KWS_KERIDOS", Row: 4, Column: 6, Id: "Class-00015"},
			{Status: "KWS_KERIDOS_YG", Row: 4, Column: 7, Id: "Class-00014"},
			{Status: "KWS_KERIDOS", Row: 4, Column: 8, Id: "Class-00015"},
			{Status: "KWS_KERIDOS_YG", Row: 4, Column: 9, Id: "Class-00015"},
		}

		return list
	}

	var newList []*Classification

	for _, item := range list {
		switch item.Status {
		case "ERROR":
			item.Status = "UNKNOWN"
		case "UNKNOWN":
			item.Status = "KWS_KERIDOS"
		case "KWS_KERIDOS":
			item.Status = "KWS_KERIDOS_YG"
		case "KWS_KERIDOS_YG":
			item.Status = "ERROR"
		}

		newList = append(newList, item)
	}

	return newList
}
