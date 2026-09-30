/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Hub_RunningInputs */

const en_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Running now`)
};

const es_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En curso`)
};

const de_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft gerade`)
};

const fr_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours`)
};

const it_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In corso`)
};

const nl_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu bezig`)
};

const pl_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trwają teraz`)
};

const pt_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em andamento`)
};

const ru_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проходят сейчас`)
};

const sv_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pågår nu`)
};

const tr_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu anda devam edenler`)
};

const zh_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进行中`)
};

const ja_jams_hub_running = /** @type {(inputs: Jams_Hub_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開催中`)
};

/**
* | output |
* | --- |
* | "Running now" |
*
* @param {Jams_Hub_RunningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_hub_running = /** @type {((inputs?: Jams_Hub_RunningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Hub_RunningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_hub_running(inputs)
	if (locale === "de") return de_jams_hub_running(inputs)
	if (locale === "fr") return fr_jams_hub_running(inputs)
	if (locale === "it") return it_jams_hub_running(inputs)
	if (locale === "nl") return nl_jams_hub_running(inputs)
	if (locale === "pl") return pl_jams_hub_running(inputs)
	if (locale === "pt") return pt_jams_hub_running(inputs)
	if (locale === "ru") return ru_jams_hub_running(inputs)
	if (locale === "sv") return sv_jams_hub_running(inputs)
	if (locale === "tr") return tr_jams_hub_running(inputs)
	if (locale === "zh") return zh_jams_hub_running(inputs)
	if (locale === "ja") return ja_jams_hub_running(inputs)
	return en_jams_hub_running(inputs)
});
