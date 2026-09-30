/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ share: NonNullable<unknown> }} Admin_Kelvin_Budget_Alert_TextInputs */

const en_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} of today’s budget is spent. Past the budget, KelvinSeek answers with its offline replies until midnight UTC.`)
};

const es_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se ha gastado el ${i?.share} del presupuesto de hoy. Al superarlo, KelvinSeek responde con sus respuestas sin conexión hasta la medianoche UTC.`)
};

const de_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} des heutigen Budgets sind verbraucht. Darüber hinaus antwortet KelvinSeek bis Mitternacht UTC mit seinen Offline-Antworten.`)
};

const fr_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} du budget du jour est dépensé. Au-delà, KelvinSeek répond avec ses réponses hors ligne jusqu’à minuit UTC.`)
};

const it_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`È stato speso il ${i?.share} del budget di oggi. Oltre il budget, KelvinSeek usa le risposte offline fino alla mezzanotte UTC.`)
};

const nl_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} van het budget van vandaag is op. Daarboven geeft KelvinSeek tot middernacht UTC zijn offline antwoorden.`)
};

const pl_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wydano ${i?.share} dzisiejszego budżetu. Po jego przekroczeniu KelvinSeek do północy UTC udziela odpowiedzi offline.`)
};

const pt_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} do orçamento de hoje já foi gasto. Passando do orçamento, o KelvinSeek usa as respostas offline até a meia-noite UTC.`)
};

const ru_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Потрачено ${i?.share} сегодняшнего бюджета. После его исчерпания KelvinSeek до полуночи UTC отвечает офлайн-ответами.`)
};

const sv_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} av dagens budget är förbrukad. Över budgeten svarar KelvinSeek med sina offlinesvar fram till midnatt UTC.`)
};

const tr_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bugünkü bütçenin ${i?.share} kadarı harcandı. Bütçe aşılınca KelvinSeek UTC gece yarısına kadar çevrimdışı yanıtlarını verir.`)
};

const zh_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今日预算已用 ${i?.share}。超出预算后，KelvinSeek 会在 UTC 午夜前使用离线回复。`)
};

const ja_admin_kelvin_budget_alert_text = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今日の予算の ${i?.share} を使いました。予算を超えると、KelvinSeek は UTC の午前 0 時までオフライン応答を返します。`)
};

/**
* | output |
* | --- |
* | "{share} of today’s budget is spent. Past the budget, KelvinSeek answers with its offline replies until midnight UTC." |
*
* @param {Admin_Kelvin_Budget_Alert_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_budget_alert_text = /** @type {((inputs: Admin_Kelvin_Budget_Alert_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Budget_Alert_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_budget_alert_text(inputs)
	if (locale === "de") return de_admin_kelvin_budget_alert_text(inputs)
	if (locale === "fr") return fr_admin_kelvin_budget_alert_text(inputs)
	if (locale === "it") return it_admin_kelvin_budget_alert_text(inputs)
	if (locale === "nl") return nl_admin_kelvin_budget_alert_text(inputs)
	if (locale === "pl") return pl_admin_kelvin_budget_alert_text(inputs)
	if (locale === "pt") return pt_admin_kelvin_budget_alert_text(inputs)
	if (locale === "ru") return ru_admin_kelvin_budget_alert_text(inputs)
	if (locale === "sv") return sv_admin_kelvin_budget_alert_text(inputs)
	if (locale === "tr") return tr_admin_kelvin_budget_alert_text(inputs)
	if (locale === "zh") return zh_admin_kelvin_budget_alert_text(inputs)
	if (locale === "ja") return ja_admin_kelvin_budget_alert_text(inputs)
	return en_admin_kelvin_budget_alert_text(inputs)
});
