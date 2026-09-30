/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Show_Activity_HintInputs */

const en_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The 12-month heatmap and your recent activity.`)
};

const es_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mapa de calor de 12 meses y tu actividad reciente.`)
};

const de_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die 12-Monats-Heatmap und deine letzte Aktivität.`)
};

const fr_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La carte de chaleur sur 12 mois et votre activité récente.`)
};

const it_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La mappa di calore di 12 mesi e la tua attività recente.`)
};

const nl_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De heatmap van 12 maanden en je recente activiteit.`)
};

const pl_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mapa aktywności z 12 miesięcy i ostatnie działania.`)
};

const pt_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mapa de calor de 12 meses e sua atividade recente.`)
};

const ru_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тепловая карта за 12 месяцев и недавняя активность.`)
};

const sv_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Värmekartan för 12 månader och din senaste aktivitet.`)
};

const tr_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`12 aylık ısı haritası ve son etkinliğin.`)
};

const zh_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`12 个月热力图和你最近的动态。`)
};

const ja_settings_show_activity_hint = /** @type {(inputs: Settings_Show_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`12か月のヒートマップと最近のアクティビティ。`)
};

/**
* | output |
* | --- |
* | "The 12-month heatmap and your recent activity." |
*
* @param {Settings_Show_Activity_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_show_activity_hint = /** @type {((inputs?: Settings_Show_Activity_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_Activity_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_show_activity_hint(inputs)
	if (locale === "de") return de_settings_show_activity_hint(inputs)
	if (locale === "fr") return fr_settings_show_activity_hint(inputs)
	if (locale === "it") return it_settings_show_activity_hint(inputs)
	if (locale === "nl") return nl_settings_show_activity_hint(inputs)
	if (locale === "pl") return pl_settings_show_activity_hint(inputs)
	if (locale === "pt") return pt_settings_show_activity_hint(inputs)
	if (locale === "ru") return ru_settings_show_activity_hint(inputs)
	if (locale === "sv") return sv_settings_show_activity_hint(inputs)
	if (locale === "tr") return tr_settings_show_activity_hint(inputs)
	if (locale === "zh") return zh_settings_show_activity_hint(inputs)
	if (locale === "ja") return ja_settings_show_activity_hint(inputs)
	return en_settings_show_activity_hint(inputs)
});
