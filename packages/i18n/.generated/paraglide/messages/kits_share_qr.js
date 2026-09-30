/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_QrInputs */

const en_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR code`)
};

const es_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código QR`)
};

const de_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-Code`)
};

const fr_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code QR`)
};

const it_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice QR`)
};

const nl_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-code`)
};

const pl_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod QR`)
};

const pt_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código QR`)
};

const ru_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-код`)
};

const sv_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-kod`)
};

const tr_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR kodu`)
};

const zh_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`二维码`)
};

const ja_kits_share_qr = /** @type {(inputs: Kits_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR コード`)
};

/**
* | output |
* | --- |
* | "QR code" |
*
* @param {Kits_Share_QrInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_qr = /** @type {((inputs?: Kits_Share_QrInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_QrInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_qr(inputs)
	if (locale === "de") return de_kits_share_qr(inputs)
	if (locale === "fr") return fr_kits_share_qr(inputs)
	if (locale === "it") return it_kits_share_qr(inputs)
	if (locale === "nl") return nl_kits_share_qr(inputs)
	if (locale === "pl") return pl_kits_share_qr(inputs)
	if (locale === "pt") return pt_kits_share_qr(inputs)
	if (locale === "ru") return ru_kits_share_qr(inputs)
	if (locale === "sv") return sv_kits_share_qr(inputs)
	if (locale === "tr") return tr_kits_share_qr(inputs)
	if (locale === "zh") return zh_kits_share_qr(inputs)
	if (locale === "ja") return ja_kits_share_qr(inputs)
	return en_kits_share_qr(inputs)
});
