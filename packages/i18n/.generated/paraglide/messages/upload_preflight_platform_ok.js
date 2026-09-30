/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Platform_OkInputs */

const en_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform set.`)
};

const es_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma indicada.`)
};

const de_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform angegeben.`)
};

const fr_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plateforme indiquée.`)
};

const it_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piattaforma indicata.`)
};

const nl_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform ingesteld.`)
};

const pl_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platforma ustawiona.`)
};

const pt_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma definida.`)
};

const ru_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Платформа указана.`)
};

const sv_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform angiven.`)
};

const tr_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform belirtildi.`)
};

const zh_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已设置平台。`)
};

const ja_upload_preflight_platform_ok = /** @type {(inputs: Upload_Preflight_Platform_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォームを設定済み。`)
};

/**
* | output |
* | --- |
* | "Platform set." |
*
* @param {Upload_Preflight_Platform_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_platform_ok = /** @type {((inputs?: Upload_Preflight_Platform_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Platform_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_platform_ok(inputs)
	if (locale === "de") return de_upload_preflight_platform_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_platform_ok(inputs)
	if (locale === "it") return it_upload_preflight_platform_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_platform_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_platform_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_platform_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_platform_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_platform_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_platform_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_platform_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_platform_ok(inputs)
	return en_upload_preflight_platform_ok(inputs)
});
