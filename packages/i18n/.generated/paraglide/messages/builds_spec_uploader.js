/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_UploaderInputs */

const en_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaded by`)
};

const es_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subida por`)
};

const de_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hochgeladen von`)
};

const fr_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiée par`)
};

const it_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricata da`)
};

const nl_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geüpload door`)
};

const pl_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przesłał(a)`)
};

const pt_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviada por`)
};

const ru_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузил(а)`)
};

const sv_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdat av`)
};

const tr_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleyen`)
};

const zh_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传者`)
};

const ja_builds_spec_uploader = /** @type {(inputs: Builds_Spec_UploaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロード`)
};

/**
* | output |
* | --- |
* | "Uploaded by" |
*
* @param {Builds_Spec_UploaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_uploader = /** @type {((inputs?: Builds_Spec_UploaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_UploaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_uploader(inputs)
	if (locale === "de") return de_builds_spec_uploader(inputs)
	if (locale === "fr") return fr_builds_spec_uploader(inputs)
	if (locale === "it") return it_builds_spec_uploader(inputs)
	if (locale === "nl") return nl_builds_spec_uploader(inputs)
	if (locale === "pl") return pl_builds_spec_uploader(inputs)
	if (locale === "pt") return pt_builds_spec_uploader(inputs)
	if (locale === "ru") return ru_builds_spec_uploader(inputs)
	if (locale === "sv") return sv_builds_spec_uploader(inputs)
	if (locale === "tr") return tr_builds_spec_uploader(inputs)
	if (locale === "zh") return zh_builds_spec_uploader(inputs)
	if (locale === "ja") return ja_builds_spec_uploader(inputs)
	return en_builds_spec_uploader(inputs)
});
