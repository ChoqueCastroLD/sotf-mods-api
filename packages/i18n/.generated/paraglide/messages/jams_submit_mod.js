/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Submit_ModInputs */

const en_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod or build`)
};

const es_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod o build`)
};

const de_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod oder Build`)
};

const fr_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ou build`)
};

const it_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod o build`)
};

const nl_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of build`)
};

const pl_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod lub build`)
};

const pt_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ou build`)
};

const ru_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод или сборка`)
};

const sv_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modd eller build`)
};

const tr_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod veya build`)
};

const zh_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组或构建`)
};

const ja_jams_submit_mod = /** @type {(inputs: Jams_Submit_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod またはビルド`)
};

/**
* | output |
* | --- |
* | "Mod or build" |
*
* @param {Jams_Submit_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_mod = /** @type {((inputs?: Jams_Submit_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_mod(inputs)
	if (locale === "de") return de_jams_submit_mod(inputs)
	if (locale === "fr") return fr_jams_submit_mod(inputs)
	if (locale === "it") return it_jams_submit_mod(inputs)
	if (locale === "nl") return nl_jams_submit_mod(inputs)
	if (locale === "pl") return pl_jams_submit_mod(inputs)
	if (locale === "pt") return pt_jams_submit_mod(inputs)
	if (locale === "ru") return ru_jams_submit_mod(inputs)
	if (locale === "sv") return sv_jams_submit_mod(inputs)
	if (locale === "tr") return tr_jams_submit_mod(inputs)
	if (locale === "zh") return zh_jams_submit_mod(inputs)
	if (locale === "ja") return ja_jams_submit_mod(inputs)
	return en_jams_submit_mod(inputs)
});
