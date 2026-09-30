/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Success_AnotherInputs */

const en_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish something else`)
};

const es_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar otra cosa`)
};

const de_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch etwas veröffentlichen`)
};

const fr_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier autre chose`)
};

const it_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica altro`)
};

const nl_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog iets publiceren`)
};

const pl_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj coś jeszcze`)
};

const pt_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar outra coisa`)
};

const ru_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать что-то ещё`)
};

const sv_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera något annat`)
};

const tr_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir şey yayınla`)
};

const zh_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再发布一个`)
};

const ja_upload_success_another = /** @type {(inputs: Upload_Success_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかにも公開する`)
};

/**
* | output |
* | --- |
* | "Publish something else" |
*
* @param {Upload_Success_AnotherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_another = /** @type {((inputs?: Upload_Success_AnotherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_AnotherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_another(inputs)
	if (locale === "de") return de_upload_success_another(inputs)
	if (locale === "fr") return fr_upload_success_another(inputs)
	if (locale === "it") return it_upload_success_another(inputs)
	if (locale === "nl") return nl_upload_success_another(inputs)
	if (locale === "pl") return pl_upload_success_another(inputs)
	if (locale === "pt") return pt_upload_success_another(inputs)
	if (locale === "ru") return ru_upload_success_another(inputs)
	if (locale === "sv") return sv_upload_success_another(inputs)
	if (locale === "tr") return tr_upload_success_another(inputs)
	if (locale === "zh") return zh_upload_success_another(inputs)
	if (locale === "ja") return ja_upload_success_another(inputs)
	return en_upload_success_another(inputs)
});
