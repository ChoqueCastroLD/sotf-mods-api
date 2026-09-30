/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Share_QrInputs */

const en_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR code`)
};

const es_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código QR`)
};

const de_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-Code`)
};

const fr_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code QR`)
};

const it_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice QR`)
};

const nl_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-code`)
};

const pl_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod QR`)
};

const pt_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR code`)
};

const ru_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-код`)
};

const sv_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-kod`)
};

const tr_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR kodu`)
};

const zh_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`二维码`)
};

const ja_mod_share_qr = /** @type {(inputs: Mod_Share_QrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR コード`)
};

/**
* | output |
* | --- |
* | "QR code" |
*
* @param {Mod_Share_QrInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_qr = /** @type {((inputs?: Mod_Share_QrInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_QrInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_qr(inputs)
	if (locale === "de") return de_mod_share_qr(inputs)
	if (locale === "fr") return fr_mod_share_qr(inputs)
	if (locale === "it") return it_mod_share_qr(inputs)
	if (locale === "nl") return nl_mod_share_qr(inputs)
	if (locale === "pl") return pl_mod_share_qr(inputs)
	if (locale === "pt") return pt_mod_share_qr(inputs)
	if (locale === "ru") return ru_mod_share_qr(inputs)
	if (locale === "sv") return sv_mod_share_qr(inputs)
	if (locale === "tr") return tr_mod_share_qr(inputs)
	if (locale === "zh") return zh_mod_share_qr(inputs)
	if (locale === "ja") return ja_mod_share_qr(inputs)
	return en_mod_share_qr(inputs)
});
