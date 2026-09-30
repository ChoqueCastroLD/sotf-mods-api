/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Share_Qr_AltInputs */

const en_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR code of the link to ${i?.name}`)
};

const es_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Código QR del enlace a ${i?.name}`)
};

const de_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR-Code des Links zu ${i?.name}`)
};

const fr_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Code QR du lien vers ${i?.name}`)
};

const it_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Codice QR del link a ${i?.name}`)
};

const nl_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR-code van de link naar ${i?.name}`)
};

const pl_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kod QR linku do ${i?.name}`)
};

const pt_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR code do link para ${i?.name}`)
};

const ru_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR-код ссылки на ${i?.name}`)
};

const sv_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`QR-kod för länken till ${i?.name}`)
};

const tr_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bağlantısının QR kodu`)
};

const zh_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 链接的二维码`)
};

const ja_mod_share_qr_alt = /** @type {(inputs: Mod_Share_Qr_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} へのリンクの QR コード`)
};

/**
* | output |
* | --- |
* | "QR code of the link to {name}" |
*
* @param {Mod_Share_Qr_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_qr_alt = /** @type {((inputs: Mod_Share_Qr_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_Qr_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_qr_alt(inputs)
	if (locale === "de") return de_mod_share_qr_alt(inputs)
	if (locale === "fr") return fr_mod_share_qr_alt(inputs)
	if (locale === "it") return it_mod_share_qr_alt(inputs)
	if (locale === "nl") return nl_mod_share_qr_alt(inputs)
	if (locale === "pl") return pl_mod_share_qr_alt(inputs)
	if (locale === "pt") return pt_mod_share_qr_alt(inputs)
	if (locale === "ru") return ru_mod_share_qr_alt(inputs)
	if (locale === "sv") return sv_mod_share_qr_alt(inputs)
	if (locale === "tr") return tr_mod_share_qr_alt(inputs)
	if (locale === "zh") return zh_mod_share_qr_alt(inputs)
	if (locale === "ja") return ja_mod_share_qr_alt(inputs)
	return en_mod_share_qr_alt(inputs)
});
