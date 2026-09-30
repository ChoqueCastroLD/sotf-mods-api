/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown> }} Console_Live_StatusInputs */

const en_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Live updates: ${i?.status}`)
};

const es_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualizaciones en vivo: ${i?.status}`)
};

const de_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Live-Updates: ${i?.status}`)
};

const fr_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mises à jour en direct : ${i?.status}`)
};

const it_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornamenti in diretta: ${i?.status}`)
};

const nl_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Live-updates: ${i?.status}`)
};

const pl_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualizacje na żywo: ${i?.status}`)
};

const pt_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizações ao vivo: ${i?.status}`)
};

const ru_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Живые обновления: ${i?.status}`)
};

const sv_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Liveuppdateringar: ${i?.status}`)
};

const tr_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Canlı güncellemeler: ${i?.status}`)
};

const zh_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`实时更新：${i?.status}`)
};

const ja_console_live_status = /** @type {(inputs: Console_Live_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ライブ更新：${i?.status}`)
};

/**
* | output |
* | --- |
* | "Live updates: {status}" |
*
* @param {Console_Live_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_live_status = /** @type {((inputs: Console_Live_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Live_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_live_status(inputs)
	if (locale === "de") return de_console_live_status(inputs)
	if (locale === "fr") return fr_console_live_status(inputs)
	if (locale === "it") return it_console_live_status(inputs)
	if (locale === "nl") return nl_console_live_status(inputs)
	if (locale === "pl") return pl_console_live_status(inputs)
	if (locale === "pt") return pt_console_live_status(inputs)
	if (locale === "ru") return ru_console_live_status(inputs)
	if (locale === "sv") return sv_console_live_status(inputs)
	if (locale === "tr") return tr_console_live_status(inputs)
	if (locale === "zh") return zh_console_live_status(inputs)
	if (locale === "ja") return ja_console_live_status(inputs)
	return en_console_live_status(inputs)
});
