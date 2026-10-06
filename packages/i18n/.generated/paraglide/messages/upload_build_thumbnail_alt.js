/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Build_Thumbnail_AltInputs */

const en_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Thumbnail of the build ${i?.name}`)
};

const es_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Miniatura de la build ${i?.name}`)
};

const de_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vorschaubild des Builds ${i?.name}`)
};

const fr_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Miniature du build ${i?.name}`)
};

const it_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Miniatura della build ${i?.name}`)
};

const nl_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Miniatuur van de build ${i?.name}`)
};

const pl_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Miniatura builda ${i?.name}`)
};

const pt_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Miniatura da build ${i?.name}`)
};

const ru_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Миниатюра постройки ${i?.name}`)
};

const sv_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Miniatyr av bygget ${i?.name}`)
};

const tr_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yapısının küçük resmi`)
};

const zh_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`建筑 ${i?.name} 的缩略图`)
};

const ja_upload_build_thumbnail_alt = /** @type {(inputs: Upload_Build_Thumbnail_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`建築 ${i?.name} のサムネイル`)
};

/**
* | output |
* | --- |
* | "Thumbnail of the build {name}" |
*
* @param {Upload_Build_Thumbnail_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_build_thumbnail_alt = /** @type {((inputs: Upload_Build_Thumbnail_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_Thumbnail_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_build_thumbnail_alt(inputs)
	if (locale === "de") return de_upload_build_thumbnail_alt(inputs)
	if (locale === "fr") return fr_upload_build_thumbnail_alt(inputs)
	if (locale === "it") return it_upload_build_thumbnail_alt(inputs)
	if (locale === "nl") return nl_upload_build_thumbnail_alt(inputs)
	if (locale === "pl") return pl_upload_build_thumbnail_alt(inputs)
	if (locale === "pt") return pt_upload_build_thumbnail_alt(inputs)
	if (locale === "ru") return ru_upload_build_thumbnail_alt(inputs)
	if (locale === "sv") return sv_upload_build_thumbnail_alt(inputs)
	if (locale === "tr") return tr_upload_build_thumbnail_alt(inputs)
	if (locale === "zh") return zh_upload_build_thumbnail_alt(inputs)
	if (locale === "ja") return ja_upload_build_thumbnail_alt(inputs)
	return en_upload_build_thumbnail_alt(inputs)
});
