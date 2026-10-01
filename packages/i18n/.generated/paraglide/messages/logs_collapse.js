/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Logs_CollapseInputs */

const en_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hide ×${i?.count}`)
};

const es_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocultar ×${i?.count}`)
};

const de_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} ausblenden`)
};

const fr_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Masquer ×${i?.count}`)
};

const it_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nascondi ×${i?.count}`)
};

const nl_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} verbergen`)
};

const pl_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ukryj ×${i?.count}`)
};

const pt_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocultar ×${i?.count}`)
};

const ru_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скрыть ×${i?.count}`)
};

const sv_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dölj ×${i?.count}`)
};

const tr_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} gizle`)
};

const zh_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`收起 ×${i?.count}`)
};

const ja_logs_collapse = /** @type {(inputs: Logs_CollapseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} を折りたたむ`)
};

/**
* | output |
* | --- |
* | "Hide ×{count}" |
*
* @param {Logs_CollapseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_collapse = /** @type {((inputs: Logs_CollapseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_CollapseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_collapse(inputs)
	if (locale === "de") return de_logs_collapse(inputs)
	if (locale === "fr") return fr_logs_collapse(inputs)
	if (locale === "it") return it_logs_collapse(inputs)
	if (locale === "nl") return nl_logs_collapse(inputs)
	if (locale === "pl") return pl_logs_collapse(inputs)
	if (locale === "pt") return pt_logs_collapse(inputs)
	if (locale === "ru") return ru_logs_collapse(inputs)
	if (locale === "sv") return sv_logs_collapse(inputs)
	if (locale === "tr") return tr_logs_collapse(inputs)
	if (locale === "zh") return zh_logs_collapse(inputs)
	if (locale === "ja") return ja_logs_collapse(inputs)
	return en_logs_collapse(inputs)
});
