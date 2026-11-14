/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Incompatibility_SelfInputs */

const en_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod cannot be marked as incompatible with itself.`)
};

const es_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod no puede marcarse como incompatible consigo mismo.`)
};

const de_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mod kann nicht mit sich selbst inkompatibel sein.`)
};

const fr_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod ne peut pas être incompatible avec lui-même.`)
};

const it_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod non può essere incompatibile con se stesso.`)
};

const nl_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod kan niet incompatibel zijn met zichzelf.`)
};

const pl_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod nie może być niezgodny sam ze sobą.`)
};

const pt_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod não pode ser incompatível consigo mesmo.`)
};

const ru_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод не может быть несовместим сам с собой.`)
};

const sv_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En mod kan inte vara inkompatibel med sig själv.`)
};

const tr_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir mod kendisiyle uyumsuz olarak işaretlenemez.`)
};

const zh_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组不能与自身不兼容。`)
};

const ja_upload_preflight_incompatibility_self = /** @type {(inputs: Upload_Preflight_Incompatibility_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modを自分自身と互換性なしにはできません。`)
};

/**
* | output |
* | --- |
* | "A mod cannot be marked as incompatible with itself." |
*
* @param {Upload_Preflight_Incompatibility_SelfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_incompatibility_self = /** @type {((inputs?: Upload_Preflight_Incompatibility_SelfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Incompatibility_SelfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_incompatibility_self(inputs)
	if (locale === "de") return de_upload_preflight_incompatibility_self(inputs)
	if (locale === "fr") return fr_upload_preflight_incompatibility_self(inputs)
	if (locale === "it") return it_upload_preflight_incompatibility_self(inputs)
	if (locale === "nl") return nl_upload_preflight_incompatibility_self(inputs)
	if (locale === "pl") return pl_upload_preflight_incompatibility_self(inputs)
	if (locale === "pt") return pt_upload_preflight_incompatibility_self(inputs)
	if (locale === "ru") return ru_upload_preflight_incompatibility_self(inputs)
	if (locale === "sv") return sv_upload_preflight_incompatibility_self(inputs)
	if (locale === "tr") return tr_upload_preflight_incompatibility_self(inputs)
	if (locale === "zh") return zh_upload_preflight_incompatibility_self(inputs)
	if (locale === "ja") return ja_upload_preflight_incompatibility_self(inputs)
	return en_upload_preflight_incompatibility_self(inputs)
});
