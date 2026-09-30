/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Platform_Universal_HintInputs */

const en_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works on both.`)
};

const es_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona en ambos.`)
};

const de_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert auf beiden.`)
};

const fr_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne sur les deux.`)
};

const it_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona su entrambi.`)
};

const nl_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt op allebei.`)
};

const pl_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa w obu przypadkach.`)
};

const pt_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona nos dois.`)
};

const ru_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает и там, и там.`)
};

const sv_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar på båda.`)
};

const tr_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İkisinde de çalışır.`)
};

const zh_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`两者都可运行。`)
};

const ja_upload_platform_universal_hint = /** @type {(inputs: Upload_Platform_Universal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`どちらでも動作します。`)
};

/**
* | output |
* | --- |
* | "Works on both." |
*
* @param {Upload_Platform_Universal_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_platform_universal_hint = /** @type {((inputs?: Upload_Platform_Universal_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Platform_Universal_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_platform_universal_hint(inputs)
	if (locale === "de") return de_upload_platform_universal_hint(inputs)
	if (locale === "fr") return fr_upload_platform_universal_hint(inputs)
	if (locale === "it") return it_upload_platform_universal_hint(inputs)
	if (locale === "nl") return nl_upload_platform_universal_hint(inputs)
	if (locale === "pl") return pl_upload_platform_universal_hint(inputs)
	if (locale === "pt") return pt_upload_platform_universal_hint(inputs)
	if (locale === "ru") return ru_upload_platform_universal_hint(inputs)
	if (locale === "sv") return sv_upload_platform_universal_hint(inputs)
	if (locale === "tr") return tr_upload_platform_universal_hint(inputs)
	if (locale === "zh") return zh_upload_platform_universal_hint(inputs)
	if (locale === "ja") return ja_upload_platform_universal_hint(inputs)
	return en_upload_platform_universal_hint(inputs)
});
