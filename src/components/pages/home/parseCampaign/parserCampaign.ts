export const parserCampaign = (campaign : ParsedCampaign) => {
    let parsedCampaign : ParsedCampaign = {}
    for (let i in campaign) {
        if (i === "id") {
            parsedCampaign["Идентификатор"] = campaign[i]
        }
        else if (i === "title") {
            parsedCampaign["Название"] = campaign[i]
        }
        else if (i === "state") {
            let key = "Статус"
            let value = ""
            switch (campaign[i]) {
                case "CAMPAIGN_STATE_RUNNING":
                    value = "активная кампания"
                    break
                case "CAMPAIGN_STATE_PLANNED":
                    value = "кампания, сроки проведения которой ещё не наступили"
                    break
                case "CAMPAIGN_STATE_STOPPED":
                    value = "кампания, сроки проведения которой завершились"
                    break
                case "CAMPAIGN_STATE_INACTIVE":
                    value = "кампания, остановленная владельцем"
                    break
                case "CAMPAIGN_STATE_ARCHIVED":
                    value = "архивная кампания"
                    break
                case "CAMPAIGN_STATE_MODERATION_DRAFT":
                    value = "отредактированная кампания до отправки на модерацию"
                    break
                case "CAMPAIGN_STATE_MODERATION_IN_PROGRESS":
                    value = "кампания, отправленная на модерацию"
                    break
                case "CAMPAIGN_STATE_MODERATION_FAILED":
                    value = "кампания, непрошедшая модерацию"
                    break
                case "CAMPAIGN_STATE_FINISHED":
                    value = "кампания завершена, дата окончания в прошлом, такую кампанию нельзя изменить, можно только клонировать или создать новую"
                    break
                default:
                    value = "Не определен"
                    break
            }

            parsedCampaign[key] = value
        }
        else if (i === "advObjectType") {
            let key = "Тип рекламируемой кампании"
            let value = ""
            switch (campaign[i]) {
                case "SKU":
                    value = "реклама товаров в спонсорских полках c размещением на карточках товаров, в поиске или категории"
                    break
                case "BANNER":
                    value = "баннерная рекламная кампания"
                    break
                case "SIS":
                    value = "реклама магазина"
                    break
                case "BRAND_SHELF":
                    value = "брендовая полка"
                    break
                case "BOOSTING_SKU":
                    value = "повышение товаров в каталоге"
                    break
                case "ACTION":
                    value = "рекламная кампания для акций продавца"
                    break
                case "ACTION_CAS":
                    value = "рекламная кампания для акции"
                    break
                default:
                    value = "Не определен"
                    break
            }

            parsedCampaign[key] = value
        }
        else if (i === "fromDate") {
            let key = "Дата старта кампании";
            let value = ""
            if (campaign[i] === "") {
                value = "Не определена"
            }
            else {
                value = new Date(campaign[i]).toDateString()
            }

            parsedCampaign[key] = value
        }
        else if (i === "toDate") {
            let key = "Дата окончания кампании";
            let value = ""
            if (campaign[i] === "") {
                value = "Не определена"
            }
            else {
                value = new Date(campaign[i]).toDateString()
            }

            parsedCampaign[key] = value
        }
        else if (i === "dailyBudget") {
            let key = "Дневной бюджет";
            let value = ""
            if (campaign[i] === "") {
                value = "Не определен"
            }
            else {
                value = campaign[i]
            }

            parsedCampaign[key] = value
        }
        else if (i === "placement") {
            let key = "Место размещения рекламируемых товаров"
            let value = ""

            switch (campaign[i][0]) {
                case "PLACEMENT_PDP" :
                    value = "карточка товара"
                    break
                case "PLACEMENT_SEARCH_AND_CATEGORY" :
                    value = "поиск и категории"
                    break
                default:
                    value = "Не определено"
                    break
            }

            parsedCampaign[key] = value
        }
        else if (i === "budget") {
            let key = "Общий бюджет";
            let value = ""
            if (campaign[i] === "") {
                value = "Не определен"
            }
            else {
                value = campaign[i]
            }

            parsedCampaign[key] = value
        }
    }

    return parsedCampaign;
}