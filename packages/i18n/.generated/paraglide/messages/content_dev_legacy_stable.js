/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Legacy_StableInputs */

const en_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supported (byte-compatible)`)
};

const es_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soportadas (compatibles byte a byte)`)
};

const de_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterstützt (bytegenau kompatibel)`)
};

const fr_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prises en charge (compatibles à l’octet près)`)
};

const it_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supportate (compatibili byte per byte)`)
};

const nl_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ondersteund (byte voor byte compatibel)`)
};

const pl_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obsługiwane (zgodne co do bajtu)`)
};

const pt_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suportadas (compatíveis byte a byte)`)
};

const ru_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поддерживаются (побайтово совместимы)`)
};

const sv_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stöds (bytekompatibla)`)
};

const tr_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destekleniyor (bayt düzeyinde uyumlu)`)
};

const zh_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受支持（逐字节兼容）`)
};

const ja_content_dev_legacy_stable = /** @type {(inputs: Content_Dev_Legacy_StableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サポート中（バイト単位で互換）`)
};

/**
* | output |
* | --- |
* | "Supported (byte-compatible)" |
*
* @param {Content_Dev_Legacy_StableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_legacy_stable = /** @type {((inputs?: Content_Dev_Legacy_StableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_StableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_legacy_stable(inputs)
	if (locale === "de") return de_content_dev_legacy_stable(inputs)
	if (locale === "fr") return fr_content_dev_legacy_stable(inputs)
	if (locale === "it") return it_content_dev_legacy_stable(inputs)
	if (locale === "nl") return nl_content_dev_legacy_stable(inputs)
	if (locale === "pl") return pl_content_dev_legacy_stable(inputs)
	if (locale === "pt") return pt_content_dev_legacy_stable(inputs)
	if (locale === "ru") return ru_content_dev_legacy_stable(inputs)
	if (locale === "sv") return sv_content_dev_legacy_stable(inputs)
	if (locale === "tr") return tr_content_dev_legacy_stable(inputs)
	if (locale === "zh") return zh_content_dev_legacy_stable(inputs)
	if (locale === "ja") return ja_content_dev_legacy_stable(inputs)
	return en_content_dev_legacy_stable(inputs)
});
