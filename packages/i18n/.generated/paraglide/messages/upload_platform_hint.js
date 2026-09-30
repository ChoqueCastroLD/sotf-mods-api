/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Platform_HintInputs */

const en_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where RedLoader loads it.`)
};

const es_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dónde lo carga RedLoader.`)
};

const de_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wo RedLoader ihn lädt.`)
};

const fr_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Où RedLoader le charge.`)
};

const it_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dove la carica RedLoader.`)
};

const nl_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar RedLoader hem laadt.`)
};

const pl_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdzie ładuje go RedLoader.`)
};

const pt_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onde o RedLoader o carrega.`)
};

const ru_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Где его загружает RedLoader.`)
};

const sv_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var RedLoader laddar den.`)
};

const tr_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader’ın onu nerede yüklediği.`)
};

const zh_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 在哪里加载它。`)
};

const ja_upload_platform_hint = /** @type {(inputs: Upload_Platform_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoaderが読み込む場所。`)
};

/**
* | output |
* | --- |
* | "Where RedLoader loads it." |
*
* @param {Upload_Platform_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_platform_hint = /** @type {((inputs?: Upload_Platform_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Platform_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_platform_hint(inputs)
	if (locale === "de") return de_upload_platform_hint(inputs)
	if (locale === "fr") return fr_upload_platform_hint(inputs)
	if (locale === "it") return it_upload_platform_hint(inputs)
	if (locale === "nl") return nl_upload_platform_hint(inputs)
	if (locale === "pl") return pl_upload_platform_hint(inputs)
	if (locale === "pt") return pt_upload_platform_hint(inputs)
	if (locale === "ru") return ru_upload_platform_hint(inputs)
	if (locale === "sv") return sv_upload_platform_hint(inputs)
	if (locale === "tr") return tr_upload_platform_hint(inputs)
	if (locale === "zh") return zh_upload_platform_hint(inputs)
	if (locale === "ja") return ja_upload_platform_hint(inputs)
	return en_upload_platform_hint(inputs)
});
