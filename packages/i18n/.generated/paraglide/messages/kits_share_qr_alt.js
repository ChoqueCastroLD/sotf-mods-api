/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Share_Qr_AltInputs */

const en_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR code of the short link to ${i?.name}`)
};

const es_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Código QR del enlace corto a ${i?.name}`)
};

const de_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR-Code des Kurzlinks zu ${i?.name}`)
};

const fr_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Code QR du lien court vers ${i?.name}`)
};

const it_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Codice QR del link breve a ${i?.name}`)
};

const nl_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR-code van de korte link naar ${i?.name}`)
};

const pl_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kod QR krótkiego linku do ${i?.name}`)
};

const pt_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Código QR do link curto para ${i?.name}`)
};

const ru_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR-код короткой ссылки на ${i?.name}`)
};

const sv_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR-kod för kortlänken till ${i?.name}`)
};

const tr_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kısa bağlantısının QR kodu`)
};

const zh_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 短链接的二维码`)
};

const ja_kits_share_qr_alt = /** @type {(inputs: Kits_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} への短縮リンクの QR コード`)
};

/**
* | output |
* | --- |
* | "QR code of the short link to {name}" |
*
* @param {Kits_Share_Qr_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_qr_alt = /** @type {((inputs: Kits_Share_Qr_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Qr_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_qr_alt(inputs)
	if (locale === "de") return de_kits_share_qr_alt(inputs)
	if (locale === "fr") return fr_kits_share_qr_alt(inputs)
	if (locale === "it") return it_kits_share_qr_alt(inputs)
	if (locale === "nl") return nl_kits_share_qr_alt(inputs)
	if (locale === "pl") return pl_kits_share_qr_alt(inputs)
	if (locale === "pt") return pt_kits_share_qr_alt(inputs)
	if (locale === "ru") return ru_kits_share_qr_alt(inputs)
	if (locale === "sv") return sv_kits_share_qr_alt(inputs)
	if (locale === "tr") return tr_kits_share_qr_alt(inputs)
	if (locale === "zh") return zh_kits_share_qr_alt(inputs)
	if (locale === "ja") return ja_kits_share_qr_alt(inputs)
	return en_kits_share_qr_alt(inputs)
});
