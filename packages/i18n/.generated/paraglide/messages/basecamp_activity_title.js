/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Activity_TitleInputs */

const en_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent activity`)
};

const es_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actividad reciente`)
};

const de_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte Aktivität`)
};

const fr_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activité récente`)
};

const it_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attività recente`)
};

const nl_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recente activiteit`)
};

const pl_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnia aktywność`)
};

const pt_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atividade recente`)
};

const ru_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавняя активность`)
};

const sv_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste aktivitet`)
};

const tr_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son etkinlik`)
};

const zh_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`近期动态`)
};

const ja_basecamp_activity_title = /** @type {(inputs: Basecamp_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近のアクティビティ`)
};

/**
* | output |
* | --- |
* | "Recent activity" |
*
* @param {Basecamp_Activity_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_activity_title = /** @type {((inputs?: Basecamp_Activity_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Activity_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_activity_title(inputs)
	if (locale === "de") return de_basecamp_activity_title(inputs)
	if (locale === "fr") return fr_basecamp_activity_title(inputs)
	if (locale === "it") return it_basecamp_activity_title(inputs)
	if (locale === "nl") return nl_basecamp_activity_title(inputs)
	if (locale === "pl") return pl_basecamp_activity_title(inputs)
	if (locale === "pt") return pt_basecamp_activity_title(inputs)
	if (locale === "ru") return ru_basecamp_activity_title(inputs)
	if (locale === "sv") return sv_basecamp_activity_title(inputs)
	if (locale === "tr") return tr_basecamp_activity_title(inputs)
	if (locale === "zh") return zh_basecamp_activity_title(inputs)
	if (locale === "ja") return ja_basecamp_activity_title(inputs)
	return en_basecamp_activity_title(inputs)
});
