/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Activity_Empty_TitleInputs */

const en_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No activity yet`)
};

const es_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay actividad`)
};

const de_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Aktivität`)
};

const fr_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune activité pour l'instant`)
};

const it_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna attività`)
};

const nl_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen activiteit`)
};

const pl_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak aktywności`)
};

const pt_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda sem atividade`)
};

const ru_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока нет активности`)
};

const sv_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen aktivitet än`)
};

const tr_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz etkinlik yok`)
};

const zh_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无动态`)
};

const ja_basecamp_activity_empty_title = /** @type {(inputs: Basecamp_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクティビティはまだありません`)
};

/**
* | output |
* | --- |
* | "No activity yet" |
*
* @param {Basecamp_Activity_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_activity_empty_title = /** @type {((inputs?: Basecamp_Activity_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Activity_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_activity_empty_title(inputs)
	if (locale === "de") return de_basecamp_activity_empty_title(inputs)
	if (locale === "fr") return fr_basecamp_activity_empty_title(inputs)
	if (locale === "it") return it_basecamp_activity_empty_title(inputs)
	if (locale === "nl") return nl_basecamp_activity_empty_title(inputs)
	if (locale === "pl") return pl_basecamp_activity_empty_title(inputs)
	if (locale === "pt") return pt_basecamp_activity_empty_title(inputs)
	if (locale === "ru") return ru_basecamp_activity_empty_title(inputs)
	if (locale === "sv") return sv_basecamp_activity_empty_title(inputs)
	if (locale === "tr") return tr_basecamp_activity_empty_title(inputs)
	if (locale === "zh") return zh_basecamp_activity_empty_title(inputs)
	if (locale === "ja") return ja_basecamp_activity_empty_title(inputs)
	return en_basecamp_activity_empty_title(inputs)
});
