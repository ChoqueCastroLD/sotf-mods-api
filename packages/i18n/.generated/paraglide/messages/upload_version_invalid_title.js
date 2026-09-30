/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Version_Invalid_TitleInputs */

const en_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This version can’t be published.`)
};

const es_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versión no se puede publicar.`)
};

const de_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Version kann nicht veröffentlicht werden.`)
};

const fr_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette version ne peut pas être publiée.`)
};

const it_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa versione non può essere pubblicata.`)
};

const nl_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze versie kan niet worden gepubliceerd.`)
};

const pl_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tej wersji nie można opublikować.`)
};

const pt_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versão não pode ser publicada.`)
};

const ru_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эту версию нельзя опубликовать.`)
};

const sv_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här versionen kan inte publiceras.`)
};

const tr_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürüm yayınlanamaz.`)
};

const zh_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本无法发布。`)
};

const ja_upload_version_invalid_title = /** @type {(inputs: Upload_Version_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンは公開できません。`)
};

/**
* | output |
* | --- |
* | "This version can’t be published." |
*
* @param {Upload_Version_Invalid_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_invalid_title = /** @type {((inputs?: Upload_Version_Invalid_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_Invalid_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_invalid_title(inputs)
	if (locale === "de") return de_upload_version_invalid_title(inputs)
	if (locale === "fr") return fr_upload_version_invalid_title(inputs)
	if (locale === "it") return it_upload_version_invalid_title(inputs)
	if (locale === "nl") return nl_upload_version_invalid_title(inputs)
	if (locale === "pl") return pl_upload_version_invalid_title(inputs)
	if (locale === "pt") return pt_upload_version_invalid_title(inputs)
	if (locale === "ru") return ru_upload_version_invalid_title(inputs)
	if (locale === "sv") return sv_upload_version_invalid_title(inputs)
	if (locale === "tr") return tr_upload_version_invalid_title(inputs)
	if (locale === "zh") return zh_upload_version_invalid_title(inputs)
	if (locale === "ja") return ja_upload_version_invalid_title(inputs)
	return en_upload_version_invalid_title(inputs)
});
