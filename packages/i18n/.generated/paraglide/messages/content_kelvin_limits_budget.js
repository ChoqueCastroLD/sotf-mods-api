/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Limits_BudgetInputs */

const en_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The AI service has a daily budget. When it runs out, Kelvin still understands you: he picks the closest known order without AI until the next day.`)
};

const es_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El servicio de IA tiene un presupuesto diario. Cuando se agota, Kelvin te sigue entendiendo: elige la orden conocida más parecida, sin IA, hasta el día siguiente.`)
};

const de_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der KI-Dienst hat ein Tagesbudget. Ist es aufgebraucht, versteht Kelvin dich trotzdem: Er wählt bis zum nächsten Tag ohne KI den ähnlichsten bekannten Befehl.`)
};

const fr_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le service d’IA dispose d’un budget quotidien. Une fois épuisé, Kelvin vous comprend toujours : il choisit sans IA l’ordre connu le plus proche jusqu’au lendemain.`)
};

const it_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il servizio di IA ha un budget giornaliero. Quando finisce, Kelvin ti capisce comunque: sceglie senza IA l’ordine noto più simile fino al giorno dopo.`)
};

const nl_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De AI-dienst heeft een dagbudget. Is dat op, dan begrijpt Kelvin je nog steeds: hij kiest tot de volgende dag zonder AI de meest gelijkende bekende opdracht.`)
};

const pl_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usługa AI ma dzienny budżet. Gdy się wyczerpie, Kelvin nadal cię rozumie: do następnego dnia wybiera bez AI najbardziej podobne znane polecenie.`)
};

const pt_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O serviço de IA tem um orçamento diário. Quando ele acaba, o Kelvin continua entendendo você: escolhe, sem IA, a ordem conhecida mais parecida até o dia seguinte.`)
};

const ru_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У ИИ-сервиса есть дневной бюджет. Когда он заканчивается, Кельвин всё равно вас понимает: до следующего дня он без ИИ выбирает самую похожую известную команду.`)
};

const sv_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-tjänsten har en dagsbudget. När den tar slut förstår Kelvin dig ändå: han väljer utan AI den mest liknande kända ordern fram till nästa dag.`)
};

const tr_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapay zekâ hizmetinin günlük bir bütçesi var. Bittiğinde Kelvin seni yine anlar: ertesi güne kadar yapay zekâ olmadan en yakın bilinen emri seçer.`)
};

const zh_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 服务有每日预算。用完后 Kelvin 依然能理解你：在第二天之前，他会不借助 AI，选择最接近的已知命令。`)
};

const ja_content_kelvin_limits_budget = /** @type {(inputs: Content_Kelvin_Limits_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI サービスには 1 日の予算があります。使い切っても、ケルヴィンは翌日まで AI を使わずに最も近い既知の指示を選ぶので、ちゃんと伝わります。`)
};

/**
* | output |
* | --- |
* | "The AI service has a daily budget. When it runs out, Kelvin still understands you: he picks the closest known order without AI until the next day." |
*
* @param {Content_Kelvin_Limits_BudgetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_limits_budget = /** @type {((inputs?: Content_Kelvin_Limits_BudgetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Limits_BudgetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_limits_budget(inputs)
	if (locale === "de") return de_content_kelvin_limits_budget(inputs)
	if (locale === "fr") return fr_content_kelvin_limits_budget(inputs)
	if (locale === "it") return it_content_kelvin_limits_budget(inputs)
	if (locale === "nl") return nl_content_kelvin_limits_budget(inputs)
	if (locale === "pl") return pl_content_kelvin_limits_budget(inputs)
	if (locale === "pt") return pt_content_kelvin_limits_budget(inputs)
	if (locale === "ru") return ru_content_kelvin_limits_budget(inputs)
	if (locale === "sv") return sv_content_kelvin_limits_budget(inputs)
	if (locale === "tr") return tr_content_kelvin_limits_budget(inputs)
	if (locale === "zh") return zh_content_kelvin_limits_budget(inputs)
	if (locale === "ja") return ja_content_kelvin_limits_budget(inputs)
	return en_content_kelvin_limits_budget(inputs)
});
