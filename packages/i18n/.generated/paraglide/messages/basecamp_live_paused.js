/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Live_PausedInputs */

const en_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paused`)
};

const es_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En pausa`)
};

const de_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pausiert`)
};

const fr_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En pause`)
};

const it_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In pausa`)
};

const nl_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepauzeerd`)
};

const pl_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstrzymano`)
};

const pt_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pausado`)
};

const ru_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приостановлено`)
};

const sv_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pausad`)
};

const tr_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duraklatıldı`)
};

const zh_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已暂停`)
};

const ja_basecamp_live_paused = /** @type {(inputs: Basecamp_Live_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一時停止中`)
};

/**
* | output |
* | --- |
* | "Paused" |
*
* @param {Basecamp_Live_PausedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_live_paused = /** @type {((inputs?: Basecamp_Live_PausedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_PausedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_live_paused(inputs)
	if (locale === "de") return de_basecamp_live_paused(inputs)
	if (locale === "fr") return fr_basecamp_live_paused(inputs)
	if (locale === "it") return it_basecamp_live_paused(inputs)
	if (locale === "nl") return nl_basecamp_live_paused(inputs)
	if (locale === "pl") return pl_basecamp_live_paused(inputs)
	if (locale === "pt") return pt_basecamp_live_paused(inputs)
	if (locale === "ru") return ru_basecamp_live_paused(inputs)
	if (locale === "sv") return sv_basecamp_live_paused(inputs)
	if (locale === "tr") return tr_basecamp_live_paused(inputs)
	if (locale === "zh") return zh_basecamp_live_paused(inputs)
	if (locale === "ja") return ja_basecamp_live_paused(inputs)
	return en_basecamp_live_paused(inputs)
});
