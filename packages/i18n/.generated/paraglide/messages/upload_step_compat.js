/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_CompatInputs */

const en_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibility`)
};

const es_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidad`)
};

const de_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilität`)
};

const fr_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilité`)
};

const it_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilità`)
};

const nl_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibiliteit`)
};

const pl_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgodność`)
};

const pt_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidade`)
};

const ru_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совместимость`)
};

const sv_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilitet`)
};

const tr_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumluluk`)
};

const zh_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`兼容性`)
};

const ja_upload_step_compat = /** @type {(inputs: Upload_Step_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性`)
};

/**
* | output |
* | --- |
* | "Compatibility" |
*
* @param {Upload_Step_CompatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_compat = /** @type {((inputs?: Upload_Step_CompatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_CompatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_compat(inputs)
	if (locale === "de") return de_upload_step_compat(inputs)
	if (locale === "fr") return fr_upload_step_compat(inputs)
	if (locale === "it") return it_upload_step_compat(inputs)
	if (locale === "nl") return nl_upload_step_compat(inputs)
	if (locale === "pl") return pl_upload_step_compat(inputs)
	if (locale === "pt") return pt_upload_step_compat(inputs)
	if (locale === "ru") return ru_upload_step_compat(inputs)
	if (locale === "sv") return sv_upload_step_compat(inputs)
	if (locale === "tr") return tr_upload_step_compat(inputs)
	if (locale === "zh") return zh_upload_step_compat(inputs)
	if (locale === "ja") return ja_upload_step_compat(inputs)
	return en_upload_step_compat(inputs)
});
