/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Slug_OkInputs */

const en_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Address available.`)
};

const es_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dirección disponible.`)
};

const de_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse verfügbar.`)
};

const fr_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse disponible.`)
};

const it_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzo disponibile.`)
};

const nl_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres beschikbaar.`)
};

const pl_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres dostępny.`)
};

const pt_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereço disponível.`)
};

const ru_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес свободен.`)
};

const sv_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adressen är ledig.`)
};

const tr_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres uygun.`)
};

const zh_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地址可用。`)
};

const ja_upload_preflight_slug_ok = /** @type {(inputs: Upload_Preflight_Slug_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレスは使用できます。`)
};

/**
* | output |
* | --- |
* | "Address available." |
*
* @param {Upload_Preflight_Slug_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_slug_ok = /** @type {((inputs?: Upload_Preflight_Slug_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Slug_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_slug_ok(inputs)
	if (locale === "de") return de_upload_preflight_slug_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_slug_ok(inputs)
	if (locale === "it") return it_upload_preflight_slug_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_slug_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_slug_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_slug_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_slug_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_slug_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_slug_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_slug_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_slug_ok(inputs)
	return en_upload_preflight_slug_ok(inputs)
});
