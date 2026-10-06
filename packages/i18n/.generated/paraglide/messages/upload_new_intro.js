/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_IntroInputs */

const en_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What do you want to publish?`)
};

const es_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué quieres publicar?`)
};

const de_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was möchtest du veröffentlichen?`)
};

const fr_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que voulez-vous publier ?`)
};

const it_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa vuoi pubblicare?`)
};

const nl_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat wil je publiceren?`)
};

const pl_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co chcesz opublikować?`)
};

const pt_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que você quer publicar?`)
};

const ru_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что вы хотите опубликовать?`)
};

const sv_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad vill du publicera?`)
};

const tr_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne yayınlamak istiyorsun?`)
};

const zh_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你想发布什么？`)
};

const ja_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`何を公開しますか？`)
};

/**
* | output |
* | --- |
* | "What do you want to publish?" |
*
* @param {Upload_New_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_intro = /** @type {((inputs?: Upload_New_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_intro(inputs)
	if (locale === "de") return de_upload_new_intro(inputs)
	if (locale === "fr") return fr_upload_new_intro(inputs)
	if (locale === "it") return it_upload_new_intro(inputs)
	if (locale === "nl") return nl_upload_new_intro(inputs)
	if (locale === "pl") return pl_upload_new_intro(inputs)
	if (locale === "pt") return pt_upload_new_intro(inputs)
	if (locale === "ru") return ru_upload_new_intro(inputs)
	if (locale === "sv") return sv_upload_new_intro(inputs)
	if (locale === "tr") return tr_upload_new_intro(inputs)
	if (locale === "zh") return zh_upload_new_intro(inputs)
	if (locale === "ja") return ja_upload_new_intro(inputs)
	return en_upload_new_intro(inputs)
});
