/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Switch_To_RedloaderInputs */

const en_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use Sons of the Forest + RedLoader`)
};

const es_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar Sons of the Forest + RedLoader`)
};

const de_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest + RedLoader verwenden`)
};

const fr_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser Sons of the Forest + RedLoader`)
};

const it_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa Sons of the Forest + RedLoader`)
};

const nl_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest + RedLoader gebruiken`)
};

const pl_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj Sons of the Forest + RedLoader`)
};

const pt_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar Sons of the Forest + RedLoader`)
};

const ru_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать Sons of the Forest + RedLoader`)
};

const sv_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd Sons of the Forest + RedLoader`)
};

const tr_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest + RedLoader kullan`)
};

const zh_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`改为 Sons of the Forest + RedLoader`)
};

const ja_upload_switch_to_redloader = /** @type {(inputs: Upload_Switch_To_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest + RedLoader にする`)
};

/**
* | output |
* | --- |
* | "Use Sons of the Forest + RedLoader" |
*
* @param {Upload_Switch_To_RedloaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_switch_to_redloader = /** @type {((inputs?: Upload_Switch_To_RedloaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Switch_To_RedloaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_switch_to_redloader(inputs)
	if (locale === "de") return de_upload_switch_to_redloader(inputs)
	if (locale === "fr") return fr_upload_switch_to_redloader(inputs)
	if (locale === "it") return it_upload_switch_to_redloader(inputs)
	if (locale === "nl") return nl_upload_switch_to_redloader(inputs)
	if (locale === "pl") return pl_upload_switch_to_redloader(inputs)
	if (locale === "pt") return pt_upload_switch_to_redloader(inputs)
	if (locale === "ru") return ru_upload_switch_to_redloader(inputs)
	if (locale === "sv") return sv_upload_switch_to_redloader(inputs)
	if (locale === "tr") return tr_upload_switch_to_redloader(inputs)
	if (locale === "zh") return zh_upload_switch_to_redloader(inputs)
	if (locale === "ja") return ja_upload_switch_to_redloader(inputs)
	return en_upload_switch_to_redloader(inputs)
});
